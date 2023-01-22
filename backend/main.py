from pathlib import Path

import uvicorn

from items.fetch_data import setup_data

if __name__ == "__main__":
    setup_data()
    uvicorn.run("items.api:app", host="0.0.0.0", port=8000, reload=True)
