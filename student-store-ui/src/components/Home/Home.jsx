import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import CategoryMenu from "../CategoryMenu/CategoryMenu"

export default function Home() {
  return (
    <div className="home">
      <p>Home</p>
      <CategoryMenu />
      <ProductGrid />
    </div>
  )
}
