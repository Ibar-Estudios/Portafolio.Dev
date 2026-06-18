import { useEffect, useRef, useState } from "react";

const CONTACT_LINKS = [
  {
    icon: "in",
    label: "LinkedIn",
    handle: "/in/ibar-caubet",
    href: "https://www.linkedin.com/in/ibar-caubet-0571873a1/",
  },
  {
    icon: "gh",
    label: "GitHub",
    handle: "@IBAR-ESTUDIOS",
    href: "https://github.com/Ibar-Estudios",
  },
  {
    icon: "@",
    label: "Email",
    handle: "exequielcaubet@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=exequielcaubet@gmail.com",
  },
  {
    icon: "ig",
    label: "Instagram",
    handle: "@ibar_caubet",
    href: "https://www.instagram.com/ibar_caubet/",
  },
];

const Contact = ({ visible }) => {
  const containerRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

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
      .querySelectorAll(".anim-ready, .anim-left, .anim-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [visible]);

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Por favor completá todos los campos.");
      return;
    }
    setError("");
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(
      `mailto:exequielcaubet@gmail.com?subject=Contacto desde portafolio - ${encodeURIComponent(form.name)}&body=${body}`,
      "_blank"
    );
  };

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
          // contacto
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
          Hablemos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Info + links */}
          <div className="anim-left">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--text-1)",
                marginBottom: "0.5rem",
              }}
            >
              ¿Tenés un proyecto en mente?
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-2)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Estoy disponible para proyectos freelance, posiciones
              junior/semi-senior y colaboraciones. Respondo en menos de 24
              horas.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CONTACT_LINKS.map((link) => (
                <ContactLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div
            className="anim-right"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.75rem",
            }}
          >
            <FormField
              label="Nombre"
              type="text"
              placeholder="Tu nombre completo"
              value={form.name}
              onChange={(v) => setForm((p) => ({ ...p, name: v }))}
            />
            <FormField
              label="Correo"
              type="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={(v) => setForm((p) => ({ ...p, email: v }))}
            />

            {/* Textarea */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--text-2)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                Mensaje
              </label>
              <textarea
                rows={5}
                placeholder="Contame sobre tu proyecto o propuesta..."
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                style={{
                  width: "100%",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "7px",
                  padding: "10px 14px",
                  color: "var(--text-1)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  outline: "none",
                  resize: "vertical",
                  minHeight: "110px",
                  lineHeight: 1.6,
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(61,255,224,0.5)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              />
            </div>

            {error && (
              <p
                style={{
                  fontSize: "12px",
                  color: "#FF5F56",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              style={{
                width: "100%",
                padding: "12px",
                background: "var(--accent)",
                color: "#0D0D0F",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 700,
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#2de5c8";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(61,255,224,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Enviar mensaje →
            </button>
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-3)",
                marginTop: "0.75rem",
                textAlign: "center",
                fontFamily: "var(--font-mono)",
              }}
            >
              redirige a mailto: exequielcaubet@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormField = ({ label, type, placeholder, value, onChange }) => (
  <div style={{ marginBottom: "1.25rem" }}>
    <label
      style={{
        display: "block",
        fontSize: "12px",
        fontWeight: 500,
        color: "var(--text-2)",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        marginBottom: "6px",
      }}
    >
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "7px",
        padding: "10px 14px",
        color: "var(--text-1)",
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        outline: "none",
        transition: "border-color 0.2s",
      }}
      onFocus={(e) =>
        (e.currentTarget.style.borderColor = "rgba(61,255,224,0.5)")
      }
      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
    />
  </div>
);

const ContactLink = ({ icon, label, handle, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      textDecoration: "none",
      padding: "10px 14px",
      borderRadius: "8px",
      border: "1px solid var(--border)",
      background: "var(--card)",
      transition: "all 0.2s",
      color: "var(--text-2)",
      fontSize: "13px",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "rgba(61,255,224,0.4)";
      e.currentTarget.style.color = "var(--text-1)";
      e.currentTarget.style.transform = "translateX(4px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "var(--border)";
      e.currentTarget.style.color = "var(--text-2)";
      e.currentTarget.style.transform = "translateX(0)";
    }}
  >
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "6px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        fontFamily: "var(--font-mono)",
        color: "var(--text-2)",
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
    <div>
      <strong
        style={{ display: "block", fontSize: "12px", color: "var(--text-1)", marginBottom: "1px" }}
      >
        {label}
      </strong>
      <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
        {handle}
      </span>
    </div>
  </a>
);

export default Contact;
