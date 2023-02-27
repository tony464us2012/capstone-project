import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import GreekSalad from '../assets/Food/greek-salad.webp'
import Bruschetta from '../assets/Food/bruschetta.jpg'
import LemonDessert from '../assets/Food/lemon-dessert.webp'
import Card from './Card/Card';


const Carousels = () => {
  return (
    <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
        <Card image={GreekSalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
        <Card image={Bruschetta}name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/>
        <Card image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/>
    </Carousel>
  )
}

export default Carousels