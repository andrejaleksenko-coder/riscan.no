from fastapi import APIRouter, HTTPException
from backend.services.product_service import (
    get_all_products,
    get_product_by_id,
    search_products,
)

router = APIRouter()


@router.get("/health")
def health():
    return {
        "status": "ok",
        "service": "RISCAN",
        "version": "0.2.1",
    }


@router.get("/products")
def products():
    return get_all_products()


@router.get("/products/search")
def search(q: str):
    return search_products(q)


@router.get("/products/{product_id}")
def product(product_id: int):
    result = get_product_by_id(product_id)

    if result is None:
        raise HTTPException(status_code=404, detail="Product not found")

    return result
