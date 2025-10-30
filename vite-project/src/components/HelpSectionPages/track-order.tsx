import { useNavigate } from "react-router-dom";

export default function TrackOrder() {
    const navigate = useNavigate();
    return (
        <div className="page-animate-in">
            <button className="back-btn" onClick={() => navigate(-1)}>
                ← Back
            </button>
            <h2>How to add an order?</h2>
            <img
                src="/images/order.png"
                alt="Add order illustration"
                style={{ width: "120px", margin: "32px 0" }}
            />
            <p style={{ maxWidth: 400, textAlign: "center" }}>
                To track your order, go to the orders page and find the order you want to track. Click on the order to view its details, including the current status and tracking information.
            </p>
        </div>
    )
}