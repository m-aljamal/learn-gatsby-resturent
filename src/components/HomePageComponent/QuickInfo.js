import React from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

function QuickInfo(props) {
  return (
    <Section>
      <Title message="let us tell you" title="our mission" />
      <QuickInfoStyle>
        <p className="text">
          Do aute anim amet deserunt et duis proident ea duis adipisicing. Ad
          tempor do id ad id incididunt ullamco do ut eiusmod mollit ea
          reprehenderit ea. Ipsum dolore commodo ut nostrud commodo dolore
          laborum deserunt aute ipsum tempor eiusmod dolor. Irure est magna
          dolor dolore quis fugiat pariatur ipsum anim culpa deserunt fugiat
          minim. Sunt deserunt officia eiusmod voluptate laborum ad ad amet
          nulla reprehenderit. Quis excepteur reprehenderit reprehenderit velit
          velit. Adipisicing nisi consectetur dolor irure ut dolor id est esse
          laboris reprehenderit occaecat.
        </p>
        <Link to="/about" style={{textDecoration: 'none'}}>
          <SectionButton style={{margin: '2rem auto'}}>about</SectionButton>
        </Link>
      </QuickInfoStyle>
    </Section>
  )
}

export default QuickInfo

const QuickInfoStyle = styled.div`
width: 90%;
margin: 2rem auto ;
.text{
    line-height: 2rem;
    color:${styles.colors.mainGrey};
    word-spacing: 0.2rem;

}
@media (min-width: 768px){
    width: 70%
}
@media (min-width: 992px){
    width: 60%
}
`
