import { useNavigate } from "react-router-dom";

export default function CancelOrder() {
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
                To cancel an order, go to the orders page, find the order you want to cancel, and click "Cancel Order". Follow the prompts to confirm your cancellation.
            </p>
        </div>
    )
}