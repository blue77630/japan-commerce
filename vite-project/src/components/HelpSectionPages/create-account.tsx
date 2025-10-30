import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
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
                To create an account, click on the "Sign Up" button on the top right corner of the homepage. Fill in the required information such as your name, email address, and password. After submitting the form, you will receive a confirmation email to verify your account.
            </p>
        </div>
    )
}