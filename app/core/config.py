from functools import lru_cache
from alembic import environment
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name:str = "Customer Support System",
    app_version: str = "v1.0"
    environment: str = "development"

    frontend_url: str = "http://localhost:3000"
    database_url:str

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

@lru_cache
def get_settings():
    return Settings()