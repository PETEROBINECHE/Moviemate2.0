import React from 'react'
import "./Herotext.css"


const Herotext = () => {
  return (
    <>
      <div className="herotextcontaner">
        <div className="herotext">
            <h1 className='moviename'>Ne Zha 2</h1>
            <div className="movieabout">
                <div className="movieabouticon">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMyAyMGgxOFY4SDN6bTYtMTBsNyA0bC03IDR6IiBvcGFjaXR5PSIwLjMiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOSAxMHY4bDctNHptMTItNGgtNy41OGwzLjI5LTMuMjlMMTYgMmwtNCA0aC0uMDNsLTQtNGwtLjY5LjcxTDEwLjU2IDZIM2MtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0ybTAgMTRIM1Y4aDE4eiIvPjwvc3ZnPg==" alt="Play icon" />
                </div>

                <div className="movieaboutrating">
                    <span className="rating-flex"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg> 7.3</span>
                </div>

                <div className="movieaboutchrat">
                    <span className='movieaboutchratline'>Action</span>
                    <span className='movieaboutchratline'>Adventure</span>
                    <span className='movieaboutchratline'>Animation</span>
                    <span className='movieaboutchratline'>Fantasy</span>
                </div>
            </div>
            <div className="movieaboutbio">
                A rebellious young boy, Ne Zha, is feared by the gods and born to mortal parents with wild, uncontrolled powers. Now he's faced with an ancient force intent on destroying humanity, he must grow up to become the hero the world needs.
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Herotext
