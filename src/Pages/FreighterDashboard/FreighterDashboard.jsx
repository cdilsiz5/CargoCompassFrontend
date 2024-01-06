import React, { useEffect } from 'react';
import DashboardSidebar from '../../Components/Dashboard/DashboardSidebar';
import './FreighterDashboard.css';

export const FreighterDashboard = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach((section, index) => {
      section.style.animation = `slideIn 0.5s ease-out ${index * 0.3}s forwards`;
    });
  }, []);

  return (
    <div className="dashboard-container body">
      <DashboardSidebar />

      <main className="dashboard-main">
        <section className="dashboard-section">
          <div className="section-header">
            <h2>Days Active Cargos</h2>
            <img src="https://shipper.yolda.com/assets/profile.svg" alt="Profile" />
          </div>
          <div className="section-content">
            <h3>15 Active Cargos</h3>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-header">
            <h2>Upcoming Deliveries</h2>
            <img src="https://shipper.yolda.com/assets/icons/Truck.svg" alt="Truck" />
          </div>
          <div className="section-content">
            <h3>Estimated deliveries: 10</h3>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-header">
            <h2>Get Quote</h2>
            <img src="https://shipper.yolda.com/assets/icons/Truck.svg" alt="Truck" />
          </div>
          <div className="section-content">
            <h3>Work With Us</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci tenetur magni sed ea, quae maiores modi totam praesentium! Ut labore, et minus unde nisi vel reiciendis, debitis nemo sequi doloremque odio. Mollitia a quidem quisquam veniam? Explicabo aut suscipit qui! Sequi, consectetur aliquam. Reprehenderit ad dolorem aliquid quia neque ab.</p>
            <div className="quote-button-container">
              <button className="get-quote-button">Get Quote</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FreighterDashboard;
