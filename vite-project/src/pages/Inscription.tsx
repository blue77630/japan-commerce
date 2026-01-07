export default function Inscription() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
    )
}