import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

import "../ContactForm.css";

const SERVICE_ID = "service_omsi1nn";
const TEMPLATE_ID = "template_fetr1xg";
const USER_ID = "TlyDtMBamonx8DfSQ";

const ContactForm = () => {
  const handleOnSubmit = (e: React.ChangeEvent<any>): void => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="ContactForm">
      <Form id="form" onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="from_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="from_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          name="message"
          placeholder="Message…"
          required
        />
        <Button type="submit" id="submit">
          Send{" "}
          <i className="fa-solid fa-paper-plane" style={{ color: "#ffffff" }} />
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
