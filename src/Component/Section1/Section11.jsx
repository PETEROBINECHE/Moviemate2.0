import React from 'react'
import "./Section1.css"

const Section11 = () => {
    const topTrending = [
        {
        "title": "Trending Movie 1",
        "image": "https://placehold.co/300x450?text=Trending+Movie+1",
        "year": 2004,
        "rating": 6.5,
        "genre": "Action"
        },
        {
        "title": "Trending Movie 2",
        "image": "https://placehold.co/300x450?text=Trending+Movie+2",
        "year": 2004,
        "rating": 7.0,
        "genre": "Action"
        },
        {
        "title": "Trending Movie 3",
        "image": "https://placehold.co/300x450?text=Trending+Movie+3",
        "year": 2003,
        "rating": 8.8,
        "genre": "Action"
        },
        {
        "title": "Trending Movie 4",
        "image": "https://placehold.co/300x450?text=Trending+Movie+4",
        "year": 2025,
        "rating": 7.9,
        "genre": "Action"
        },
        {
        "title": "Trending Movie 5",
        "image": "https://placehold.co/300x450?text=Trending+Movie+5",
        "year": 2007,
        "rating": 6.8,
        "genre": "Action"
        },
        {
        "title": "Trending Movie 6",
        "image": "https://placehold.co/300x450?text=Trending+Movie+6",
        "year": 2010,
        "rating": 9.5,
        "genre": "Action"
        },
        {
        "title": "Trending Movie 7",
        "image": "https://placehold.co/300x450?text=Trending+Movie+7",
        "year": 2006,
        "rating": 7.1,
        "genre": "Action"
        }
    ]
  return (
    <>
       <div className="section1trending">
        <div className="section1trendingailen">
            <div className="trending_movie">
                <h2 className='trending_movietext'>Top Trending</h2>
                <div className='TrendingMovieline' ></div>
            </div>
            
            <div className="cardbody">
                <div className="carddetails">
                    <div className="carddetails2">
                        <div className="carddetails3">
                            <span className='carddetails3txet'>The Fantastic 4: First Steps</span>
                            <div className="cardsubdetails">
                                <span>2025</span>
                                <span className='cow'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512.5 190.4l-94.4 191.3-211.2 30.7 152.8 149-36.1 210.3 188.9-99.3 188.9 99.2-36.1-210.3 152.8-148.9-211.2-30.7z"></path><path d="M908.6 352.8l-253.9-36.9L541.2 85.8c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L370.3 315.9l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1L239 839.4a31.95 31.95 0 0 0 46.4 33.7l227.1-119.4 227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM665.3 561.3l36.1 210.3-188.9-99.2-188.9 99.3 36.1-210.3-152.8-149 211.2-30.7 94.4-191.3 94.4 191.3 211.2 30.7-152.8 148.9z"></path></svg> 7.3</span>
                                <div className="cardtype">
                                    <span className='cardtypesub'>movie</span>
                                </div>
                            </div>
                        </div>    
                    </div>    
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Section11
