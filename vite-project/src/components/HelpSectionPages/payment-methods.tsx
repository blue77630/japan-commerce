import { useNavigate } from "react-router-dom";

export default function PaymentMethods() {
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
                To manage payment methods, go to your account settings and select "Payment Methods". Here, you can add a new payment method by clicking "Add Payment Method" and entering the required details. You can also edit or remove existing payment methods as needed.
            </p>
        </div>
    )
}