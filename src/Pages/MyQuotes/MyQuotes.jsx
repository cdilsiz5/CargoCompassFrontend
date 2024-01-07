import React, { useState, useEffect } from 'react';
import DashboardSidebar from '../../Components/Dashboard/DashboardSidebar';
import './MyQuotes.css';
import Spinner from '../../Components/Sprinner/Spinner';

const QUOTE_STATUS = {
  AWAITING_PICKUP: 'Awaiting Pickup',
  ASSIGNED_TO_CARRIER: 'Assigned to Carrier',
  IN_TRANSIT: 'In Transit',
  DELIVERED: 'Delivered',
  CANCELLED: 'Cancelled'
};
const MyQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('waiting-approval');
  useEffect(() => {
    fetchQuotes(activeTab);
  }, [activeTab]);
  useEffect(() => {
    const quoteCards = document.querySelectorAll('.quote-card');
    quoteCards.forEach((card, index) => {
      card.style.animation = `slideIn 0.5s ease-out ${(index + 1) * 0.2}s forwards`;
    });
  }, [quotes]);

  const fetchQuotes = (tabStatus) => {
    setLoading(true);
    setTimeout(() => {
      const allQuotes = [
        { id: 'FEIU8YLR', status: 'CANCELLED', details: 'Quote details for FEIU8YLR...' },
        { id: 'KJH34GH3', status: 'DELIVERED', details: 'Quote details for KJH34GH3...' },
        { id: 'FEIU8YLR', status: 'IN_TRANSIT', details: 'Quote details for FEIU8YLR...' },
        { id: 'KJH34GH3', status: 'ASSIGNED_TO_CARRIER', details: 'Quote details for KJH34GH3...' },
        { id: 'FEIU8YLR', status: 'AWAITING_PICKUP', details: 'Quote details for FEIU8YLR...' },
      ];
      const filteredQuotes = allQuotes.filter(quote =>
        quote.status === tabStatus
      );
      setQuotes(filteredQuotes);
      setLoading(false);
    }, 1200);
  };
  const handleTabClick = (statusValue) => {
    if (!loading) {
      setActiveTab(statusValue);
      fetchQuotes(statusValue);
    }
  }
    const handleShowDetails = (quoteId) => {
      console.log('Show details for quote:', quoteId);
    };

    return (
      <div className="quotes-dashboard-container">
        <DashboardSidebar />
        <main className="quotes-main-content">
          <div className="quotes-header">
            <h1>My Quotes</h1>
            <div className="quotes-tabs">
              {Object.entries(QUOTE_STATUS).map(([statusKey, statusValue]) => (
                <button
                  key={statusKey}
                  className={`tab ${activeTab === statusKey ? 'active' : ''}`}
                  onClick={() => handleTabClick(statusKey)}
                >
                  {statusValue}
                </button>
              ))}
            </div>
          </div>
          {loading ? (<Spinner />) : (
            <div className="quotes-list">
              {quotes.map((quote, index) => (
                <div className="quote-card" key={quote.id} onClick={() => handleShowDetails(quote.id)}>
                  <div className="quote-detail">
                    <div className="quote-info">
                      <h2>Quote id: {quote.id}</h2>
                      <div className="detail-row">
                        <p><strong>Route:</strong> Mersin - Istanbul</p>
                        <p><strong>Pickup Date:</strong> 23.12.2023</p>
                        <p><strong>Weight </strong> 250000 Kg</p>
                        <p><strong>Yuk Turu</strong> Termokin</p>

                      </div>
                      <div className="detail-row">
                        <p><strong>Pickup Details:</strong> 1 unit of Semi Truck, Mega Tautliner</p>
                      </div>
                      <button className="details-button" onClick={() => handleShowDetails(quote.id)}>Details</button>
                      <div className="quote-status">
                        <span className={`status ${quote.status.replace(' ', '-').toLowerCase()}`}>{quote.status}</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    );
  };

  export default MyQuotes;
