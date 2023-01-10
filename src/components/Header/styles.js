import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.4);
`

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
`

export const Logo = styled.img`
  width: 25rem;
  margin: 1.5rem;
  padding-top: 1rem;
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  padding-left: 10rem;
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 70rem;
  padding-inline: 10rem;
`

export const SubHeader = styled.nav`
  display: flex;
  align-items: center;
  height: 3.2rem;
  background-color: #242424;
  color: white;
  font-size: 3rem;
  font-weight: 300;
  padding-top: 0.7rem;
  padding-left: 0.7rem;
`
