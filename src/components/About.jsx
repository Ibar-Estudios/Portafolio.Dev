import { useEffect, useRef } from "react";
import { skills, experience as exp } from "@/data/skills";
import { experience } from "@/data/experience";
import Image from "next/image";

const SectionEyebrow = ({ children }) => (
  <p
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: "var(--accent)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: "0.75rem",
    }}
  >
    {children}
  </p>
);

const About = ({ visible }) => {
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
      .querySelectorAll(".anim-ready, .anim-left, .anim-right, .anim-scale")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visible]);

  return (
    <section style={{ paddingTop: "60px", minHeight: "100vh" }}>
      <div
        ref={containerRef}
        style={{ maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem" }}
      >
        <SectionEyebrow>// sobre mí</SectionEyebrow>
        <h2
          className="anim-ready section-title"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem,3vw,2.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text-1)",
            marginBottom: "1.5rem",
          }}
        >
          Ibar Exequiel Caubet
        </h2>

        {/* Grid foto + texto */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "3rem",
            alignItems: "start",
            marginBottom: "3rem",
          }}
        >
          {/* Foto */}
          <div className="anim-left" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "-16px",
                width: "3px",
                height: "60%",
                background: "var(--accent)",
                borderRadius: "2px",
                opacity: 0.7,
              }}
            />
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/images/img_of_my/My-Perfil.jpeg"
                alt="Foto de Ibar Caubet"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* Texto */}
          <div className="anim-right">
            {[
              <>
                <strong
                  style={{ color: "var(--text-1)", fontWeight: 500 }}
                >
                  Full Stack Developer
                </strong>{" "}
                con stack MERN, en formación activa en Diseño UX/UI y
                Automatización con Inteligencia Artificial. Construyo productos
                web completos: desde el diseño de la interfaz hasta la API y la
                base de datos.
              </>,
              <>
                Cada proyecto es una oportunidad para aportar soluciones
                eficientes, cuidar cada detalle visual y crear experiencias que
                realmente conecten con el usuario. Creo que una buena web no
                solo debe verse bien, sino también{" "}
                <strong style={{ color: "var(--text-1)", fontWeight: 500 }}>
                  sentirse bien al usarla.
                </strong>
              </>,
              <>
                Mi trayectoria previa en el sector de seguridad —formación
                militar y roles de responsabilidad operativa— me brinda una
                capacidad real de{" "}
                <strong style={{ color: "var(--text-1)", fontWeight: 500 }}>
                  liderazgo, gestión bajo presión y trabajo en equipo
                </strong>{" "}
                que traslado directamente al entorno de desarrollo.
              </>,
            ].map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontSize: "15px",
                  color: "var(--text-2)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "1rem",
            marginTop: "2.5rem",
          }}
        >
          {skills.map((skill, i) => (
            <div
              key={skill.category}
              className="anim-scale"
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(61,255,224,0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              sx={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "1.25rem",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "1.25rem",
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                }}
              >
                {skill.category}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--text-2)",
                  lineHeight: 1.8,
                }}
              >
                {skill.items.join(" · ")}
              </div>
            </div>
          ))}
        </div>

        {/* Experiencia */}
        <div style={{ marginTop: "3rem" }}>
          <SectionEyebrow>// experiencia</SectionEyebrow>

          {experience.map((item, i) => (
            <div
              key={i}
              className="anim-ready"
              style={{
                display: "flex",
                gap: "1.5rem",
                padding: "1.25rem 0",
                borderBottom:
                  i < experience.length - 1
                    ? "1px solid var(--border)"
                    : "none",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Dot + línea */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "4px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: item.current ? "var(--accent)" : "var(--text-3)",
                    flexShrink: 0,
                  }}
                />
                {i < experience.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      width: "1px",
                      background: "var(--border)",
                      marginTop: "6px",
                    }}
                  />
                )}
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--text-1)",
                    marginBottom: "2px",
                  }}
                >
                  {item.role}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--accent)",
                    marginBottom: "4px",
                  }}
                >
                  {item.company}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-3)",
                    marginBottom: "8px",
                  }}
                >
                  {item.date}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--text-2)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </section>
  );
};

const Footer = () => (
  <footer
    style={{
      marginTop: "3rem",
      borderTop: "1px solid var(--border)",
      paddingTop: "2rem",
      textAlign: "center",
      fontSize: "12px",
      color: "var(--text-3)",
      fontFamily: "var(--font-mono)",
    }}
  >
    Villa Astolfi · Pilar, Buenos Aires · exequielcaubet@gmail.com
  </footer>
);

export default About;
