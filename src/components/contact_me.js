import "./contact_me.css";
import React from "react";

const Contact_me = () => {
  return (
    <div className="Contactme_section">
      <h2>Contact Me</h2>
      <form action="">
        <label className="input_box">
          Name:
          <input type="text" placeholder="Enter your Name" />
        </label>
        <label className="input_box">
          Contact Number:
          <input type="number" placeholder="Enter your Contact Number" />
        </label>
        <label className="input_box">
          Email ID:
          <input type="email" placeholder="Enter your Email Id" />
        </label>
        <label className="input_box">
          Mention your purpose:
          <input type="text" placeholder="Reason" />
        </label>
        <input type="submit"  />
      </form>
    </div>
  );
}

export default Contact_me;
