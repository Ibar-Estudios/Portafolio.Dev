import React from "react";

const NAV_ITEMS = [
  { id: "home",     label: "Inicio" },
  { id: "about",    label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact",  label: "Contacto" },
];

const Navbar = ({ activePage, onNavigate }) => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(13,13,15,0.88)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border)",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--accent)",
          letterSpacing: "0.04em",
        }}
      >
        ibar.caubet
        <span style={{ color: "var(--text-3)" }}>_</span>
      </span>

      <div style={{ display: "flex", gap: "0.25rem" }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              color:
                activePage === item.id ? "var(--accent)" : "var(--text-2)",
              padding: "6px 14px",
              borderRadius: "6px",
              border: "none",
              background:
                activePage === item.id
                  ? "rgba(255,255,255,0.06)"
                  : "transparent",
              cursor: "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              if (activePage !== item.id) {
                e.currentTarget.style.color = "var(--text-1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }
            }}
            onMouseLeave={(e) => {
              if (activePage !== item.id) {
                e.currentTarget.style.color = "var(--text-2)";
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
