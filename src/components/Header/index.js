import React, { useEffect } from "react"
import { Container, Header, Grid } from "./Components"
import SearchBox from "../SearchBox"
import NavItems from "../NavItems"
import NavItemsMobile from "../NavItemsMobile"
import Logo from "./Logo"
import MiniCart from "./MiniCart"
import Customer from "./Customer"

export default ({ categories }) => {
  const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768

  useEffect(() => {
    const el = isMobile() ? document.getElementById('navDesktop') : document.getElementById('navMobile')
    if(!!el) el.remove()
  }, [])

  return (
    <Container>
      <Header>
        <NavItemsMobile categories={categories} />
        <Logo />
        <SearchBox />
        <Grid>
          <Customer />
          <MiniCart />
        </Grid>
      </Header>
      <NavItems categories={categories} />
    </Container>
  )
}