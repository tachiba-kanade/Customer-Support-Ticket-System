// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// import { useEffect, useState } from "react";

// function App() {
//   const [backendStatus, setBackendStatus] = useState("checking...");

//   useEffect(() => {
//     fetch("http://localhost:8000/health")
//       .then((response) => response.json())
//       .then((data) => {
//         setBackendStatus(data.status);
//       })
//       .catch(() => {
//         setBackendStatus("offline");
//       });
//   }, []);

//   return (
//     <main>
//       <h1>SupportDesk</h1>

//       <p>
//         Backend status: <strong>{backendStatus}</strong>
//       </p>
//     </main>
//   );
// }

// export default App;
import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronDown,
  CircleGauge,
  Clock3,
  Inbox,
  Menu,
  Plus,
  Search,
  Settings,
  Ticket,
  Users,
  Wifi,
  WifiOff,
} from "lucide-react";

import "./App.css";

const stats = [
  {
    title: "Open tickets",
    value: 24,
    description: "+4 since yesterday",
    icon: Inbox,
    tone: "blue",
  },
  {
    title: "In progress",
    value: 11,
    description: "6 assigned to you",
    icon: Clock3,
    tone: "purple",
  },
  {
    title: "Urgent",
    value: 3,
    description: "Needs attention",
    icon: AlertCircle,
    tone: "red",
  },
  {
    title: "Resolved today",
    value: 18,
    description: "+12% vs yesterday",
    icon: CheckCircle2,
    tone: "green",
  },
];

const mockTickets = [
  {
    id: "TKT-0124",
    subject: "Payment failed but amount was deducted",
    customer: "Aarav Sharma",
    email: "aarav@example.com",
    status: "open",
    priority: "urgent",
    updated: "4 min ago",
  },
  {
    id: "TKT-0123",
    subject: "Unable to change account email",
    customer: "Maya Patel",
    email: "maya@example.com",
    status: "in_progress",
    priority: "high",
    updated: "16 min ago",
  },
  {
    id: "TKT-0122",
    subject: "Invoice required for previous purchase",
    customer: "James Wilson",
    email: "james@example.com",
    status: "waiting_for_customer",
    priority: "medium",
    updated: "38 min ago",
  },
  {
    id: "TKT-0121",
    subject: "Question about enterprise pricing",
    customer: "Priya Menon",
    email: "priya@example.com",
    status: "resolved",
    priority: "low",
    updated: "1 hr ago",
  },
  {
    id: "TKT-0120",
    subject: "Dashboard keeps loading indefinitely",
    customer: "Noah Brown",
    email: "noah@example.com",
    status: "in_progress",
    priority: "high",
    updated: "2 hrs ago",
  },
];

