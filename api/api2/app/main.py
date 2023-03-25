
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello from api2"}

@app.get("/api2")
def read_root():
    return {"message": "Hello from api2"}

@app.get("/api2/test")
def read_root():
    return {"message": "Hello from api2/test"}