import React from 'react';
import './Styles.scss';

const WeeklyCal = () => {

    return (
    <div class="weekly-cal-wrapper">
        <div class= "weekly-cal-header">Weekly Cal Header</div>
        <div class="weekly-calendar">
            <div class="cal-grid">
                <div class="cal-grid-morning">
                    <div class="cal-grid-6am"></div>
                    <div class="cal-grid-7am"></div>
                    <div class="cal-grid-8am"></div>
                    <div class="cal-grid-9am"></div>
                    <div class="cal-grid-10am"></div>
                    <div class="cal-grid-11am"></div>
                </div>
                <div class="cal-grid-afternoon">
                    <div class="cal-grid-12pm"></div>
                    <div class="cal-grid-1pm"></div>
                    <div class="cal-grid-2pm"></div>
                    <div class="cal-grid-3pm"></div>
                    <div class="cal-grid-4pm"></div>
                    <div class="cal-grid-5pm"></div>
                    <div class="cal-grid-6pm"></div>
                </div>
                <div class="cal-grid-evening">
                    <div class="cal-grid-7pm"></div>
                    <div class="cal-grid-8pm"></div>
                    <div class="cal-grid-9pm"></div>
                    <div class="cal-grid-10pm"></div>
                </div>
                <div class="cal-grid-sunday"></div>
                <div class="cal-grid-monday"></div>
                <div class="cal-grid-tuesday"></div>
                <div class="cal-grid-wednesday"></div>
                <div class="cal-grid-thursday"></div>
                <div class="cal-grid-friday"></div>
                <div class="cal-grid-saturday"></div>
            </div>
            <div class="time from-6am">6am</div>
            <div class="time from-7am">7am</div>
            <div class="time from-8am">8am</div>
            <div class="time from-9am">9am</div>
            <div class="time from-10am">10am</div>
            <div class="time from-11am">11am</div>
            <div class="time from-noon">Noon</div>
            <div class="time from-1pm">1pm</div>
            <div class="time from-2pm">2pm</div>
            <div class="time from-3pm">3pm</div>
            <div class="time from-4pm">4pm</div>
            <div class="time from-5pm">5pm</div>
            <div class="time from-6pm">6pm</div>
            <div class="time from-7pm">7pm</div>
            <div class="time from-8pm">8pm</div>
            <div class="time from-9pm">9pm</div>
            <div class="time from-10pm">10pm</div>

            <div class="weekday"></div>
            <div class="weekday sunday">Sunday</div>
            <div class="weekday monday">Monday</div>
            <div class="weekday tuesday">Tuesday</div>
            <div class="weekday wednesday">Wednesday</div>
            <div class="weekday thursday">Thursday</div>
            <div class="weekday friday">Friday</div>
            <div class="weekday saturday">Saturday</div>



            {/* <!-- Events --> */}
            <div class="event-group thursday from-3pm to-5pm">
                <div class="event">Meeting</div>
                <div class="event">Meeting</div>
            </div>
            <div class="event-group friday from-6pm to-8pm">
                <div class="event">Meeting</div>
                <div class="event">Meeting</div>
            </div>
            <div class="event-group monday from-10am to-1pm">
                <div class="event">class</div>
            </div>
 
        </div>
    </div>
    
    )
}

export default WeeklyCal;

       {/* <div class="event monday from-10am to-noon">Meeting</div>
        <div class="event wednesday from-9am to-11am">Meeting</div>
        
        <div class="event" data-weekday="thursday" data-start="2pm" data-end="6pm">Long meeting</div>
        <div class="event" data-weekday="friday" data-start="6pm" data-end="7pm">Zoom Meeting</div>  */}