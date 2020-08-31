import React from 'react'
import './EventDetail.css'

function EventDetail(){
    return (
        <div className="desktop__container flex__column">
            <div className="title__container flex__row">
                <p>Downhill morning</p>
                <p>Date <br/>05/09/2020</p>
            </div>
            <img className="image__containter"  src="https://i.ytimg.com/vi/UMoVKW-Yhjw/hqdefault.jpg"/>
            <div className="description__container">
                <h2>Description</h2>
                <p>We are going to ride Tibidabo mountain together, hace fun and share our passion! Don't forget your helmet and protections!</p>
            </div>
            <div className="info__container display__row">
                <p>Start at <br/> 9:00</p>
                <p>26 <br/>People</p>
                <p>Finish at <br/> 14:00</p>
            </div>
            <div className="inscription__container">
                <p>Level <br/> Mid/Advanced</p>
                <button className="inscription__button">I'm in!</button>
            </div>
        </div>
    )
}

export default EventDetail;