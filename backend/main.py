from fastapi import FastAPI
from backend.api.routes import router

app = FastAPI(
    title="RISCAN API",
    version="0.1.0",
)

app.include_router(router)


@app.get("/")
def root():
    return {
        "project": "RISCAN",
        "status": "running",
        "version": "0.1.0",
    }
