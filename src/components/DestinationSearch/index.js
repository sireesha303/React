import './index.css'
import DestinationItem from '../DestinationItem'
import { Component } from 'react/cjs/react.production.min'


class DestinationSearch extends Component{
  state = {userSearchInput:""}

  onChangeSearchInput = (event)=>{
    this.setState({userSearchInput:event.target.value})
  }


  render(){
    const {userSearchInput} = this.state
    const {destinationsList} = this.props
    const lowerCasedUserSearchInput = userSearchInput.toLowerCase();
    
    const searchedList = destinationsList.filter(eachitem =>{
      const destinationName = eachitem.name.toLowerCase();
      return(destinationName.includes(lowerCasedUserSearchInput))
      })

    return(
      <div className="bg-container">
      <h1 className="heading">Destination Search</h1>
      <div className='search-input-container'>
        <input type="search" placeholder=' Search' onChange={this.onChangeSearchInput} className='search-input-element'/>
        <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search" className='search-img'/>
      </div>
      
      {<ul className="destination-items-container">
        {searchedList.map(eachDestination => (
            <DestinationItem
            destination={eachDestination}
            key={eachDestination.id}
          />
        ))}
      </ul>}
    </div>
    )
  }
}



export default DestinationSearch
