import * as React from "react";
import "./CategoryMenu.css";
import { Tabs } from "@mantine/core";

export default function CategoryMenu({selectedCategory, setSelectedCategory}) {
  return (
    <Tabs
      color="teal"
      variant="pills"
      defaultValue="all-categories"
      value={selectedCategory}
      onTabChange={(selectedCategory) => {
        setSelectedCategory(selectedCategory);
        console.log(selectedCategory);
      }}
    >
      <Tabs.List>
        <Tabs.Tab value="all-categories">All Categories</Tabs.Tab>
        <Tabs.Tab value="clothing">Clothing</Tabs.Tab>
        <Tabs.Tab value="food">Food</Tabs.Tab>
        <Tabs.Tab value="accessories">Accessories</Tabs.Tab>
        <Tabs.Tab value="tech">Tech</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
