from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import get_settings
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import text

from app.core.config import get_settings
from app.db.session import engine


settings = get_settings()
app = FastAPI(
    title="Customer Support System",
    description=(
        "Build a backend similar to a lightweight version of Zendesk, "
        "Freshdesk, or Jira Service Management. Customers create support "
        "tickets, agents respond, and managers track support performance."
    ),
    version="1.0",
)

origins = [
    "http://localhost:3000",
]

# Add CORS middleware to your FastAPI application
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, PUT, DELETE, etc.)
)


@app.get("/")
def root():
    return {"message": "The Tracker is up and running"}


@app.get("/health")
def health():
    database_status = "connected"

    try: 
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
    except SQLAlchemyError:
        database_status = "disconnected"
    return {
        "status": "Health is up and running",
        "environment": settings.environment,
        "database": database_status,
    }


# @app.get("/db-health")
# def db_health():
#     try:
#         check_database_connection()

#         return{
#             "Status" : "DATABASE IS RUNNING OK, ALL GOOD",
#         }
#     except SQLAlchemyError:
#             raise HTTPException(
#                 status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
#                 detail="Database connection failed",
#             )
