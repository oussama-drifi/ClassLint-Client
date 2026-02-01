import { configureStore } from '@reduxjs/toolkit'
// import { ListeSimulationReducer } from './slices/listeSlice'

export const store = configureStore({
    reducer: {
        
    }
})


// // json i will receive from the server will be like this
// const data = [
//     {
//         group_name: "Groupe 1",
//         sessions: {
//             monday: {
//                 // array or object (not sure yet)
//                 s1: [] || {}, // 8:30 to 10:30
//                 s2: [] || {}, // 10:30 to 12:30
//                 s3: [] || {}, // 14:30 to 16:30
//                 s4: [] || {} // 16:30 to 18:30
//             },
//             tuesday: {
//                 s1: [] || {}, 
//                 s2: [] || {}, 
//                 s3: [] || {}, 
//                 s4: [] || {}
//             },
//             // so on so forth
//         }
//     }
//     // so on so forth for other groups
// ]

// // json response
// const data = [
//     {
//         groupId: 1,
//         groupName: "Groupe 1",
//         sessions: {
//         monday: [
//             null, 
//             {
//             subject: "Physics",
//             teacher: "Mr Ali",
//             room: "Lab 2"
//             },
//             null,
//             null
//         ],
//         tuesday: [
//             {
//             subject: "Math",
//             teacher: "Ms Sara"
//             },
//             {
//             subject: "Math",
//             teacher: "Ms Sara"
//             },
//             null,
//             null
//         ]
//         }
//     }
//     // other groups
// ];
