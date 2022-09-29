import { useState } from "react";
import'bootstrap/dist/css/bootstrap.css';


function Studenteditor(props){

    const [editted, setEditted] = useState(props.student);

    const onChangeHandler = (e) =>{
        let newItem = {...editted};
        newItem[e.target.name] = e.target.value;
        setEditted(newItem);
    }

    return(
        <div>
            <h1>Edit Page</h1>
            First name: <input className=" py-3 form-control shadow" type="text" name='firstname'
            value={editted.firstname} onChange={onChangeHandler}></input><br/>
            Last name: <input className=" py-3 form-control shadow" type="text" name='lastname'
            value={editted.lastname} onChange={onChangeHandler}></input><br/>
            Age: <input className=" py-3 form-control shadow" type="number" name='age'
            value={editted.age} onChange={onChangeHandler}></input><br/>
            Male: <input className="form-check-input" type="radio" id="male" name='gender'
            value="male" onChange={onChangeHandler}></input><span> </span>
            Female: <input className="form-check-input" type="radio" id="female" name='gender'
            value="female" onChange={onChangeHandler}></input><br/>
            Photo: <input className=" py-3 form-control shadow" type="text" name='image'
            value={editted.image} onChange={onChangeHandler} placeholder="enter photo url"></input><br/>
            <button className="m-2 mt-2 btn btn-dark" onClick={() => props.onedit(editted)}>Update</button>
        </div>
    )
}

export default Studenteditor;