import Button from "@mui/material/Button";

function ContactForm() {
  return (
    <form>
      <div className="row-1">
        <input type="text" name="fName" placeholder="First Name *" required />
        <input type="text" name="lName" placeholder="Last Name *" required />
      </div>
      <div className="row-2">
        <input type="email" name="email" placeholder="Email *" required />
        <input type="tel" name="phone" placeholder="Phone" />
      </div>
      <textarea
        type="textarea"
        name="message"
        placeholder="Please provide some information about your project here"
      />
      <Button
        variant="outlined"
        type="submit"
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
