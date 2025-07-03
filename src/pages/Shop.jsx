import React from 'react'
import ProductList from '../components/ProductList'
import Filters from '../components/Filters'

const Shop = () => {
  return (
    <div className='shop__page' style={{minHeight:'100vh'}}>
    <Filters/>
     <ProductList />
    </div>
  )
}

export default Shop
