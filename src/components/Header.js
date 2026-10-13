function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 onClick={() => setCurrentPage('home')} className="logo">
         Explore Lesotho with ROY
        </h1>
        <nav className="nav">
          <button
            className={currentPage === 'home' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button
            className={currentPage === 'attractions' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentPage('attractions')}
          >
            Attractions
          </button>
          <button
            className={currentPage === 'enquiry' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentPage('enquiry')}
          >
            Enquiry
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;