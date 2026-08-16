from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import get_settings
# from app.core.config import settings
# from app.core.db import check_database_connection
# from sqlalchemy.exc import SQLAlchemyError

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
    return {
        "status": "Health is up and running",
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
