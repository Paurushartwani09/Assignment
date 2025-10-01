const Sidebar = ({ isActive }) => {
  const icons = ["🏠", "🔎", "📁", "📊", "⚙️", "👤"];
  const iconsName = ["Home", "Search", "File", "Data", "Setting", "Your Profile"];

  return (
    <div className={`sidebar-container ${isActive ? "active" : ""}`}>
      <aside className={`sidebar d-flex flex-column align-items-center py-4`}>
        <nav className="nav-icons d-flex flex-column gap-3">
          {icons.map((ic, idx) => (
            <div key={idx} className={`nav-icon ${idx === 1 ? "active" : ""}`}>
              <span className="">{ic}</span>
              <span className="label ms-1">{iconsName[idx]}</span>
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
