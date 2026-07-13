from backend.database import get_connection


def seed_products():
    connection = get_connection()

    connection.execute(
        """
        INSERT INTO products (
            name,
            brand,
            category,
            price,
            currency,
            store,
            url,
            updated_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))
        """,
        (
            "Samsung 990 PRO 2TB",
            "Samsung",
            "SSD",
            2499,
            "NOK",
            "Komplett",
            "https://www.komplett.no/",
        ),
    )

    connection.commit()
    connection.close()


if __name__ == "__main__":
    seed_products()
    print("Product added.")
