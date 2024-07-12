import './App.css'
import {Route,Routes} from 'react-router-dom'
import Film from './componats/Film'
import View from './componats/View'
import Add from './componats/Add'

function App() {

  return (
    <>
    <View/>
    <Routes>
      <Route path='/' element={<Film/>}> </Route>
      <Route path='/add' element={<Add/>}> </Route>
   </Routes>
       </>
  )
}

export default App