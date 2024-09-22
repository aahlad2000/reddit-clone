import './Header.css'

function Header() {
  return (
    <>
    <div>
      <div className="reddit-logo">
        <div>
          <link href="/assets/reddit-logo.svg" />
          <span id='reddit-text'>reddit</span>
        </div>
      </div>
      <div className="search-bar"></div>
      <div className="get-app"></div>
      <div className="log-in"></div>
      <div className="other-options"></div>
    </div>
    </>
  )
}

export default Header
