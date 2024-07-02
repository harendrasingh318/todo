import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTODO} from '../component/Createtodo'
import {UpdateTODO }  from '../component/Updatetodo'
import { Todos } from '../component/Todos'
 
function App() {
  const [todos, settodos] = useState([])

  fetch("https://port3123-workspaces-ws-7zqdt.eu20.applicationstudio.cloud.sap/todos").then(async function(res){
  const json = res.json();
  settodos(json.todos)
  })

  return (
    <div>

      <CreateTODO></CreateTODO>
      <UpdateTODO></UpdateTODO>
      <Todos todos= {todos}></Todos>

    </div>
  )
}

export default App
