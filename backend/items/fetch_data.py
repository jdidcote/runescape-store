import json
from pathlib import Path

import requests as requests

ROOT_DIR = Path(__file__).parent.parent


def get_item(item_id):
    data = requests.get("https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=" + str(item_id))
    return data.json()


def setup_data():
    data_path = ROOT_DIR / "data"
    if not data_path.exists():
        data_path.mkdir()

    with open(ROOT_DIR / "items/itemIds.json") as f:
        item_ids = json.load(f)

    for item_id in item_ids["itemId"]:
        json_file = f'{data_path / item_id}.json'
        if Path(json_file).exists():
            continue
        with open(json_file, 'w') as f:
            json.dump(get_item(item_id), f)


if __name__ == '__main__':
    setup_data()
