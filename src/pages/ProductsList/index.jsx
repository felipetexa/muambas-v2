import React from 'react'
import Filters from '../../components/Filters'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import { ProductsListWrapper, BreadcrumbSection, FilterProductSection, FilterSection, ProductCardsSection } from './styles'
import CustomCard from '../../components/Card'
import Pagination from '@mui/material/Pagination';

function ProductsList() {
  return (
    <div>
      <Header />
        <BreadcrumbSection>
        <Breadcrumbs />
        </BreadcrumbSection>
      <ProductsListWrapper>
        <FilterProductSection>
        <FilterSection>
        <Filters name={'Price'} filtered={['$0-499', '$500-999', '$1000-2999', '$3000-6000']}/>
        <Filters name={'Categories'} filtered={['Videogames', 'Keyboards', 'Notebooks']}/>
        </FilterSection>
        <ProductCardsSection>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        <Pagination count={10} variant="outlined" shape="rounded" />
        </ProductCardsSection>
        </FilterProductSection>
      </ProductsListWrapper>
      <Footer />
    </div>
  )
}

export default ProductsList;