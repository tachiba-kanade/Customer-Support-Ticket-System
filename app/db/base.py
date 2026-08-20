from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


# Base - Base maintains SQLAlchemy's metadata about all those tables.
# ├── User
# ├── Ticket
# ├── TicketMessage
# ├── Attachment
# └── AuditEvent