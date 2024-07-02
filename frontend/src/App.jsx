import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTODO} from '../component/Createtodo'
import {UpdateTODO }  from '../component/Updatetodo'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <CreateTODO></CreateTODO>
      <UpdateTODO></UpdateTODO>

    </div>
  )
}

export default App
