import React  from 'react';

function APImap({city , street}){
    function urlMap(){
        const key = 'AIzaSyBPsTZZ-9hrU02hJOjG5YZbVGsTsW2KZoA';
        const url  = `https://www.google.com/maps/embed/v1/place?key=${key}&q=${city},${street}&zoom=15`;
        return url;

    }
    return(
        <iframe
        title="google-map"
        className='map'
        frameBorder="0" 
        src={`${urlMap()}`} allowFullScreen>
        </iframe>
    )

}

export default APImap;

