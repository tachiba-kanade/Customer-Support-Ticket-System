from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.config import get_settings

settings = get_settings()
# Manages connections to PostgreSQL.
engine = create_engine(
    settings.database_url,
    pool_pre_ping=True,
)
# pool_pre_ping = SQLAlchemy tests the connection when it is checked out from the pool.
#  If it is dead, SQLAlchemy discards it and reconnects automatically.
SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    expire_on_commit=False,
)

# FastAPI will use this to give each request a database session.
"""
db = session(): Initializes a new database session instance.
yield db: Pauses the function and "injects" the active database session into your route or function, allowing you to perform queries.
db.close(): Resumes the function after the request finishes to cleanly close the connection and release it back to the database pool, preventing memory leaks.
"""

def get_db():
    db= SessionLocal()
    try:
        yield db
    finally:
        db.close()

# FastAPI dependencies can use yield to perform cleanup after a request,
# which is why get_db() yields the session and closes it in finally

def check_db_connect():
    with engine.connect() as connection:
        connection.execute()

# engine -->	Manages PostgreSQL connections
# SessionLocal	--> Creates database sessions
# get_db()	--> Provides and closes a session for an API request
# check_database_connection()	--> Runs SELECT 1 to test PostgreSQL

