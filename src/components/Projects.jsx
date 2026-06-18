import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";

const Projects = ({ visible }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!visible || !containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("anim-visible");
        });
      },
      { threshold: 0.1 }
    );
    containerRef.current
      .querySelectorAll(".anim-ready, .anim-scale")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [visible]);

  return (
    <section style={{ paddingTop: "60px", minHeight: "100vh" }}>
      <div
        ref={containerRef}
        style={{ maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem" }}
      >
        <p
          className="anim-ready"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--accent)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          // proyectos
        </p>
        <h2
          className="anim-ready"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem,3vw,2.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text-1)",
            marginBottom: "2rem",
          }}
        >
          Trabajo en producción
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, delay }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.borderColor = "rgba(61,255,224,0.35)";
      cardRef.current.style.transform = "translateY(-6px) scale(1.01)";
      cardRef.current.style.transition =
        "transform 0.28s cubic-bezier(.34,1.56,.64,1), border-color 0.25s";
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.borderColor = "var(--border)";
      cardRef.current.style.transform = "translateY(0) scale(1)";
      cardRef.current.style.transition = "transform 0.22s ease, border-color 0.25s";
    }
  };

  return (
    <div
      ref={cardRef}
      className="anim-scale"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.25s",
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid var(--border)",
          background: project.bgGradient,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-3)",
            gap: "8px",
          }}
        >
          <div style={{ fontSize: "40px", opacity: 0.25 }}>{project.icon}</div>
          <span
            style={{
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              opacity: 0.5,
            }}
          >
            {project.name}
          </span>
        </div>
        <span
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            padding: "3px 8px",
            borderRadius: "4px",
            background: "rgba(13,13,15,0.8)",
            color: "var(--accent)",
            border: "1px solid var(--accent)",
          }}
        >
          {project.badge}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "1.25rem" }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "17px",
            fontWeight: 600,
            color: "var(--text-1)",
            marginBottom: "4px",
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "var(--accent)",
            fontFamily: "var(--font-mono)",
            marginBottom: "10px",
          }}
        >
          {project.subtitle}
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "var(--text-2)",
            lineHeight: 1.7,
            marginBottom: "1rem",
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                padding: "3px 8px",
                borderRadius: "4px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text-3)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                padding: "7px 16px",
                borderRadius: "6px",
                textDecoration: "none",
                background: "var(--accent)",
                color: "#0D0D0F",
                transition: "all 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#2de5c8";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Ver live ↗
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12px",
              fontWeight: 600,
              padding: "7px 16px",
              borderRadius: "6px",
              textDecoration: "none",
              background: "transparent",
              color: "var(--text-2)",
              border: "1.5px solid var(--border)",
              transition: "all 0.2s",
              display: "inline-block",
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
            {project.liveUrl ? "GitHub" : "Ver GitHub"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