function formatStatus(status) {
  return status
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function App() {
  const [backendStatus, setBackendStatus] = useState("checking");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API unavailable");
        }

        return response.json();
      })
      .then((data) => {
        setBackendStatus(data.status === "ok" ? "online" : "offline");
      })
      .catch(() => {
        setBackendStatus("offline");
      });
  }, []);

  const tickets = useMemo(() => {
    const query = search.trim().toLowerCase();

    return mockTickets.filter((ticketItem) => {
      const matchesSearch =
        !query ||
        ticketItem.id.toLowerCase().includes(query) ||
        ticketItem.subject.toLowerCase().includes(query) ||
        ticketItem.customer.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "all" || ticketItem.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="logo">
            <Ticket size={19} strokeWidth={2.2} />
          </div>

          <div className="brand-copy">
            <strong>SupportDesk</strong>
            <span>Support workspace</span>
          </div>
        </div>

        <div className="sidebar-section">
          <span className="sidebar-label">Workspace</span>

          <nav>
            <a className="nav-link active" href="#">
              <CircleGauge size={18} />
              <span>Dashboard</span>
            </a>

            <a className="nav-link" href="#">
              <Inbox size={18} />
              <span>Tickets</span>
              <span className="nav-badge">24</span>
            </a>

            <a className="nav-link" href="#">
              <Users size={18} />
              <span>Customers</span>
            </a>

            <a className="nav-link" href="#">
              <BarChart3 size={18} />
              <span>Reports</span>
            </a>
          </nav>
        </div>

        <div className="sidebar-section sidebar-manage">
          <span className="sidebar-label">Manage</span>

          <nav>
            <a className="nav-link" href="#">
              <Settings size={18} />
              <span>Settings</span>
            </a>
          </nav>
        </div>

        <div className="sidebar-profile">
          <div className="profile-avatar">SU</div>

          <div className="profile-copy">
            <strong>Support Admin</strong>
            <span>admin@supportdesk.dev</span>
          </div>

          <ChevronDown size={15} />
        </div>
      </aside>

      {sidebarOpen && (
        <button
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      <div className="workspace">
        <header className="topbar">
          <button
            className="mobile-menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>

          <div className="search-box">
            <Search size={17} />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search tickets, customers..."
            />

            <span className="search-shortcut">⌘ K</span>
          </div>

          <div className="topbar-right">
            <div className={`api-pill api-${backendStatus}`}>
              {backendStatus === "online" ? (
                <Wifi size={14} />
              ) : (
                <WifiOff size={14} />
              )}

              <span>
                {backendStatus === "checking"
                  ? "Checking API"
                  : backendStatus === "online"
                    ? "API Online"
                    : "API Offline"}
              </span>
            </div>

            <button className="topbar-button" aria-label="Notifications">
              <Bell size={18} />
              <span className="notification-indicator" />
            </button>

            <div className="top-profile">
              <div className="top-avatar">SU</div>
            </div>
          </div>
        </header>

        <main className="content">
          <section className="hero">
            <div>
              <span className="page-label">OVERVIEW</span>

              <h1>Support workspace</h1>

              <p>
                Track conversations, assignments and customer issues from one
                place.
              </p>
            </div>

            <button className="primary-button">
              <Plus size={17} />
              New ticket
            </button>
          </section>

          <section className="stat-grid">
            {stats.map(({ title, value, description, icon: Icon, tone }) => (
              <article className="stat-card" key={title}>
                <div className={`stat-icon stat-${tone}`}>
                  <Icon size={19} />
                </div>

                <div className="stat-content">
                  <span className="stat-title">{title}</span>

                  <strong className="stat-number">{value}</strong>

                  <span className="stat-description">{description}</span>
                </div>
              </article>
            ))}
          </section>

          <section className="tickets-card">
            <header className="tickets-header">
              <div>
                <h2>Recent tickets</h2>

                <p>Latest customer conversations across your workspace.</p>
              </div>

              <div className="ticket-actions">
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                >
                  <option value="all">All statuses</option>
                  <option value="open">Open</option>
                  <option value="in_progress">In progress</option>
                  <option value="waiting_for_customer">
                    Waiting for customer
                  </option>
                  <option value="resolved">Resolved</option>
                </select>

                <button className="secondary-button">View all</button>
              </div>
            </header>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Ticket</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Updated</th>
                  </tr>
                </thead>

                <tbody>
                  {tickets.map((ticketItem) => (
                    <tr key={ticketItem.id}>
                      <td>
                        <div className="ticket-details">
                          <span className="ticket-number">{ticketItem.id}</span>

                          <strong>{ticketItem.subject}</strong>
                        </div>
                      </td>

                      <td>
                        <div className="customer">
                          <div className="customer-avatar">
                            {initials(ticketItem.customer)}
                          </div>

                          <div className="customer-details">
                            <strong>{ticketItem.customer}</strong>
                            <span>{ticketItem.email}</span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className={`status status-${ticketItem.status}`}>
                          <span />
                          {formatStatus(ticketItem.status)}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`priority priority-${ticketItem.priority}`}
                        >
                          {ticketItem.priority}
                        </span>
                      </td>

                      <td className="updated">{ticketItem.updated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {tickets.length === 0 && (
                <div className="empty-state">
                  <Search size={26} />

                  <strong>No tickets found</strong>

                  <span>Try another search or status filter.</span>
                </div>
              )}
            </div>

            <footer className="table-footer">
              <span>
                Showing {tickets.length} of {mockTickets.length} tickets
              </span>

              <div className="pagination">
                <button disabled>Previous</button>
                <button className="active-page">1</button>
                <button disabled>Next</button>
              </div>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
