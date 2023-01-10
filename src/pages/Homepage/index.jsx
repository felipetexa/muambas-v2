import React from 'react'
import { CarouselWrapper, AllProductsSection, SectionTitle } from './styles'
import ProductsCarousel from '../../components/Carousel'
import Header from '../../components/Header'
import Card from '../../components/Card'

function Home() {
  return (
    <div>
      <Header />
      <CarouselWrapper>
        <ProductsCarousel />
      </CarouselWrapper>
        <SectionTitle>All Products</SectionTitle>
      <AllProductsSection>
        <Card />
        <Card />
        <Card />
        <Card />
      </AllProductsSection>
    </div>
  )
}

export default Home