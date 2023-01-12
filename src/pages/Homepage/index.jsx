import React from 'react'
import { CarouselWrapper, ProductsSections, SectionTitle } from './styles'
import ProductsCarousel from '../../components/Carousel'
import Header from '../../components/Header'
import Card from '../../components/Card'
import RoundedCard from '../../components/Card/rounded.jsx'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
      <Header />
      <CarouselWrapper>
        <ProductsCarousel />
      </CarouselWrapper>
        <SectionTitle>All Products</SectionTitle>
      <ProductsSections>
        <Card />
        <Card />
        <Card />
        <Card />
      </ProductsSections>
      <SectionTitle>Categories</SectionTitle>
      <ProductsSections>
        <RoundedCard />
        <RoundedCard />
        <RoundedCard />
        <RoundedCard />
      </ProductsSections>
      <Footer />
    </div>
  )
}

export default Home