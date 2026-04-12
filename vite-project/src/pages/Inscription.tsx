import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Inscription() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const base = (import.meta.env.VITE_API_URL as string) || "";
            const res = await fetch(`${base}/api/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: form.name, email: form.email, password: form.password })
            });
            const text = await res.text();
            if (!res.ok) {
                let msg = "Échec de l'inscription.";
                try { const data = JSON.parse(text); if (data?.message) msg = data.message; } catch { if (text) msg = text; }
                throw new Error(msg);
            }
            navigate("/connexion");
        } catch (err: any) {
            setError(err.message || "Erreur réseau.");
        } finally { setLoading(false); }
    }

    return (
        <div className="page-bg page-animate-in">
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
                <label>
                    Nom
                    <input name="name" value={form.name} onChange={handleChange} autoComplete="name" />
                </label>
                <label>
                    Email
                    <input name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" />
                </label>
                <label>
                    Mot de passe
                    <input name="password" type="password" value={form.password} onChange={handleChange} autoComplete="new-password" />
                </label>
                <label>
                    Confirmer mot de passe
                    <input name="confirm" type="password" value={form.confirm} onChange={handleChange} autoComplete="new-password" />
                </label>

                {error && <div className="form-error" style={{ color: "red", marginTop: 8 }}>{error}</div>}

                <button type="submit" disabled={loading} style={{ marginTop: 12 }}>
                    {loading ? "Inscription..." : "S'inscrire"}
                </button>

                <div style={{ marginTop: 12 }}>
                    Déjà un compte ? <a onClick={() => navigate("/connexion")} style={{ cursor: "pointer" }}>Connexion</a>
                </div>
            </form>
        </div>
    );
}