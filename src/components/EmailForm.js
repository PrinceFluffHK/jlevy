import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";

const EmailForm = () => {
    const form = useRef();
    const [deliveredClass, setDeliveredClass] = useState("invis");
    const [undeliveredClass, setUndeliveredClass] = useState("invis");
    const [formClass, setFormClass] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_xjsinbq",
                "template_w6t8kb5",
                form.current,
                "1pOROJRpFCMlZUHYV"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDeliveredClass("");
                    setFormClass("");
                },
                (error) => {
                    console.log(error.text);
                    setUndeliveredClass("");
                }
            );
    };

    return (
        <Grid className="center" item xs={12} md={6}>
            <div className="width-90 form-container">
                <div className="form-body">
                    <div className={formClass}>
                        <h1 className="invis-md">
                            <FontAwesomeIcon icon={faEnvelope} />
                            {"  "}jacoblevy95@gmail.com
                        </h1>
                    </div>
                    <form className="" ref={form} onSubmit={sendEmail}>
                        <div className={formClass}>
                            <div className="">
                                <label>
                                    <h3>Name/Organization</h3>
                                </label>
                                <input
                                    className="width-90"
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div className="">
                                <label>
                                    <h3>Email Address</h3>
                                </label>
                                <input
                                    className="width-90"
                                    type="email"
                                    name="email"
                                />
                            </div>
                            <div>
                                <label>
                                    <h3>Message</h3>
                                </label>
                                <textarea
                                    className="width-100"
                                    name="message"
                                    rows={10}
                                />
                            </div>
                            <input type="submit" value="Send" />
                        </div>
                        <h1
                            style={{ color: "green", textAlign: "center" }}
                            className={deliveredClass}
                        >
                            Thanks for the message, I'll get back to you soon!
                        </h1>
                        <h1
                            style={{ color: "red" }}
                            className={undeliveredClass}
                        >
                            An error has ocurred, please try again later.
                        </h1>
                    </form>
                </div>
            </div>
        </Grid>
    );
};

export default EmailForm;
