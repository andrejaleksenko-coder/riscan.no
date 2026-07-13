from backend.database import get_connection


def init_database():
    connection = get_connection()

    connection.execute("""
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            brand TEXT,
            category TEXT,
            price REAL,
            currency TEXT,
            store TEXT,
            url TEXT,
            updated_at TEXT
        )
    """)
from backend.database import get_connection


def init_database():
    connection = get_connection()

    connection.execute("""
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            brand TEXT,
            category TEXT,
            price REAL,
            currency TEXT,
            store TEXT,
            url TEXT,
            updated_at TEXT
        )
    """)

    connection.commit()
    connection.close()


if __name__ == "__main__":
    init_database()
    print("Database initialized.")

