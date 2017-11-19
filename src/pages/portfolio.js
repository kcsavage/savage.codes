import React from 'react'
import Link from 'gatsby-link'

const portfolioItems = [
  { name: 'Reckonator v2', brief: 'Warehouse management system for DTDO' },
  { name: 'Sprocket', brief: 'Internet of things for Non-Internet Things' },
  { name: 'Reckonator', brief: 'Warehouse management system for Relay Foods' },
  { name: 'Medallion', brief: 'Permitting Application' },
  { name: 'Knacked', brief: 'Social network for learning' }
];
const Portfolio = () => (
  <div>
    <h1>Portfolio</h1>
    { portfolioItems.map((item) => PortfolioItem(item)) }
    <Link to="/">home</Link>
  </div>
)

const PortfolioItem = (item) => (
  <div key={ item.name }>
    <h2>{ item.name }</h2>
    <p>{ item.brief }</p>
  </div>
)

export default Portfolio
