import Button from "@mui/material/Button";

function ContactForm() {
  return (
    <form>
      <label for="fName">
        First Name <span>*</span>
      </label>
      <input type="text" name="fName" required />
      <br />
      <label for="lName">
        Last Name <span>*</span>
      </label>
      <input type="text" name="lName" required />
      <br />
      <label for="email">
        Email <span>*</span>
      </label>
      <input type="email" name="email" required />
      <br />
      <label for="textarea">Message</label>
      <textarea type="textarea" rows="4" cols="40" name="textarea" />
      <br />
      <Button
        variant="outlined"
        type="submit"
        sx={{
          padding: "5px 40px",
          backgroundColor: "#00ADB5",
          color: "#eeeeee",
          fontWeight: 500,
          fontSize: "1.1rem",
          marginBottom: "20px",
        }}
      >
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
