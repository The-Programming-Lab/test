
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add the CORS middleware to the application
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://host.theprogramminglab.com", "http://theprogramminglab.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api1/{path:path}")
def read_root(path: str):
    return {"message": f"Hello from api 1. Accessed via '/{path}'"}