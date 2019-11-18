/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import ReactNotification from "react-notifications-component"
import Header from "../Header"
import Footer from "../Footer"
import { Main } from "./Components"
import "./layout.css"

const Index = ({ children, categories }) => {
  return (
    <>
      <ReactNotification />
      <Header categories={categories || []} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
  categories: PropTypes.array
}

export default Index
