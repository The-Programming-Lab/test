
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello from api3"}

@app.get("/api3")
def read_root():
    return {"message": "Hello from api3"}

@app.get("/api3/test")
def read_root():
    return {"message": "Hello from api3/test"}