import React,{useState} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {TbEdit} from 'react-icons/tb'
import TodoForm from './TodoForm';
import {VscPassFilled} from 'react-icons/vsc'
 const Todo = ({todos,completeTodo,removeTodo,updateTodo,doneTodos}) => {
  const [edit,setEdit]= useState({
    id:null,
    value:''
  }); 
  const [isClicked, setIsClicked] = useState(false);

  const submitUpdate = value =>{
    updateTodo(edit.id,value);
    setEdit({
      id:null,
      value:''
    });
  };
  const clickedStyles = (todo) =>{
    doneTodos(
    todo.map((item)  => {
      if(item.id === todo.id)
        todo.textDecoration='line-through';
    })
    );
  };
  const handleClick = () => {
    setIsClicked(true);
  };
    
  
  if(edit.id){
    return <TodoForm edit ={edit} onSubmit ={submitUpdate}/>
  }
  return todos.map((todo,index)=>(
    <div className={todo.isComplete ? 'todo-row-complete':
     'todo-row'} key={index}>
      <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <VscPassFilled onClick={() => handleClick(todo)} style={isClicked ? clickedStyles : null} className='complete-icon'/>
        <AiOutlineCloseCircle 
onClick={()=>removeTodo(todo.id)} className='delete-icon'/>
        <TbEdit onClick={()=> setEdit({id:todo.id,value:todo.text})} className='edit-icon'/>
      </div>
     </div>
  ));
  };
export default Todo;