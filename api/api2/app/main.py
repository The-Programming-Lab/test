
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


@app.get("/{path:path}")
def read_root(path: str):
    return {"message": f"Hello from api 2. Accessed via '/{path}'"}