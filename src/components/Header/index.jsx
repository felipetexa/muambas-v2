import React from 'react'
import { HeaderWrapper, HeaderDiv, Logo, UserInfo, SearchBar, SubHeader } from './styles'
import logo from '../../assets/logo.png';
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
    <HeaderWrapper>
      <HeaderDiv>
        <Logo src={logo}/>
        <SearchBar>
        <TextField
          id="search-bar"
          className="text"
          placeholder="Search..."
          size="small"
          fullWidth
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon fontSize='large' />
        </IconButton>
        </SearchBar>
        <UserInfo>
          <ShoppingCartOutlinedIcon fontSize='large' />
          <NavDropdown title={<AccountCircleOutlinedIcon fontSize='large'/>}id="nav-dropdown">
            {/* login form and logged options */}
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
          
        </UserInfo>
      </HeaderDiv>
      <SubHeader>
        <h2>All Products</h2>
        <h2>Computers</h2>
        <h2>Video Games</h2>
        <h2>Celphones</h2>
        <h2>Headsets</h2>
        <h2>Keyboards</h2>
     </SubHeader>
    </HeaderWrapper>
  )
}

export default Header