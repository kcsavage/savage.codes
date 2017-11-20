import React from 'react'
import './style.css';

const Portfolio = () => (
  <div>
    <h1>Portfolio</h1>
    <ul className='portfolioList'>
      { portfolioItems.map((item) => PortfolioItem(item)) }
    </ul>
  </div>
)

const PortfolioItem = (item) => (
  <li className='portfolioItem' key={ item.name }>
    <div>
      <h2 className='header'>{ item.name }</h2>
      <p className='brief'>{ item.brief }</p>
      <p className='description' dangerouslySetInnerHTML={{ __html: item.description  }} />
      <ul className='techTags'>
        { item.techTags.map((tag) => TagItem(tag)) }
      </ul>
    </div>
  </li>
)

const TagItem = (item) => (
  <li className='tagItem' key={item}>
    { item }
  </li>
)

export default Portfolio

const portfolioItems = [
  {
    name: 'Reckonator v2',
    brief: 'Warehouse management system for DTDO',
    techTags: ['javascript', 'meteor', 'mongodb', 'integration', 'API', 'aggregation', 'analytics', 'sqs', 'Heroku'],
    img: '',
    description:
    `Reckonator v2 allowed for a warehouse to line pack items for orders. Packers would 
    stand on a line of conveyor belts while order flowed by them. Reckonator displayed which items to put in orders 
    that were flowing past the packer. All information was updated in real time to all users of Reckonator. 
    <br/> <br/>
    Reckonator had a comprehensive insights dashboard that showed the speed at which items were flowing 
    through the system. It would allow managers to make adjustments to their configuration in real time 
    to keep orders flowing through the system at speed.`
  },
  {
    name: 'Lambda',
    brief: 'Large set of AWS lambda microservices',
    techTags: ['javascript', 'AWS', 'microservices', 'integration', 'postgres', 'kinesis'],
    img: '',
    description: `Lambda was used at Relay Foods and Door to Door Organics to process a kinesis based event stream. 
    Events were put on the stream by microservices and consumed by a lambda function to hit a Restful endpoint. 
    <br/><br/>
    Data crossed bounded contexts and separation of concerns by flowing through kinesis and lambda.`
  },
  {
    name: 'DTDO & Relay Foods Restful APIs',
    brief: 'Microservice & Restful API per bounded context',
    techTags: ['javascript', 'AWS', 'microservices', 'C#', 'F#', 'integration', 'postgres', 'API'],
    img: '',
    description: `Relay Foods had a monolithic MVC C# ASP.Net stack that was pulled apart into a discrete set of 
    microservices.
    <br/><br/>
    Each microservice was separated into its own area of concern, generally along business function. Microservices
    communicated with each other through AWS kinesis. These services processed hundreds to tens of thousands of 
    transactions per day.`
  },
  {
    name: 'Sprocket',
    brief: 'Inventory Control System/Internet of things for Non-Internet Things',
    techTags: ['javascript', 'meteor', 'mongodb', 'integration', 'skunkworks', 'barcodes'],
    img: '',
    description: `Sprocket was an ambitious project to add addressing space and smarts to non-internet things, like 
    soup cans or bags of coffee. 
    <br/><br/>
    Sprocket provided instructions to an inventory associate of where items should be placed in a warehouse based on
    their current location and the item they had in hand. It also allowed for items in a warehouse to be put away in a
    semi-random fashion. Items were later retrieved by pickers in the order in which they were put away to maintain
    product and stock freshness.`
  },
  {
    name: 'Reckonator',
    brief: 'Warehouse management system for Relay Foods',
    techTags: ['javascript', 'meteor', 'mongodb', 'integration', 'Heroku'],
    img: '',
    description: `Reckonator was a bulk pick and pick to order tool for Relay Foods. It provided pickers the ability to
    pick products for a given shelf or zone in the warehouse. All packers were able to see what was left to do in the 
    warehouse in real time. This provided the ability to swarm a given area of the warehouse if the packers in that section
    were behind.`
  },
  {
    name: 'Medallion/CryWolf',
    brief: 'Permitting Applications',
    techTags: ['C#', 'MVC', 'Web Services', 'javascript', 'WinForms', 'Android', 'SQL Server'],
    img: '',
    description: `Medallion and CryWolf are permitting software for use by city and county municipalities. The systems
    allow a variety of permits to be created and tracked through their lifecycle. They allow online payment of permit
    fees and penalties.
    <br/><br/>
    The systems each have an online portal that allows a permittee to apply, see the status of, and change details of 
    their permits.
    <br/><br/>
    Android applications were developed to allow permit inspectors in the field the ability to make notes and flag
    certain permits for review.
    `
  },
  {
    name: 'Knacked',
    brief: 'Social network for learning',
    techTags: ['javascript', 'meteor', 'mongodb', 'linux'],
    img: '',
    description: `Knacked, or Knack Education Network, was an online platform for learning. It was built using meteor.js
    and self-hosted. Knacked allowed users to specify a list of teachable skills they had and a list of skills they
    were interested in. It would then allow users to host or sign-up for classes they were interested in.
    <br/><br/>
    Knacked was a social connector where the real interaction happened offline.`
  },
  {
    name: 'Woolen Mills Neighborhood Association',
    brief: 'Website for a neighborhood association',
    techTags: ['CMS', 'WordPress', 'PHP', 'MySQL', 'Social Media'],
    img: '',
    description: `Charlottesville city neighborhood association website. Built using WordPress CMS so it is easy to update.
    Custom theme and PHP work for features such as mailing list signup.`
  },
  {
    name: `Crown C'ville`,
    brief: 'Website for a plaster contractor',
    techTags: ['CMS', 'WordPress', 'PHP', 'MySQL', 'Social Media'],
    img: '',
    description: `Greater Charlottesville area plaster and general contractor website. Has photo gallery and contact options.`
  },
  {
    name: 'Domains 420',
    brief: 'Website for re-selling parked marijuana themed domains',
    techTags: ['CMS', 'Drupal', 'PHP', 'MySQL', 'linux'],
    img: '',
    description: `Portfolio website for a set of domains that had marijuana themes with new TLDs. Custom PHP to allow for
    bidding on individual domain names. Custom routing from actual domain to bidding site. This portfolio was sold as a 
    whole with the website.`
  },
  {
    name: 'Eco Wood Floors',
    brief: 'Website for flooring contractor',
    techTags: ['CMS', 'WordPress', 'PHP', 'MySQL'],
    img: '',
    description: `Charlottesville area hardwood flooring contractor website. Had photo gallery and contact options.`
  }
];