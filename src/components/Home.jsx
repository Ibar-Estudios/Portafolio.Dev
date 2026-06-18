import { useEffect, useRef } from "react";
import AnimatedTerminal from "./AnimatedTerminal";
import { stack } from "@/data/skills";

const Home = ({ onNavigate, visible }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!visible || !containerRef.current) return;
    const els = containerRef.current.querySelectorAll(".anim-ready, .anim-scale");
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add("anim-visible"), 120 + i * 120);
    });
  }, [visible]);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        paddingTop: "60px",
      }}
    >
      <div
        ref={containerRef}
        style={{
          maxWidth: "720px",
          width: "100%",
          padding: "0 2rem",
        }}
      >
        {/* Terminal */}
        <div className="anim-ready">
          <AnimatedTerminal />
        </div>

        {/* Tagline */}
        <h1
          className="anim-ready"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem,5vw,3.25rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--text-1)",
            marginBottom: "1.25rem",
          }}
        >
          Construyo experiencias
          <br />
          digitales{" "}
          <span style={{ color: "var(--accent)" }}>que importan.</span>
        </h1>

        {/* Subtítulo */}
        <p
          className="anim-ready"
          style={{
            fontSize: "16px",
            color: "var(--text-2)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: "540px",
          }}
        >
          Desarrollador Full Stack MERN especializado en React, Node.js y
          MongoDB. Combino precisión técnica con sensibilidad de diseño para
          crear productos reales y funcionales.
        </p>

        {/* CTAs */}
        <div
          className="anim-ready"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "0" }}
        >
          <button
            onClick={() => onNavigate("projects")}
            style={{
              padding: "11px 28px",
              background: "var(--accent)",
              color: "#0D0D0F",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 700,
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2de5c8";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(61,255,224,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Ver proyectos
          </button>

          <button
            onClick={() => onNavigate("contact")}
            style={{
              padding: "11px 28px",
              background: "rgba(61,255,224,0.08)",
              color: "var(--accent)",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 600,
              border: "1.5px solid rgba(61,255,224,0.45)",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(61,255,224,0.15)";
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 16px rgba(61,255,224,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(61,255,224,0.08)";
              e.currentTarget.style.borderColor = "rgba(61,255,224,0.45)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Contactarme
          </button>
        </div>

        {/* Stack badges */}
        <div
          className="anim-ready"
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "var(--text-3)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginRight: "0.25rem",
            }}
          >
            Stack
          </span>
          {stack.map((tech, i) => (
            <span
              key={tech}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                padding: "4px 10px",
                borderRadius: "5px",
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--text-2)",
                cursor: "default",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(61,255,224,0.4)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-2)";
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
