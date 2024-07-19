import { useState, useEffect } from 'react'
import axios from 'axios'
import TaskItem from './components/TaskItem'

interface taskProps {
  id:number,
	task_text:string, 
	task_status:boolean, 
	taks_created_at:string,
}

function App() {
  const [items, setItems] = useState(Array<taskProps>)
  const [task_text, setTaskText] = useState("")
  const DjangoAPI = "http://127.0.0.1:8000/"
  useEffect(() => {
    axios.get(DjangoAPI).then(
      response => setItems(response.data)
    ).catch(error => console.log("Error Founded :",error))
  }, []) 

  useEffect(() => {
    axios.get(DjangoAPI).then(
      response => setItems(response.data)
    ).catch(error => console.log("Error Founded :",error))
  },[items])
  function handleTaskTextChange(new_task_text:string){
    setTaskText(new_task_text)
  }
  
  function addTask(new_task_text:string){
    
    axios.post(DjangoAPI, {task_text:new_task_text,task_status:false}).then(
      (response)=>{
        setTaskText(new_task_text)
        
        console.log('Updated at:', response.data)
    }
    ).catch(error => console.log("error when updating new task :",error.message))
    
  }

  

  return (
      <div className='flex flex-col items-center justify-center min-h-screen border-2 border-black'>
        <div className=''>
          <input 
            type="text" 
            placeholder='Buy Milk'
            value={task_text} 
            onChange={event => handleTaskTextChange(event.target.value)}
            className='p-1 m-1 text-center border-2 border-black rounded'
            />
          <input 
            type="button" 
            value="Add"
            onClick={()=>addTask(task_text)}
            className='px-3 bg-blue-400 border-2 border-blue-400 rounded-md hover:bg-green-400 hover:border-green-400'
            />
        </div>
        <div className=''>
          {items.length != 0 && items.map((item:any) => (
            <TaskItem
              key={item.id}
              id={item.id}
              task_text={item.task_text}
              task_status={item.task_status}
              taks_created_at={item.taks_created_at}
              items={items}
              setItems={setItems}
              />
          ))}
        </div>
      </div>
  )
}

export default App
