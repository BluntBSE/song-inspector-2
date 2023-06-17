import requests

client_id = "67f7152ee71e474a912d1d11e106895d"
client_secret = "eb31a88f292140718f2b3d26d96ffc7b"

def generateToken():
    token = requests.post('https://accounts.spotify.com/api/token', data={'grant_type': 'client_credentials'}, auth=(client_id, client_secret)).json()
    print(token)
    return token