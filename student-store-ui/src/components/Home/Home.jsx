import * as React from "react"
import "./Home.css"
import ProductCard from "../ProductCard/ProductCard"

export default function Home() {
  return (
    <div className="home">
      <p>Home</p>
      <ProductCard />
    </div>
  )
}
