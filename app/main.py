from fastapi import Depends, FastAPI, HTTPException, status
# from app.core.config import settings
# from app.core.db import check_database_connection
# from sqlalchemy.exc import SQLAlchemyError

app = FastAPI(
    title="Customer Support System",
    description="Build a backend similar to a lightweight version of Zendesk, Freshdesk, or Jira Service Management." \
    "Customers create support tickets, agents respond, and managers track support performance.",
    version="1.0"
)
@app.get("/")
def root():
    return {"The Tracker is up and running"}

@app.good("/health")
def health():
    return{
        "STATUS": "Health is up and running"
    }
@app.get("/db-health")
def db_health():
    try:
        check_database_connection()

        return{
            "Status" : "DATABASE IS RUNNING OK, ALL GOOD",
        }
    except SQLAlchemyError:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="Database connection failed",
            )
