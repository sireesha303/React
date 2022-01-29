import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {id, name, imgUrl} = destination

  return (
    <li className="destination-bg-container">
      <img
        src={imgUrl}
        alt="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
        className="img"
      />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
