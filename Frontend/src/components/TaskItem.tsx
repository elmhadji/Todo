import { useState } from "react"
import axios from "axios"

interface itemsProps {
	id:number,
	task_text:string, 
	task_status:boolean, 
	taks_created_at:string, 
}

interface TaskProps {
	id:number,
	task_text:string, 
	task_status:boolean, 
	taks_created_at:string, 
	items:Array<itemsProps>,
	setItems:any
}

export default function TaskItem(task:TaskProps){
	const [task_status,setTaskState] = useState(task.task_status)
	const [task_text,setTaskText] = useState(task.task_text)

	function handleTaskTextChange(new_task_text:string){
		axios.put(`http://127.0.0.1:8000/${task.id}/`, {task_text:new_task_text}).then(
			(response)=>{
				setTaskText(new_task_text)
				console.log('Updated at:', response.data)
		}
		).catch(error => console.log("error when updating new task :",error.message))
	}

	function handleTaskStateChange(new_task_state:boolean){
		console.log(new_task_state)
		axios.put(`http://127.0.0.1:8000/${task.id}/`, {task_text:task_text ,task_status:new_task_state}).then(
			(response)=>{
				setTaskState(new_task_state)
				console.log('Item Updated is:', response.data)
		}
		).catch(error => console.log("error when updating new task :",error.message))
	}
	
	function deleteTask(){
		axios.delete(`http://127.0.0.1:8000/${task.id}/`,).then(
			(response)=>{
				let new_items = task.items.filter(item=>item.id!=task.id)
				task.setItems(new_items)
				console.log('Item Deleted is :', response.data)
		}
		).catch(error => console.log("error when updating new task :",error.message))
	}

	return (
		<div className="m-2 ">
			<input
				type="text"
				value={task_text}
				onChange={ event=>handleTaskTextChange(event.target.value)}
				className="p-1 m-1 text-center border-2 border-black rounded"
				/>
			<input 
				type="checkbox" 
				checked={task_status}
				onChange={event => handleTaskStateChange(event.target.checked)}
				/>
			<input 
				type="button" 
				value="Delete"
				onClick={deleteTask}
				/>
		</div>
	)

}