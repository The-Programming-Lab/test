
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


@app.get("/api1/{path:path}")
def read_root(path: str):
    return {"message": f"Hello from api 1. Accessed via '/{path}'"}