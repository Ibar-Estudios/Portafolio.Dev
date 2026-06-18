import { useState, useEffect, useRef } from "react";

const TERMINAL_LINES = [
  { delay: 0,    html: '<span class="t-comment">// cargando perfil...</span>' },
  { delay: 500,  html: "" },
  { delay: 620,  html: '<span class="t-keyword">const</span> <span class="t-func">developer</span> <span class="t-paren">= {</span>' },
  { delay: 1050, html: '&nbsp;&nbsp;name<span class="t-paren">:</span> <span class="t-string">"Ibar Exequiel Caubet"</span><span class="t-paren">,</span>' },
  { delay: 1480, html: '&nbsp;&nbsp;role<span class="t-paren">:</span> <span class="t-string">"Full Stack Developer"</span><span class="t-paren">,</span>' },
  { delay: 1900, html: '&nbsp;&nbsp;stack<span class="t-paren">:</span> <span class="t-string">["MongoDB","Express","React","Node.js"]</span><span class="t-paren">,</span>' },
  { delay: 2320, html: '&nbsp;&nbsp;deploy<span class="t-paren">:</span> <span class="t-string">["Vercel","Render"]</span><span class="t-paren">,</span>' },
  { delay: 2680, html: '&nbsp;&nbsp;location<span class="t-paren">:</span> <span class="t-string">"Pilar, Buenos Aires 🇦🇷"</span><span class="t-paren">,</span>' },
  { delay: 3060, html: '&nbsp;&nbsp;status<span class="t-paren">:</span> <span class="t-string">"open to work ✓"</span>' },
  { delay: 3380, html: '<span class="t-paren">};</span>' },
  { delay: 3660, html: "" },
  { delay: 3760, html: '<span class="t-func">console</span><span class="t-paren">.</span><span class="t-keyword">log</span><span class="t-paren">(</span><span class="t-func">developer</span><span class="t-paren">);</span>' },
];

const AnimatedTerminal = () => {
  const [lines, setLines] = useState([
    '<span class="t-comment">// iniciando...</span>',
  ]);
  const timersRef = useRef([]);

  useEffect(() => {
    timersRef.current = TERMINAL_LINES.map(({ delay, html }, i) =>
      setTimeout(() => {
        setLines((prev) => {
          const next = [...prev, html === "" ? "&nbsp;" : html];
          return next;
        });
      }, delay)
    );

    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="terminal-window">
      <div className="terminal-bar">
        <div className="terminal-dot" style={{ background: "#FF5F56" }} />
        <div className="terminal-dot" style={{ background: "#FFBD2E" }} />
        <div className="terminal-dot" style={{ background: "#27C93F" }} />
        <span className="terminal-label">portfolio.js — node v20</span>
      </div>

      <div className="terminal-body">
        {lines.map((line, i) => (
          <div
            key={i}
            dangerouslySetInnerHTML={{
              __html:
                i === lines.length - 1 && lines.length < TERMINAL_LINES.length + 1
                  ? `${line}<span class="t-cursor"></span>`
                  : line,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedTerminal;
