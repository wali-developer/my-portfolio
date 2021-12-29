import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // input onChange event function storeData()
  const storeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // assign input values to the userData object
    setUserData({ ...userData, [name]: value });
  };

  // Function when submit button clicked, data will be POST in firbase realtime database
  const submitMessageData = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = userData;
    try {
      if ((name, email, subject, message && email.length > 12)) {
        const res = await fetch(
          "https://myportfolio-f88db-default-rtdb.firebaseio.com/UserMessageRecords.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              subject,
              message,
            }),
          }
        );
        if (res) {
          setUserData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          toast.success("Your feedback has been saved successfully...");
        } else {
          toast.error("Your feedback is not saved, Pleae send again!");
        }
      } else {
        toast.error("Please fill out all the input correctly...");
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <>
      <section className="contact">
        <h1>Contact Me!</h1>
        <div className="row contactRow">
          <div className="col-md-12 col-lg-5 contactRowCol1">
            <div className="row contactInnerRow">
              <div className="col-1 col-lg-1">
                <i class="fas fa-envelope-open-text"></i>
              </div>
              <div className="col-1 col-lg-11 contactInnerRowCol2">
                <p>
                  Email <br />
                  <span>waliullah0540@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="row contactInnerRow">
              <div className="col-1 col-lg-1">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <div className="col-11 col-lg-11 contactInnerRowCol2">
                <p>
                  Phone <br />
                  <span>+923038175044</span>
                </p>
              </div>
            </div>
            <div className="row contactInnerRow">
              <div className="col-1">
                <i class="fab fa-skype"></i>
              </div>
              <div className="col-11 contactInnerRowCol2">
                <p>
                  Skype <br />
                  <span>My Skype</span>
                </p>
              </div>
            </div>
          </div>
          <form className="col-12 col-lg-7 contactRowCol2">
            <div className="row formRow">
              <div className="col-12 col-lg-6 formRowCol1">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={userData.name}
                  onChange={storeData}
                />
              </div>
              <div className="col-12 col-lg-6 formRowCol2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={userData.email}
                  onChange={storeData}
                />
              </div>
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              required
              className="subject"
              value={userData.subject}
              onChange={storeData}
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Write your message"
              value={userData.message}
              onChange={storeData}
            />
            <Button
              variant="primary"
              size="lg"
              className="primaryBtn my-4"
              type="submit"
              onClick={submitMessageData}
            >
              Send Message Now
            </Button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
