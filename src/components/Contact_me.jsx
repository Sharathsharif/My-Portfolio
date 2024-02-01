import "./contact_me.css";
import React from "react";

function ContactMeSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thanks for contacting me, I will call back within 24hrs");
  };

  const handleInput = (event) => {
    const { value } = event.target;
    event.target.value = value.replace(/[^0-9]/g, "");
  };

  return (
    <div className="Contactme_section">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <label className="input_box">
          Name:
          <input 
          type="text" 
          placeholder="Enter your Name" 
          required />
        </label>

        <label className="input_box">
          Contact Number:
          <input
            type="tel"
            placeholder="Enter your Contact Number"
            pattern="\d{10}"
            title="Contact number should be 10 digits"
            onInput={handleInput}
            required
          />
        </label>

        <label className="input_box">
          Email ID:
          <input 
          type="email" 
          placeholder="Enter your Email Id" 
          required />
        </label>

        <label className="input_box">
          Mention your purpose:
          <input 
          type="text" 
          placeholder="Reason" 
          required />
        </label>
        <br />
        
        <input 
        type="submit" />

      </form>
    </div>
  );
}

export default ContactMeSection;
