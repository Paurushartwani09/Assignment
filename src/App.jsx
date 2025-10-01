import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Onboarding from "./pages/Onboarding";

function App() {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [activeOnboarding, setActiveOnboarding] = useState(false);

  const handleToggle = () => {
    setActiveSidebar(!activeSidebar);
    setActiveOnboarding(!activeOnboarding);
  };

  return (
    <div className="app d-flex flex-column vh-100">
      <Header onClick={handleToggle} />

      <div className="flex-grow-1 d-flex">
        <Sidebar isActive={activeSidebar} />

        <div
          className={`main onboarding-container flex-grow-1 d-flex align-items-center justify-content-center ${
            activeOnboarding ? "active" : ""
          }`}
        >
          <Onboarding isActive={activeOnboarding} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
