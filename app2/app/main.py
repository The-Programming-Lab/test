from fastapi import FastAPI
import requests


app = FastAPI()

# works
@app.get("/1")
def read_root():
    # get response from app1 on same cluster
    response = requests.get("http://app1-service/") 
    return response.json()

# works
@app.get("/2")
def read_root():
    # get response from app1 on same cluster
    response = requests.get("http://app1-service-clusterip/") 
    return response.json()

# works
@app.get("/3")
def read_root():
    # get response from app1 on same cluster
    response = requests.get("http://10.68.4.158/") 
    return response.json()


