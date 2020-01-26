import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {PageHeader, Banner} from '../utils'
import menuImag from '../images/bcg/menuBcg.jpeg'
const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={menuImag}>
        <Banner title='menu' subtitle="let's dig in ">

        </Banner>
    </PageHeader>
  </Layout>
)

export default MenuPage
