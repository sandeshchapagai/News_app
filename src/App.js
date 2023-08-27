import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
export default function App() {
  return (
    <div>
      <Navbar/>
      <News
   pageSize="6"
      country="jp"
      category="business"
      />
      </div>
  )
}






// import React, { Component } from 'react'
// import Navbar from './components/Navbar'
// import News from './components/News'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import React from 'react'

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }


// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//         <Navbar/>
//         </Router>
//       <Switch>

//         <Route path='/about'> <News
//       pageSize="6"
//       country="us"
//       category="general"
//       /></Route>
//       </Switch>
//       </div>
//     )
//   }
// }
