import {Component} from 'react'
import HistoryElement from './historyElement'
import './browserHistory.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    userHistoryList: 'initialHistoryList',
  }

  updateSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryItem = idDelete => {
    const {initialHistoryList} = this.props
    const updatedList = userHistoryList.filter(
      deleteItem => deleteItem.id !== idDelete,
    )
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchItemsList = initialHistoryList.filter(
      historyItem =>
        historyItem.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        historyItem.domainUrl.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="top-section">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-bar-container">
            <div className="input-bar search-icon">
              <img
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              className="input-bar input-text"
              onChange={this.updateSearch}
              value={searchInput}
            />
          </div>
        </div>
        <div className="main-section">
          <ul className="items-container">
            {searchItemsList.map(historyItems => (
              <HistoryElement
                key={historyItems.id}
                historyItem={historyItems}
                deleteHistory={this.deleteHistoryItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default BrowserHistory
