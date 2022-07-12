import { Link } from 'react-router-dom'

const HomeTitle = () => {
  return (

  <div className = "menu-title">
        <div className = "menu-title__title1">LIMITED HOODIES COLLECTION</div>
        <div className = "menu-title__title2">Buy it now baibe, we are trend</div>
        <div className = "menu-title__button"><Link to = "/products" >SHOP NOW</Link></div>
    </div>)
}

export default HomeTitle
