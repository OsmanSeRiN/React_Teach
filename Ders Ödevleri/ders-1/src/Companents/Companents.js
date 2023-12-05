import {useState,useEffect} from 'react';
import Form from './Form/Form';
import List from './List/List';
import './Companents.css';

function Companents() {
    const [record,setRecord] = useState([]);

    useEffect(() => {
      console.log(record)
    },[record])

   return (
    <div className='boxToDo'>
        <div>
           <Form className="textBox" getItems={record} addItems={setRecord}/>
           <List className='' getListItems={record} setListItems={setRecord} />
        </div>
    </div>
   )
}

export default Companents;