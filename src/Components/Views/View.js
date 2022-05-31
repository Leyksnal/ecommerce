import React from 'react'
import Categories from './Categories'
// import Home from './Home'
import Market from './Market'
import ProductsPage from './ProductsPage'

export default function View() {
  return (
    <div>
      <Categories/>
      {/* <Home/> */}
      <Market/>
      <ProductsPage/>
    </div>
  )
}
