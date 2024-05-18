import React, { useState } from "react";
import "./SubscriptionForm.css";

function SubscriptionForm() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setShowPopup(true);
    };

    return (
        <div className="subscription-form">
            {submitted ? (
                <p>Submitted</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
            {showPopup && (
                <div className="popup">
                    <p>Thanks for submitting your email, we will be with you shortly.</p>
                </div>
            )}
        </div>
    );
}

export default SubscriptionForm;
