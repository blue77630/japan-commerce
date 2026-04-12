import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email || !password) { setError("Veuillez renseigner email et mot de passe."); return; }

    setLoading(true);
    try {
      const base = (import.meta.env.VITE_API_URL as string) || "";
      const res = await fetch(`${base}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const text = await res.text();
      if (!res.ok) {
        let msg = "Échec de la connexion.";
        try { const data = JSON.parse(text); if (data?.message) msg = data.message; } catch { if (text) msg = text; }
        throw new Error(msg);
      }

      let data = {};
      try { data = JSON.parse(text); } catch {}
      if ((data as any).token) {
        localStorage.setItem("token", (data as any).token);
        localStorage.setItem("user", JSON.stringify({ name: (data as any).name, email: (data as any).email }));
        window.location.href = "/";
      }

      navigate("/");
    } catch (err: any) {
      setError(err.message || "Erreur réseau.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-bg page-animate-in">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
        <label>
          Email
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" autoComplete="username" />
        </label>
        <label>
          Mot de passe
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" autoComplete="current-password" />
        </label>

        {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}

        <button type="submit" disabled={loading} style={{ marginTop: 12 }}>
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
}