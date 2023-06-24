from typing import Union
from apis.finder import FinderAPI
from fastapi import FastAPI, Header
import apis.secrets as secrets
import requests
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    '*',
]
#Make the origins more secure later once you have a sense of where you're deploying.

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def _get_token():
    return secrets.generateToken()
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

@app.get("/get_song_by_id/")
def get_by_id(
              id: str = "",
              market: str = ""
              ):
    
    token = _get_token()
    print(token)
    response = requests.get( f'https://api.spotify.com/v1/tracks/{id}', headers={"Authorization": "Bearer " + token})
    return response.json()


@app.get("/get_song_attributes/")
def get_song_attributes(id: str = ""):
    token = _get_token()
    response = requests.get(f'https://api.spotify.com/v1/audio-features/{id}', headers={"Authorization": "Bearer " + token})
    return response.json()

@app.get("/get_song_by_name_and_artist/")
def get_by_name_and_artist(
              name: str = "",
              artist: str = "",
              market: str = "US"
              ):
    token = _get_token()
    response = requests.get("https://api.spotify.com/v1/search?q=track:" + name + "%20artist:" + artist + "&type=track&market=" + market, headers={"Authorization": "Bearer " + token})
    return response.json()


