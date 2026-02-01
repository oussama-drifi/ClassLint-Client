// import React, { useState } from 'react';
// import './App.css';
// import WeeklySchedule from './components/WeeklySchedule';

// function App() {
//   // Initial empty schedule data for 7 groups
//   const initialScheduleData = {
//     groups: [
//       { id: 1, name: 'Group 1' },
//       { id: 2, name: 'Group 2' },
//       { id: 3, name: 'Group 3' },
//       { id: 4, name: 'Group 4' },
//       { id: 5, name: 'Group 5' },
//       { id: 6, name: 'Group 6' },
//       { id: 7, name: 'Group 7' }
//     ],
//     schedule: {
//       1: {
//         // Group 1 schedule
//         monday: ['Math', 'Physics', 'English', 'Chemistry'],
//         tuesday: ['Physics', 'Math', 'Biology', 'History'],
//         wednesday: ['English', 'Chemistry', 'Math', 'Physics'],
//         thursday: ['Math', 'Biology', 'History', 'English'],
//         friday: ['Physics', 'Chemistry', 'Math', 'Biology'],
//         saturday: ['History', 'English', 'Physics', 'Math']
//       },
//       2: {
//         // Group 2 schedule (partially filled)
//         monday: ['Physics', 'Math', '', ''],
//         tuesday: ['', 'English', 'Physics', ''],
//         wednesday: ['Math', '', 'English', 'Chemistry'],
//         thursday: ['', 'Physics', '', 'Math'],
//         friday: ['English', '', 'Physics', ''],
//         saturday: ['', 'Math', '', 'English']
//       },
//       // Groups 3-7 will have empty schedules initially
//       3: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [] },
//       4: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [] },
//       5: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [] },
//       6: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [] },
//       7: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [] }
//     }
//   };

//   const [scheduleData, setScheduleData] = useState(initialScheduleData);
//   const [selectedSlot, setSelectedSlot] = useState(null);

//   const handleSlotClick = (groupId, day, sessionIndex) => {
//     setSelectedSlot({ groupId, day, sessionIndex });
//     console.log(`Selected: Group ${groupId}, ${day}, Session ${sessionIndex + 1}`);
//   };

//   const handleSubjectChange = (subject) => {
//     if (selectedSlot) {
//       const { groupId, day, sessionIndex } = selectedSlot;
//       const newScheduleData = { ...scheduleData };
//       const daySchedule = [...(newScheduleData.schedule[groupId][day] || [])];
      
//       // Ensure array has 4 slots
//       while (daySchedule.length < 4) daySchedule.push('');
      
//       daySchedule[sessionIndex] = subject;
//       newScheduleData.schedule[groupId][day] = daySchedule;
      
//       setScheduleData(newScheduleData);
//       setSelectedSlot(null);
//     }
//   };

//   return (
//     <div className="App">
//       <WeeklySchedule 
//         data={scheduleData}
//         onSlotClick={handleSlotClick}
//         selectedSlot={selectedSlot}
//       />
      
//       {selectedSlot && (
//         <div className="subject-editor">
//           <h3>Edit Subject</h3>
//           <p>Group {selectedSlot.groupId}, {selectedSlot.day}, Session {selectedSlot.sessionIndex + 1}</p>
//           <div className="subject-options">
//             {['Math', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography', 'Art', 'Music', 'PE'].map(subject => (
//               <button 
//                 key={subject}
//                 onClick={() => handleSubjectChange(subject)}
//                 className="subject-btn"
//               >
//                 {subject}
//               </button>
//             ))}
//             <button 
//               onClick={() => handleSubjectChange('')}
//               className="subject-btn clear-btn"
//             >
//               Clear
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



function TableSchedule() {
    return (
    <div className='table-wrapper'>
      <table className='schedule-table'>
        <thead>
          <tr>
            <th rowSpan={2}></th>
            <th colSpan={4}>Monday</th>
            <th colSpan={4}>Tuesday</th>
            <th colSpan={4}>Wednesday</th>
            <th colSpan={4}>Thursday</th>
            <th colSpan={4}>Friday</th>
            <th colSpan={4}>Saturday</th>
          </tr>
          {/* <tr>
            <th>8:30 à 10:30</th>
            <th>10:30 à 12:30</th>
            <th>14:30 à 16:30</th>
            <th>16:30 à 18:30</th>
            <th>8:30 à 10:30</th>
            <th>10:30 à 12:30</th>
            <th>14:30 à 16:30</th>
            <th>16:30 à 18:30</th>
            <th>8:30 à 10:30</th>
            <th>10:30 à 12:30</th>
            <th>14:30 à 16:30</th>
            <th>16:30 à 18:30</th>
            <th>8:30 à 10:30</th>
            <th>10:30 à 12:30</th>
            <th>14:30 à 16:30</th>
            <th>16:30 à 18:30</th>
            <th>8:30 à 10:30</th>
            <th>10:30 à 12:30</th>
            <th>14:30 à 16:30</th>
            <th>16:30 à 18:30</th>
            <th>8:30 à 10:30</th>
            <th>10:30 à 12:30</th>
            <th>14:30 à 16:30</th>
            <th>16:30 à 18:30</th>
          </tr> */}
        </thead>
        <tbody>
          {/* i will render this for each group */}
          {/* this example if dor 2 groups and there will be more */}
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 1</td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* there are four sessions a day */}
            {/* empty slots indicates no session for that group */}
            <td>Groupe 2</td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">Chemistry</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">English</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Physics</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td><span className="session-chip physics">Geography</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><span className="session-chip physics">Frensh</span></td>
            <td></td>
            <td><span className="session-chip physics">Math</span></td>
            <td><span className="session-chip physics">Math</span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// actual App



import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import { useState } from 'react'
import './App.css'

import SideBar from './components/SideBar'
import Sommaire from'./pages/Sommaire'
import Emploi from './pages/Emploi'
import Settings from './pages/Settings'
import Archive from './pages/Archive'


function Layout() {
  return (
    <div className='content'>
      <Outlet />
    </div>
  )
}
function App() {
  
  return (
    <>
      <Router>
        <div className="app">
          <SideBar />
          <Routes>
            <Route path="/Gestion-Emploi-Temps" element={<Layout />} >
              <Route index element={<Sommaire />} />
              <Route path="sommaire" element={<Sommaire />} />
              <Route path="emploi" element={<Emploi />} />
              <Route path="archive" element={<Archive />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App