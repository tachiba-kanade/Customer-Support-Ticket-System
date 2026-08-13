# Customer-Support-Ticket-System

ROLES

## CUSTOMER
    can create ticket
    can read own ticket
    can reply to own ticket
    cannot see internal notes
    cannot change priority
    cannot assign agents

## AGENT
    can read assigned tickets
    can reply
    can create internal notes
    can change status
    can change priority
    can assign/reassign tickets

## ADMIN
    can access all tickets
    can manage users

## CST/
│
├── app/
│   ├── main.py
│   │
│   ├── api/
│   │   ├── dependencies.py
│   │   └── routes/
│   │       ├── auth.py
│   │       ├── tickets.py
│   │       ├── agents.py
│   │       └── reports.py
│   │
│   ├── core/
│   │   ├── config.py
│   │   └── security.py
│   │
│   ├── db/
│   │   ├── base.py
│   │   └── session.py
│   │
│   ├── models/
│   ├── schemas/
│   ├── repositories/
│   ├── services/
│   ├── tasks/
│   └── websocket/
│
├── migrations/
├── tests/
│
├── docker-compose.yml
├── alembic.ini
├── pyproject.toml
├── .env.example
└── README.md


Terminal 1
cst/
└── uvicorn app.main:app --reload

Terminal 2
cst/frontend/
└── npm run dev