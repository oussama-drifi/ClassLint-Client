import React from 'react';
import './WeeklySchedule.css';

const WeeklySchedule = ({ data, onSlotClick, selectedSlot }) => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const timeSlots = ['8:30-10:30', '10:30-12:30', '14:30-16:30', '16:30-18:30'];
    const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className="weekly-schedule">
            {/* Schedule Header */}
            <div className="schedule-header">
                <div className="header-cell group-header">Groups / Time</div>
                
                {
                    dayLabels.map((day, index) => (
                        <div key={day} className="day-header">
                            <div className="day-label">{day}</div>
                            <div className="time-slots-header">
                                {timeSlots.map(time => (
                                    <div key={time} className="time-slot-label">{time}</div>
                                ))}
                            </div>
                        </div>
                        )
                    )
                }
            </div>

        {/* Schedule Body */}
        <div className="schedule-body">
            {data.groups.map(group => (
            <div key={group.id} className="group-row">
                <div className="group-label">{group.name}</div>
                
                {days.map(day => (
                <div key={`${group.id}-${day}`} className="day-cell">
                    <div className="sessions-container">
                    {timeSlots.map((time, sessionIndex) => {
                        const subject = data.schedule[group.id]?.[day]?.[sessionIndex] || '';
                        const isSelected = selectedSlot && 
                        selectedSlot.groupId === group.id && 
                        selectedSlot.day === day && 
                        selectedSlot.sessionIndex === sessionIndex;
                        
                        return (
                        <div
                            key={`${group.id}-${day}-${sessionIndex}`}
                            className={`session-slot ${subject ? 'has-subject' : 'empty'} ${isSelected ? 'selected' : ''}`}
                            onClick={() => onSlotClick(group.id, day, sessionIndex)}
                            title={subject || 'Click to add subject'}
                        >
                            <div className="session-time">{time}</div>
                            <div className="session-subject">{subject}</div>
                        </div>
                        );
                    })}
                    </div>
                </div>
                ))}
            </div>
            ))}
        </div>
        </div>
    );
};

export default WeeklySchedule;