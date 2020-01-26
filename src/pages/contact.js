import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {PageHeader, Banner} from '../utils'
import contactImg from '../images/bcg/contactBcg.jpeg'
const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={contactImg}>
    <Banner title='Contact us' subtitle='welcom to our resturant'>

    </Banner>
    </PageHeader>
  </Layout>
)

export default ContactPage
