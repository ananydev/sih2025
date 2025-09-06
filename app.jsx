import { useState } from "react";
import "./App.css";


export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">INGRES</h1>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#impact">Impact</a>
          <a href="#deployment">Deployment</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="btn-primary">Try INGRES</button>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h2>
          AI-Driven ChatBot for{" "}
          <span className="highlight">Groundwater Resource Estimation</span>
        </h2>
        <p>
          Revolutionizing water resource management through intelligent AI
          conversations, real-time data analysis, and predictive modeling.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => setChatOpen(true)}>
            Start Conversation
          </button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <h2>
          Advanced Features for <span className="highlight">Water Intelligence</span>
        </h2>
        <div className="features-grid">
          {[
            {
              title: "AI-Powered Queries",
              desc: "Natural language processing to understand complex groundwater questions.",
            },
            {
              title: "Real-Time Data Integration",
              desc: "Live access to groundwater monitoring networks, satellite data, and sensors.",
            },
            {
              title: "Multilingual Support",
              desc: "Communicate in 15+ languages with local measurement units.",
            },
            {
              title: "Interactive Visualizations",
              desc: "Dynamic charts, maps, and 3D models to visualize aquifer systems.",
            },
            {
              title: "Predictive Analytics",
              desc: "Forecast water availability, drought conditions, and optimal usage.",
            },
            {
              title: "Multi-User Collaboration",
              desc: "Share insights, create reports, and collaborate with team members.",
            },
          ].map((f, i) => (
            <div key={i} className="card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="section">
        <h2>
          Transforming <span className="highlight">Water Management</span> Worldwide
        </h2>
        <p className="section-desc">
          INGRES is making a measurable difference in water conservation,
          environmental protection, and sustainable resource management.
        </p>
        <div className="impact-grid">
          <div className="impact-card">
            <h3 className="blue">2.5B</h3>
            <p>Liters Saved</p>
          </div>
          <div className="impact-card">
            <h3 className="green">340K</h3>
            <p>Tons CO₂ Reduced</p>
          </div>
          <div className="impact-card">
            <h3 className="purple">98.7%</h3>
            <p>Accuracy Rate</p>
          </div>
        </div>
      </section>

      {/* Deployment Section */}
      <section id="deployment" className="section">
        <h2>
          Serving Water Communities <span className="highlight">Everywhere</span>
        </h2>
        <div className="deployment-grid">
          {[
            { name: "North America", wells: 12450, savings: "45%" },
            { name: "Europe", wells: 8760, savings: "38%" },
            { name: "Asia Pacific", wells: 15320, savings: "52%" },
            { name: "Africa", wells: 9880, savings: "41%" },
          ].map((r, i) => (
            <div key={i} className="card">
              <h3>{r.name}</h3>
              <p>Active Wells: {r.wells}</p>
              <p className="highlight">Water Savings: {r.savings}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <h3>
          Start Your <span className="highlight">Water Intelligence</span> Journey Today
        </h3>
        <p>
          Join thousands of professionals who trust INGRES for sustainable water
          management.
        </p>
        <button className="btn-primary" onClick={() => setChatOpen(true)}>
          Start Free Conversation
        </button>
        <p className="copyright">
          © 2025 INGRES. Trusted by water professionals worldwide.
        </p>
      </footer>

      {/* ChatBot Popup */}
      {chatOpen && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h3>INGRES ChatBot</h3>
            <button onClick={() => setChatOpen(false)}>✖</button>
          </div>
          <div className="chatbot-body">
            <p>👋 Hi! Ask me about groundwater levels, predictions, or analytics.</p>
          </div>
          <div className="chatbot-input">
            <input type="text" placeholder="Type your message..." />
            <button className="btn-primary">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
