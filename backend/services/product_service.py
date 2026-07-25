from backend.database import get_connection


def get_all_products():
    connection = get_connection()

    products = connection.execute(
        "SELECT * FROM products"
    ).fetchall()

    connection.close()

    return [dict(product) for product in products]


def get_product_by_id(product_id):
    connection = get_connection()

    product = connection.execute(
        "SELECT * FROM products WHERE id = ?",
        (product_id,),
    ).fetchone()

    connection.close()

    if product:
        return dict(product)

    return None


def search_products(query):
    connection = get_connection()

    products = connection.execute(
        "SELECT * FROM products WHERE name LIKE ?",
        (f"%{query}%",),
    ).fetchall()

    connection.close()

    return [dict(product) for product in products]
