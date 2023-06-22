import * as React from "react";
import "./SearchBar.css";
import { TextInput } from "@mantine/core";

export default function SearchBar({ searchParameter, setSearchParameter }) {
  return (
    <form className="search-bar">
      <TextInput
        placeholder="Search"
        value={searchParameter}
        onChange={(event) => {
          setSearchParameter(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
          }
        }}
        inputsstyle={{ textAlign: "end" }}
      />
    </form>
  );
}
