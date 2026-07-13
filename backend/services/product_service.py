from backend.database import get_connection


def get_all_products():
    connection = get_connection()

    products = connection.execute(
        "SELECT * FROM products"
    ).fetchall()

    connection.close()

    return [dict(product) for product in products]
