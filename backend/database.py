import sqlite3
from pathlib import Path

DATABASE = Path("database/riscan.db")


def get_connection():
    connection = sqlite3.connect(DATABASE)
    connection.row_factory = sqlite3.Row
    return connection

