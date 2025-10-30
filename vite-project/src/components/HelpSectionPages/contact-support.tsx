import { useNavigate } from "react-router-dom";

export default function ContactSupport() {
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
                To contact support, go to the support page and fill out the contact form with your issue. A support representative will get back to you as soon as possible.
            </p>
        </div>
    )
}