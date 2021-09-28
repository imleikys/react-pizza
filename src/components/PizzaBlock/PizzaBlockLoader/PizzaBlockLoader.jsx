import React from "react"
import ContentLoader from "react-content-loader"

const PizzaBlockLoader = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 455"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="113" r="116" /> 
    <rect x="25" y="241" rx="5" ry="5" width="224" height="29" /> 
    <rect x="0" y="283" rx="5" ry="5" width="280" height="74" /> 
    <rect x="0" y="375" rx="5" ry="5" width="118" height="31" /> 
    <rect x="162" y="371" rx="5" ry="5" width="118" height="39" />
  </ContentLoader>
)

export default PizzaBlockLoader;