import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lf86czv",
        "template_26n2grm",
        form.current,
        "XIrcHgICt-FIvSVdY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("message not sent! try again");
        }
      );
  };

  return (
    <div className="contact py-5 px-5 mb-5">
      <h1 className="text-center">Contact me</h1>
      <p className="text-center">
        If you want to get in touch or collaborate on a project, feel free to
        send me a message,
      </p>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="pt-3">
          <div className="d-flex py-2 input">
            <label htmlFor="fullname" className="form-label w-100 ">
              Full Name :
            </label>
            <input
              className="form-control"
              placeholder="first last"
              id="fullname"
              name="from_name"
              required
            ></input>
          </div>
          <div className="d-flex py-2 input">
            <label htmlFor="email" className="form-label w-100  ">
              Email :
            </label>
            <input
              className="form-control "
              placeholder="email@gmail.com"
              id="email"
              name="from_email"
              required
            ></input>
          </div>

          <textarea
            className="w-100 px-3  col-10"
            style={{ height: "300px" }}
            placeholder="Please paste comment here..."
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-dark mt-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
