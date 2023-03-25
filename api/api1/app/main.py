
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello from api1"}

@app.get("/api1")
def read_root():
    return {"message": "Hello from api1"}

@app.get("/api1/test")
def read_root():
    return {"message": "Hello from api1/test"}