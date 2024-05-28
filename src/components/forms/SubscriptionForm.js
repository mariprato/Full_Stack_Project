import React, { useState } from "react";
import "./SubscriptionForm.css";
import ButtonComponent from "../generic/ButtonComponent";

function SubscriptionForm() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setShowPopup(true);
        localStorage.setItem("email", email);
        console.log("Email saved to list");
    };

    return (
        <div className="subscription-form">
            {submitted ? (
                <p>Email submitted.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <ButtonComponent variant="button-newsletter-submit" type="submit">Submit</ButtonComponent>
                </form>
            )}
            {showPopup && (
                <div className="popup">
                    <p>You will receive your Fur-Ever Found newsletter shortly.</p>
                </div>
            )}
        </div>
    );
}

export default SubscriptionForm;