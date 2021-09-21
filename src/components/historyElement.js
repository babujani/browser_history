import './historyElement.css'

const HistoryElement = props => {
  const {historyItem, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem

  const deleteAHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item-container">
      <p className="time">{timeAccessed}</p>

      <div className="item-container">
        <div className="display-text">
          <img className="icon" src={logoUrl} alt="domain logo" />

          <div className="details-text">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>

        <button
          testid="delete"
          className="button"
          type="button"
          onClick={deleteAHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryElement
