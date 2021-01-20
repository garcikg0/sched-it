import React from 'react';
import './Styles.scss';

const WeeklyCal = () => {

    return (
    <div class="weekly-cal-wrapper">
    <div class="weekly-cal-toolbar">Weekly Cal Header Here</div>
    <div class="weekly-schedule">
        <div class="calendar-header">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tues</div>
            <div>Weds</div>
            <div>Thurs</div>
            <div>Fri</div>
            <div>Sat</div>
        </div>
        <div class="calendar-week">
            <div class="calendar-day">1</div>              
            <div class="calendar-day">2</div>
            <div class="calendar-day">3</div>
            <div class="calendar-day">4</div>
            <div class="calendar-day">5</div>
            <div class="calendar-day">6</div>
            <div class="calendar-day">7</div>
        </div>          
    </div>
    <div class="weekly-cal-footer">Weekly Cal Footer Here</div>
    </div>  
    )
}

export default WeeklyCal;