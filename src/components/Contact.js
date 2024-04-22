import React from "react";
import EmailForm from "./EmailForm";
import { Grid } from "@mui/material";
import nicePic from "../images/HS_JacobLevy_3.jpg";

const Contact = () => {
    const ContactHeadshot = () => {
        return (
            <Grid item xs={12} md={6}>
                <div className="contact-headshot-container">
                    <img
                        className="contact-headshot"
                        src={nicePic}
                        alt="Professional picture of Jacob Levy in a suit"
                    />
                </div>
            </Grid>
        );
    };

    return (
        <div className="ninety-container top-bar-margin">
            <div className="contact-block">
                <Grid container rowSpacing={4}>
                    <ContactHeadshot />
                    <EmailForm />
                </Grid>
            </div>
        </div>
    );
};

export default Contact;
