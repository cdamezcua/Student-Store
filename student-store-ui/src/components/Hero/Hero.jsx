import * as React from "react";
import "./Hero.css";
import { Grid } from "@mantine/core";

export default function Hero() {
  return (
    <div className="hero">
      <Grid grow>
        <Grid.Col span={8}>
          <div className="intro">
            <h1>Welcome!</h1>
            <h1>Find Your Merch!</h1>
            <p>
              We have all kinds of goodies. Click on any of the items to start
              filling up your shopping cart. Checkout whenever you're ready.
            </p>
          </div>
        </Grid.Col>
        <Grid.Col span={4} className="hero-img-container">
          <img
            src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
            className="hero-img"
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}
