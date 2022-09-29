import styles from '../studentitem/studentitem.css'
import { useState } from 'react';
import Studenteditor from '../studenteditor/studenteditor';

function Studentitem(props) {

    const [showEditor, setShowEditor] = useState(false);

    const toggleShowEditor = () =>{
        setShowEditor(!showEditor);
    }

    return(
        <div className=" container rounded-3 border border-2 border-dark my-3 bg-light ">
            <h2 id='name'>{props.student.firstname} {props.student.lastname}</h2>
            <h4 id='age'>{props.student.age}, {props.student.gender}</h4>
            <img className="img-thumbnail" src={props.student.image} alt={props.student.firstname + "'s photo"} ></img><br/>
            <button className="m-2 mt-2 btn btn-dark" onClick={toggleShowEditor}>Edit</button><span> </span>
            <button className="m-2 mt-2 btn btn-dark" onClick={props.ondelete}>Delete</button>

            {showEditor && 
            <Studenteditor onedit={(editted) => props.onedit(editted)}
             student={props.student}></Studenteditor>}
        </div>
    )
}

export default Studentitem;