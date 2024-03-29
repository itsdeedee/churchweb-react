import { Formik, Form, Field } from "formik";
import "../Form.css";
const NewsletterForm = () => {
  const handleSubmit = () => {};
  return (
    <>
      <div>
        <Formik initialValues={{ Name: "", email: "" }} onSubmit={handleSubmit}>
          <Form className="w-64 p-4 flex flex-col">
            <h2>Sign up for our Newsletter!</h2>
            <div className="my-4 flex flex-col">
              <Field name="Name" className="Name-field" placeholder="Name..." />
            </div>
            <div className="my-4 flex flex-col">
              <Field
                name="email"
                className="Name-field"
                placeholder="Email..."
              />
            </div>
            <button type="submit" className="Submit-button">
              SIGN UP
            </button>
          </Form>
        </Formik>
      </div>
      ;
    </>
  );
};

export default NewsletterForm;
