export default function AuthStatus() {
    const token = localStorage.getItem("token");
    const userJson = localStorage.getItem("user");
    const user = userJson ? JSON.parse(userJson) : null;

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.reload();
    }

    if (!token) {
        return (
            <div style={{
                position: "fixed",
                right: 16,
                bottom: 16,
                background: "rgba(0,0,0,0.65)",
                color: "#fff",
                padding: "8px 12px",
                borderRadius: 8,
                fontSize: 13,
                zIndex: 1000
            }}>
                Non connecté
            </div>
        );
    }

    return (
        <div style={{
            position: "fixed",
            right: 16,
            bottom: 16,
            background: "rgba(0,0,0,0.8)",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: 8,
            fontSize: 13,
            zIndex: 1000,
            minWidth: 180,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
        }}>
            <div style={{ fontWeight: 600 }}>
                {user?.email ?? "Utilisateur"}
            </div>
            {user?.name && <div style={{ fontSize: 12, opacity: 0.9 }}>{user.name}</div>}
            <div style={{ marginTop: 6, display: "flex", justifyContent: "flex-end" }}>
                <button onClick={logout} style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: 6,
                    cursor: "pointer",
                    fontSize: 12
                }}>Logout</button>
            </div>
        </div>
    );
}