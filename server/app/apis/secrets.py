import requests
import base64

client_id = ""
client_secret = ""

def generateToken():
    token = requests.post('https://accounts.spotify.com/api/token', data={'grant_type': 'client_credentials'}, auth=(client_id, client_secret)).json()
    return(token['access_token'])


def generateAuthorization(code):
    authorization = client_id + ':' + client_secret
    authorization_base64 = base64.b64encode(authorization.encode('ascii')).decode('ascii')
    
    headers = {
        'Authorization': 'Basic ' + authorization_base64,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    
    data = {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': 'http://localhost:8080/auth'
    }
    
    response = requests.post('https://accounts.spotify.com/api/token', headers=headers, data=data).json()
    
    return response