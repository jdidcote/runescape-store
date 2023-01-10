import json

import requests

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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
    data = requests.get("https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=" + str(item_id))
    print(data.json())
    return data.json()
