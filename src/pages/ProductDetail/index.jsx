import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { BuyProductSection, ProductPhoto, ProductDescription, RatingSection, RelatedSection } from './styles'
import RoundedCard from '../../components/Card/rounded';

function ProductDetail() {
  const [value, setValue] = React.useState(4.5);

  return (
    <div>
      <Header />
      <BuyProductSection>
        <ProductPhoto>
          <img src={require("../../assets/images/ps5.jpeg")} alt='Product to be bought'/>
        </ProductPhoto>
        <ProductDescription>
          <h1>Playstation 5</h1>
          <Rating name="read-only" value={value} precision={0.5} readOnly sx={{ fontSize: '15rem'}} />
          <h2>$649.99</h2>
          {/* <Select name='Qtd' value={[1, 2, 3]} /> */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ex est rem architecto tempora similique reprehenderit cumque iusto. Explicabo, aliquam molestias tempore non tenetur soluta perspiciatis omnis itaque nesciunt! Sapiente!</p>
          <Button variant="contained" endIcon={<AddShoppingCartOutlinedIcon />} sx={{fontSize: "2rem", paddingInline: '7rem', marginInline: '16rem', fontFamily: 'Teko'}}>
            Add to Cart
          </Button>
        </ProductDescription>
      </BuyProductSection>
      <h2 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '2rem', marginTop: '2rem' }}>Related Products</h2>
      <RelatedSection>
        <RoundedCard />
        <RoundedCard />
        <RoundedCard />
        <RoundedCard />
      </RelatedSection>
      <RatingSection>
        <h2>Username</h2>
        <Rating name="read-only" value={value} precision={0.5} readOnly sx={{ fontSize: '8rem', marginBottom: '2rem'}} />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat molestiae eum facere fugiat. Harum, ducimus? Veritatis quidem minus sunt atque quam voluptates quasi, temporibus, rerum necessitatibus laboriosam sapiente commodi officiis.
        </p>
        <h2>Username</h2>
        <Rating name="read-only" value={value} precision={0.5} readOnly sx={{ fontSize: '8rem', marginBottom: '2rem'}} />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat molestiae eum facere fugiat. Harum, ducimus? Veritatis quidem minus sunt atque quam voluptates quasi, temporibus, rerum necessitatibus laboriosam sapiente commodi officiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quod, nobis vitae aut dicta earum nisi dolor provident aliquid incidunt culpa dolores quis cumque laborum ad quasi. Perferendis, quae voluptatibus!
        </p>
      </RatingSection>
      <Footer />
    </div>
  )
}

export default ProductDetail