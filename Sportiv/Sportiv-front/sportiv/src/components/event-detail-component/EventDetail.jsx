import React from 'react';
import  { useState, useEffect} from 'react';
import './EventDetail.css';
import eventStore from '../../stores/EventsStore';
import { loadEvents } from '../../actions/EventDetailAction';

function EventDetail(props){

    const [events, setEvents] = useState(eventStore.getEvents());
    const [eventId, setEventId] = useState(+props.match?.params?.eventId)
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventStart, setEventStart] = useState('');
    const [eventFinish, setEventFinish] = useState('');
    const [eventPeople, setEventPeople] = useState('');
    const [eventLevel, setEventLevel] = useState('');
    
    

	useEffect(() => {
		eventStore.addChangeListener(onChange);
		if (events.length === 0) {
            console.log('ESTOY EN EL USEEFECT LOAD EVENTS', eventId )
            loadEvents();
            
		} else if (eventId) {            
			const event = eventStore.getEventById(eventId);
			if (event) {
                setEventId(event.id)
                setEventTitle(event.title);
                setEventDate(event.date);
                setEventDescription(event.description);
                setEventStart(event.start);
                setEventFinish(event.finish);
                setEventPeople(event.people);
                setEventLevel(event.level);
			}
		} else {
            
        }
		return () => eventStore.removeChangeListener(onChange);
	}, [events.length, props.match.params.eventId, eventId ]);

	function onChange() {
		setEvents(eventStore.getEvents());
    }
    
    
    return (
        <div className="desktop__container flex__column">
            <div className="title__container flex__row">
                <p>{eventTitle}</p>
                <p>Date <br/>{eventDate}</p>
            </div>
            <img className="image__containter"  src="https://i.ytimg.com/vi/UMoVKW-Yhjw/hqdefault.jpg"/>
            <div className="description__container">
                <h2>Description</h2>
                <p>{eventDescription}</p>
            </div>
            <div className="info__container display__row">
                <p>Start at <br/>{eventStart}</p>
                <p>26 <br/>{eventPeople}</p>
                <p>Finish at <br/>{eventFinish}</p>
            </div>
            <div className="inscription__container">
                <p>Level <br/> {eventLevel}</p>
                <button className="inscription__button">I'm in!</button>
            </div>
        </div>
    )
}

export default EventDetail;