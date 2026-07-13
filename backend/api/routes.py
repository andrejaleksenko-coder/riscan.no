from fastapi import APIRouter
from backend.services.product_service import get_all_products

router = APIRouter()


@router.get("/health")
def health():
    return {
        "status": "ok",
        "service": "RISCAN",
        "version": "0.1.0",
    }


@router.get("/products")
def products():
    return get_all_products()
