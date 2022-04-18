import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

function ContactForm() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  function submit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:9000/submitForm", {
        fName: fName,
        lName: lName,
        email: email,
        phone: phone,
        message: message,
      })
      .then((res) => {
        if (res.status === 200) {
          setResponse("Submitted Successfully");
        } else {
          setResponse("Something went wrong. Please try again later.");
        }
      });
  }

  return (
    <form onSubmit={submit}>
      <div className="row-1">
        <input
          type="text"
          name="fName"
          placeholder="First Name *"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          required
        />
        <input
          type="text"
          name="lName"
          placeholder="Last Name *"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          required
        />
      </div>
      <div className="row-2">
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <textarea
        type="textarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        name="message"
        placeholder="Please provide some information about your project here"
      />
      <div className="action">{response ? <p>{response}</p> : null}</div>
      <Button
        variant="outlined"
        type="Submit"
        className="submitButton"
        sx={{
          padding: "5px 40px",
          backgroundColor: "#00ADB5",
          color: "#eeeeee",
          fontWeight: 500,
          fontSize: "1.1rem",
          margin: "5px",
        }}
      >
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
