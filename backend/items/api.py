from pathlib import Path
import json
import warnings

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

ROOT_DIR = Path(__file__).parent.parent

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/items/list")
async def get_item_list():
    with open("items/itemIds.json") as f:
        item_list = json.load(f)
    return item_list


@app.post("/items/data")
async def get_item(item_id):
    try:
        with open(ROOT_DIR / f"data/{item_id}.json") as f:
            data = json.load(f)
            return data
    except FileNotFoundError:
        warnings.warn(f"Item ID {item_id} data not been cached locally")
