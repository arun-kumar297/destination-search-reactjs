// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachName =>
      eachName.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            value={searchInput}
            placeholder="Search"
            className="search-input-element"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul>
          {searchResult.map(each => (
            <DestinationItem key={each.id} cardDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
