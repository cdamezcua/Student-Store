import * as React from "react";
import "./ContactUs.css";
import { Grid } from "@mantine/core";

export default function ContactUs() {
  return (
    <Grid grow className="contact-us">
      <Grid.Col span={4} className="contact-us-text">
        <p>Email: code@path.org</p>
        <p>Phone: 1-800-CODEPATH</p>
        <p>Address: 123 Fake Street, San Francisco, CA</p>
      </Grid.Col>
      <Grid.Col span={8} className="contact-us-img-container">
        <img
          width={400}
          src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"
          className="contact-us-img"
        />
      </Grid.Col>
    </Grid>
  );
}
