from typing import Union
from apis.finder import FinderAPI
from fastapi import FastAPI, Header
import apis.secrets as secrets
import requests

app = FastAPI()



#uvicorn main:app --host 0.0.0.0 --port 8081 --reload

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/gettoken")
def get_token():
    return secrets.generateToken()



@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/hello")
def hello():
    return secrets.client_secret

@app.get("/authcheck")
def authcheck(token: str = "",
              id: str = "",
              market: str = ""
              ):
    response = requests.get("https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl", headers={"Authorization": "Bearer " + token})
    print(response)
    return response.json()
