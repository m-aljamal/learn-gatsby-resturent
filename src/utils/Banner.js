import React from "react"
import styled from "styled-components"
import { styles } from "../utils"
function Banner({ title, subtitle, children }) {
  return (
    <BannerRapper>
      <h1 className="title">{title}</h1>
      <h1 className="subtitle">{subtitle}</h1>
      {children}
    </BannerRapper>
  )
}

export { Banner }

const BannerRapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: "0.75rem" })}
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    font-size: 1.5rem;
    text-transform: uppercase;
    
  }
`
