import { useNavigate } from "react-router-dom";

export default function AddOrder() {
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
                To add an order, go to the products page, select the items you want, and click "Add to cart". Then, proceed to checkout and confirm your order.
            </p>
        </div>
    )
}