import React, { useState } from "react";
import "./Community.css";

export default function Community() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const platforms = [
    {
      id: "discord",
      name: "Discord",
      icon: "https://i.pinimg.com/736x/b5/d4/ce/b5d4ce10a744861ffd3314d20d116976.jpg", // 🖼️ your logo image path
      description:
        "Join our Discord server for real-time anime discussions and events",
      colorClass: "discord-color",
      members: "50K+ Members",
      link: "#",
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: "https://i.pinimg.com/736x/e7/c1/54/e7c15488d7a9ef341d79bbe19c5bac30.jpg",
      description: "Follow our Facebook page for daily anime news and updates",
      colorClass: "facebook-color",
      members: "75K+ Followers",
      link: "#",
    },
    {
      id: "reddit",
      name: "Reddit",
      icon: "https://i.pinimg.com/1200x/e3/4e/52/e34e522afea0b21b08d3b21636e68b1c.jpg",
      description:
        "Discuss theories, reviews, and recommendations with fellow fans",
      colorClass: "reddit-color",
      members: "120K+ Members",
      link: "#",
    },
    {
      id: "telegram",
      name: "Telegram",
      icon: "https://i.pinimg.com/736x/0a/50/c1/0a50c1516e434e0108649d2987cfaeb0.jpg",
      description:
        "Get instant notifications about new episodes and releases",
      colorClass: "telegram-color",
      members: "35K+ Subscribers",
      link: "#",
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: "https://i.pinimg.com/736x/2a/20/02/2a20022a47073b86a709797e38e24132.jpg",
      description:
        "Watch reviews, analysis, and anime content on our channel",
      colorClass: "youtube-color",
      members: "200K+ Subscribers",
      link: "#",
    },
    {
      id: "twitter",
      name: "Twitter/X",
      icon: "https://i.pinimg.com/736x/d7/d6/a4/d7d6a410ff6faf753acdfaff7d681179.jpg",
      description:
        "Follow us for quick updates, polls, and community interactions",
      colorClass: "twitter-color",
      members: "90K+ Followers",
      link: "#",
    },
  ];

  return (
    <div className="community-container">
      <div className="community-wrapper">
        {/* Header */}
        <div className="community-header">
          <h1 className="community-title">Join Our Community</h1>
          <p className="community-description">
            Connect with thousands of anime fans worldwide. Share your thoughts,
            discover new shows, and stay updated with the latest news!
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="platforms-grid">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              onMouseEnter={() => setHoveredCard(platform.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`platform-card ${
                hoveredCard === platform.id ? "hovered" : ""
              }`}
            >
              <div className="platform-content">
                <div className={`platform-icon ${platform.colorClass}`}>
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="icon"
                  />
                </div>
                <h3 className="platform-name">{platform.name}</h3>
                <p className="platform-desc">{platform.description}</p>
                <span className="platform-members">{platform.members}</span>
                <button className={`platform-button ${platform.colorClass}`}>
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2 className="cta-title">Why Join Our Community?</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500K+</div>
              <p className="stat-label">Active Members</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <p className="stat-label">Live Discussions</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">Daily</div>
              <p className="stat-label">Fresh Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
