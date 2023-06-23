import * as React from "react";
import "./Footer.css";

export default function Footer() {
  const footerInfo = [
    {
      title: "Categories",
      links: ["All Categories", "Clothing", "Food", "Accessories", "Tech"],
    },
    {
      title: "Company",
      links: ["About Us", "Find a Store", "Terms", "Sitemap", "Careers"],
    },
    {
      title: "Support",
      links: [
        "Contact Us",
        "Money Refund",
        "Order Status",
        "Shipping Info",
        "Open Dispute",
      ],
    },
    {
      title: "Account",
      links: ["Login", "Register", "Account Setting", "My Orders"],
    },
    {
      title: "Socials",
      links: ["Facebook", "Twitter", "LinkedIn", "Instagram", "YouTube"],
    },
  ];

  return (
    <div className="footer">
      {footerInfo.map((info) => (
        <div className="footer-column">
          <h3>{info.title}</h3>
          {info.links.map((link) => (
            <p>{link}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
