import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem",
        textAlign: "center",
        fontSize: "12px",
        color: "var(--text-3)",
        fontFamily: "var(--font-mono)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        {[
          {
            Icon: FaGithub,
            href: "https://github.com/Ibar-Estudios",
            label: "GitHub",
          },
          {
            Icon: FaLinkedin,
            href: "https://www.linkedin.com/in/ibar-caubet-0571873a1/",
            label: "LinkedIn",
          },
          {
            Icon: FaInstagram,
            href: "https://www.instagram.com/ibar_caubet/",
            label: "Instagram",
          },
        ].map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              color: "var(--text-3)",
              fontSize: "20px",
              transition: "color 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Icon />
          </a>
        ))}
      </div>
      <span>ibar.caubet_ · Villa Astolfi-Pilar, Buenos Aires 🇦🇷</span>
    </footer>
  );
};

export default Footer;
