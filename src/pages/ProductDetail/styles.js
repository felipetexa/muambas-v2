import styled from 'styled-components'

export const BuyProductSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
`
export const ProductPhoto = styled.div`
  display: flex;
  align-items: center;
  padding: 7rem;
  margin-left: 5rem;
  width: 45%;
  height: 64rem;
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.4);
  border-radius: 2rem;

  img {
    height: 500px;
    width: 500px;
  }
`

export const ProductDescription = styled.div`
  padding: 3rem;
  margin-right: 5rem;
  width: 45%;
  height: 64rem;
  font-size: 4rem;
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.4);
  border-radius: 2rem;

  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 5rem;
    margin-bottom: 5rem;
  }

  p {
    text-align: justify;
    height: 25rem;
  }
`

export const RelatedSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RatingSection = styled.div`
  padding: 7rem;
  margin-inline: auto;
  width: 80%;
  height: 45rem;
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.4);
  border-radius: 2rem;
  margin-bottom: 10rem;

  h2 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.8rem;
    text-align: justify;
    border-bottom: 1px solid;
    margin-bottom: 4rem;
  }
`
