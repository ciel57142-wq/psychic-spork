import "./Profile.css";

/* =========================================================
   Icons
   ========================================================= */

const Icon = ({ name, size = 16 }) => {
  const paths = {
    home: <path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
    people: (
      <>
        <path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="3.5" />
        <path d="M22 20v-2a4 4 0 0 0-3-3.9" />
        <path d="M16 3.6a3.5 3.5 0 0 1 0 6.8" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c0-3.3 3-5.5 7-5.5s7 2.2 7 5.5" />
      </>
    ),
    money: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 9.2a3 3 0 0 0-5 2.2c0 3 5 1.6 5 4.4a3 3 0 0 1-5 2.2" />
        <path d="M12 6.5v11" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.9 2.1z" />
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m3 6 9 6 9-6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20H2" />
      </>
    ),
    folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    doc: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
    columns: (
      <>
        <rect x="3" y="9" width="7" height="12" rx="1" />
        <rect x="14" y="3" width="7" height="18" rx="1" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    briefcase: (
      <>
        <rect x="2" y="7" width="20" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={name === "plus" ? 3 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

/* =========================================================
   Data
   ========================================================= */

const SIDEBAR_SECTIONS = [
  {
    title: "General",
    items: [
      { icon: "home", label: "Home" },
      { icon: "people", label: "People" },
    ],
  },
  {
    title: "My Info",
    items: [
      { icon: "user", label: "Profile", active: true },
      { icon: "money", label: "Compensation" },
      { icon: "phone", label: "Emergency Contact" },
      { icon: "clock", label: "Time Off" },
      { icon: "chart", label: "Performance" },
      { icon: "folder", label: "Files" },
      { icon: "doc", label: "Onboarding" },
    ],
  },
  {
    title: "Manage",
    items: [
      { icon: "columns", label: "Departments" },
      { icon: "grid", label: "Divisions" },
      { icon: "briefcase", label: "Locations" },
    ],
  },
];

const TABS = [
  "Overview",
  "Compensation",
  "Emergency",
  "Time Off",
  "Performance",
  "Files",
  "Onboarding",
];

const EMPLOYEE = {
  name: "Nicholas Swatz",
  id: "#ERD246534",
  initials: "NS",
};

const DETAIL_SECTIONS = [
  {
    title: "About",
    rows: [
      { icon: "phone", label: "Phone:", value: "(629) 555-0123" },
      { icon: "mail", label: "Email:", value: "nicholasswatz@gmail.com" },
    ],
  },
  {
    title: "Address",
    rows: [
      { icon: "pin", label: "Address:", value: "390 Market Street, Suite 200" },
      { icon: "pin", label: "City state:", value: "San Francisco CA" },
      { icon: "pin", label: "Postcode:", value: "94102" },
    ],
  },
  {
    title: "Employee details",
    rows: [
      { icon: "calendar", label: "Date of birth:", value: "Sep 26, 1988" },
      { icon: "user", label: "National ID:", value: "GER10654" },
      { icon: "briefcase", label: "Title:", value: "Project Manager" },
      { icon: "calendar", label: "Hire date:", value: "Jan 05, 2023" },
    ],
  },
];

const JOB_COLUMNS = ["Department", "Division", "Manager", "Hire date", "Location"];

const JOB_ROWS = [
  {
    id: 1,
    department: "Creative Associate",
    division: "Project Management",
    manager: "Alex Foster",
    hireDate: "May 13, 2024",
    location: "Metro DC",
  },
  {
    id: 2,
    department: "Marketing Team",
    division: "Leadership",
    manager: "Jack Danniel",
    hireDate: "Sep 05, 2024",
    location: "Bergen, NJ",
  },
  {
    id: 3,
    department: "Team Lead",
    division: "Creator",
    manager: "Alina Skazka",
    hireDate: "Jun 08, 2023",
    location: "Miami, FL",
  },
  {
    id: 4,
    department: "Finance & Accounting",
    division: "Senior Consultant",
    manager: "John Miller",
    hireDate: "Sep 13, 2022",
    location: "Chicago, IL",
  },
  {
    id: 5,
    department: "Team Lead",
    division: "Creator",
    manager: "Mark Baldwin",
    hireDate: "Jul 07, 2023",
    location: "Miami, FL",
  },
];

const ACTIVITY = [
  {
    id: 1,
    name: "John Miller",
    initials: "JM",
    color: "blue",
    action: "last login on",
    date: "Jul 13, 2024",
    time: "05:36 PM",
  },
  {
    id: 2,
    name: "Merva Sahin",
    initials: "MS",
    color: "orange",
    action: "date created on",
    date: "Sep 08, 2024",
    time: "03:12 PM",
  },
  {
    id: 3,
    name: "Tammy Collier",
    initials: "TC",
    color: "purple",
    action: "updated on",
    date: "Aug 15, 2023",
    time: "05:36 PM",
  },
];

const COMPENSATION = [
  { id: 1, amount: "862.00 USD per month", effective: "May 10, 2015" },
  { id: 2, amount: "1560.00 USD per quarter", effective: "Jun 08, 2022" },
  { id: 3, amount: "378.00 USD per week", effective: "Jun 08, 2022" },
];

const ELLIPSIS = "\u22EF";

/* =========================================================
   Component
   ========================================================= */

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-shell">
        {/* ===== Sidebar ===== */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <span className="sidebar-header-icon">
              <Icon name="people" size={13} />
            </span>
            People
            <span className="sidebar-header-spacer">
              <Icon name="bell" size={15} />
            </span>
          </div>

          {SIDEBAR_SECTIONS.map((section, i) => (
            <div key={section.title}>
              {i > 0 && <div className="sidebar-divider" />}
              <div className="sidebar-section">
                <div className="sidebar-section-title">{section.title}</div>
                {section.items.map((item) => (
                  <a
                    key={item.label}
                    className={`sidebar-item${item.active ? " active" : ""}`}
                    href="#"
                  >
                    <span className="sidebar-icon">
                      <Icon name={item.icon} />
                    </span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="sidebar-bottom">
            <div className="sidebar-avatar" />
          </div>
        </aside>

        {/* ===== Content ===== */}
        <main className="profile-content">
          <h1 className="profile-title">Profile</h1>

          <button className="add-employee" type="button">
            <Icon name="plus" size={11} />
            Add employee
          </button>

          <div className="profile-header">
            <nav className="profile-tabs">
              {TABS.map((tab, i) => (
                <a
                  key={tab}
                  className={`profile-tab${i === 0 ? " active" : ""}`}
                  href="#"
                >
                  {tab}
                </a>
              ))}
            </nav>
          </div>

          <div className="overview">
            {/* Left column */}
            <section className="profile-details">
              <div className="profile-identity">
                <div className="profile-photo">{EMPLOYEE.initials}</div>
                <div>
                  <h2 className="profile-name">{EMPLOYEE.name}</h2>
                  <p className="profile-id">{EMPLOYEE.id}</p>
                </div>
                <span className="profile-identity-menu">{ELLIPSIS}</span>
              </div>

              {DETAIL_SECTIONS.map((section, i) => (
                <div key={section.title}>
                  {i > 0 && <div className="detail-divider" />}
                  <div className="detail-section">
                    <h3 className="detail-section-title">{section.title}</h3>
                    <div className="detail-list">
                      {section.rows.map((row) => (
                        <div className="detail-row" key={row.label + row.value}>
                          <span className="detail-icon">
                            <Icon name={row.icon} size={14} />
                          </span>
                          <span className="detail-label">{row.label}</span>
                          <span className="detail-value">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Right column */}
            <section className="profile-main">
              <div className="section-heading">
                <h2>Job information</h2>
                <a className="add-info" href="#">
                  + Add Info
                </a>
              </div>

              <div className="job-table-wrapper">
                <table className="job-table">
                  <thead>
                    <tr>
                      {JOB_COLUMNS.map((col) => (
                        <th key={col}>{col}</th>
                      ))}
                      <th className="menu" />
                    </tr>
                  </thead>
                  <tbody>
                    {JOB_ROWS.map((row) => (
                      <tr key={row.id}>
                        <td>{row.department}</td>
                        <td>{row.division}</td>
                        <td>{row.manager}</td>
                        <td>{row.hireDate}</td>
                        <td>{row.location}</td>
                        <td className="menu">{ELLIPSIS}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="lower-content">
                <div className="lower-section">
                  <h2>Activity</h2>
                  <div className="activity-list">
                    {ACTIVITY.map((item) => (
                      <div className="activity-item" key={item.id}>
                        <div className={`activity-avatar ${item.color}`}>
                          {item.initials}
                        </div>
                        <div className="activity-text">
                          <span className="activity-name">{item.name}</span>{" "}
                          <span className="activity-action">{item.action}</span>{" "}
                          {item.date}
                          <span className="activity-date">{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a className="view-all" href="#">
                    View all
                  </a>
                </div>

                <div className="lower-section">
                  <h2>Compensation</h2>
                  <div className="compensation-list">
                    {COMPENSATION.map((item) => (
                      <div className="compensation-item" key={item.id}>
                        <p className="compensation-amount">{item.amount}</p>
                        <p className="compensation-date">
                          Effective date on {item.effective}
                        </p>
                      </div>
                    ))}
                  </div>
                  <a className="view-all" href="#">
                    View all
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}