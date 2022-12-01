import './index.css'

const TabItem = props => {
  const {tabDetails, UpdatedTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const OnClickTabId = () => {
    UpdatedTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={OnClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
