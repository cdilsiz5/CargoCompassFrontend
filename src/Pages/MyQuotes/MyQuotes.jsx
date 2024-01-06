import React, { useState, useEffect } from 'react';
import DashboardSidebar from '../../Components/Dashboard/DashboardSidebar';
import './MyQuotes.css'; 

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

  const fetchQuotes = (status) => {
    setLoading(true);
    setTimeout(() => {
      setQuotes([
        { id: 'FEIU8YLR', status:'cancelled', details: 'Quote details for FEIU8YLR...' },
        { id: 'KJH34GH3', status:'cancelled', details: 'Quote details for KJH34GH3...' },
      ]);
      setLoading(false);
    }, 2000);
  };

  const handleTabClick = (status) => {
    if (!loading) {
      setActiveTab(status);
      fetchQuotes(status);
    }
  };

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
            <button className={`tab ${activeTab === 'waiting-approval' ? 'active' : ''}`} onClick={() => handleTabClick('waiting-approval')}>Waiting Approval</button>
            <button className={`tab ${activeTab === 'getting-ready' ? 'active' : ''}`} onClick={() => handleTabClick('getting-ready')}>Getting ready</button>
            <button className={`tab ${activeTab === 'approved-quotes' ? 'active' : ''}`} onClick={() => handleTabClick('approved-quotes')}>Approved quotes</button>
          </div>
        </div>
        {loading ? (
         <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        ) : (
          <div className="quotes-list">
            {quotes.map((quote, index) => (
              <div className="quote-card" key={quote.id} onClick={() => handleShowDetails(quote.id)}>
                <div className="quote-detail">
                  <div className="quote-info">
                    <h2>Quote id: {quote.id}</h2>
                    <div className="detail-row">
                      <p><strong>Route:</strong> Akdeniz, Mersin - Tuzla, Istanbul</p>
                      <p><strong>Pickup Date:</strong> 23.12.2023</p>
                      <p><strong>Dropoff Date:</strong> 23.12.2023</p>
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
