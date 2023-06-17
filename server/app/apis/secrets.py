import requests

client_id = "secret here"
client_secret = "secret here"

def generateToken():
    token = requests.post('https://accounts.spotify.com/api/token', data={'grant_type': 'client_credentials'}, auth=(client_id, client_secret)).json()
    print(token)
    return token