import * as React from "react";
import "./About.css";
import { Grid } from "@mantine/core";

export default function About() {
  return (
    <Grid grow className="about">
      <Grid.Col span={8} className="about-text">
        <p>
          The codepath student store offers great products at great prices from
          a great team and for a great cause.
        </p>
        <p>
          We've searched far and wide for items that perk the interests of even
          the most eccentric students and decided to offer them all here in one
          place.
        </p>
        <p>
          All proceeds go towards bringing high quality CS education to college
          students around the country.
        </p>
      </Grid.Col>
      <Grid.Col span={4} className="about-img-container">
        <img
          src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
          className="about-img"
        />
      </Grid.Col>
    </Grid>
  );
}
