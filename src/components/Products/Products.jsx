import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import Img1 from '../../assets/product/p-1.jpg'
import Img2 from '../../assets/product/p-2.jpg'
import Img3 from '../../assets/product/p-3.jpg'
import Img4 from '../../assets/product/p-4.jpg'
import Img5 from '../../assets/product/p-5.jpg'
import Img7 from '../../assets/product/p-7.jpg'
import Img9 from '../../assets/product/p-9.jpg'
const ProductData =[
  {
    id:1,
    img:Img1,
    title:"Boat HeadPhone",
    price:"120",
    aosDelay:"0"
  },
  {
    id:2,
    img:Img2,
    title:"Rocky Mountain",
    price:"420",
    aosDelay:"200"
  },
  {
    id:3,
    img:Img5,
    title:"Bringal Mountain",
    price:"620",
    aosDelay:"220"
  },
  {
    id:3,
    img:Img3,
    title:"Boat HeadPhone",
    price:"320",
    aosDelay:"300"
  },
  {
    id:4,
    img:Img4,
    title:"Googles",
    price:"220",
    aosDelay:"420"
  },
  {
    id:7,
    img:Img7,
    title:"Googles Mountain",
    price:"290",
    aosDelay:"480"
  },
  {
    id:8,
    img:Img9,
    title:"Piching Mountain",
    price:"390",
    aosDelay:"580"
  },
  {
    id:8,
    img:'https://www.hp.com/content/dam/sites/worldwide/poly/headsets/Poly_voyager_surround_80_desktop@2x.jpg',
    title:"Poly Mountain",
    price:"390",
    aosDelay:"580"
  },
]
const Products = () => {
  return (
    <div>
      <div className='container'>
      <Heading title="Our Products"
        subtitle={"Explore Our Products"}
      />
      <ProductCard data={ProductData}/>
        
      </div>
    </div>
  )
}

export default Products
