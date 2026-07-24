from backend.database import get_connection


def seed_products():
    connection = get_connection()

    products = [
        (
            "Samsung 990 PRO 2TB",
            "Samsung",
            "SSD",
            2499,
            "NOK",
            "Komplett",
            "https://www.komplett.no/",
        ),
        (
            "WD Black SN850X 2TB",
            "Western Digital",
            "SSD",
            2299,
            "NOK",
            "Proshop",
            "https://www.proshop.no/",
        ),
        (
            "Kingston KC3000 2TB",
            "Kingston",
            "SSD",
            1999,
            "NOK",
            "Komplett",
            "https://www.komplett.no/",
        ),
        (
            "Crucial T705 2TB",
            "Crucial",
            "SSD",
            2899,
            "NOK",
            "Proshop",
            "https://www.proshop.no/",
        ),
        (
            "Lexar NM790 2TB",
            "Lexar",
            "SSD",
            1899,
            "NOK",
            "Multicom",
            "https://www.multicom.no/",
        ),
    ]

    connection.executemany(
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
        products,
    )

    connection.commit()
    connection.close()


if __name__ == "__main__":
    seed_products()
    print("Products added.")
