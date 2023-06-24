import * as React from "react";
import "./SortSwitch.css";
import { useState } from "react";
import { Switch } from "@mantine/core";

export default function SortSwitch({ setProducts }) {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.currentTarget.checked);
    if (event.currentTarget.checked) {
      setProducts((prev) => {
        const newProducts = [...prev];
        newProducts.sort((a, b) => a.price - b.price);
        return newProducts;
      });
    } else {
      setProducts((prev) => {
        const newProducts = [...prev];
        newProducts.sort((a, b) => a.id - b.id);
        return newProducts;
      });
    }
  };
  return <Switch checked={checked} onChange={(event) => handleChange(event)} label="Sort increasing by price" />;
}
