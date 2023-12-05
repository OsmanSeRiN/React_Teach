import {useState} from 'react';
import "./Form.css"

function Form({addItems,getItems}) {
    const [formInput,setFormInput] = useState({})
    let param = 0;
    const onChangeForm = (e) =>{
         param = param + 1;
         setFormInput({...formInput,[e.target.name]:e.target.value,Params:Math.random(),isSelect:false})

      }

    const formSubmit = (e) => {
        if(formInput.TodoInput === ""){
            return false
         }
       e.preventDefault()
       addItems([...getItems,formInput])
       //console.log(formInput)

    }


   return (
    <div>
        <form name='form' onSubmit={formSubmit}>
            <input className='txtBox' placeholder='Add' name='TodoInput' onKeyUp={onChangeForm} ></input>
        </form>
    </div>
   )
}

export default Form;
