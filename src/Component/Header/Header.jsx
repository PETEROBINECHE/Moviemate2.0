import "./Header.css"

const Header = () => {
  return (
    <>
      <div className="headercontainer">
        <div className="headercontainerrapper">
            <div className="headertext">
                <p>MovieMate2.0</p>
            </div>
            <div className="headerlink">
                <span className="headerlinkline">Home</span>
                <span className="headerlinkline">Movies</span>
                <span className="headerlinkline">TV-Series</span>
            </div>
            <div className="headerseachrapper">
                <div className="headerseach">
                   <div className="basil--search-solid">
                    
                   </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
