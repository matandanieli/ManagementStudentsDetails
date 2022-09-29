import { useState } from "react";

function Studentadd(props) {
    const [student, changeStudent] = useState(
        {
            id: 0,
            firstname:'',
            lastName: '',
            age: 0,
            gender: 'male',
            image: ''
        }
    );

    const addStudentHandler = (e) => {
        let tmpStudent = {...student};
        tmpStudent[e.target.name] = e.target.value;
        changeStudent(tmpStudent);
    }


    return(
        <div>
                <h1>Add Section</h1>
            First name: <input className=" py-3 form-control shadow" type="text" name="firstname"
            value={student.firstname || ""} onChange={addStudentHandler}></input><br/>
            Last name: <input className=" py-3 form-control shadow" type="text" name="lastname"
            value={student.lastname || ""} onChange={addStudentHandler}></input><br/>
            Age: <input className=" py-3 form-control shadow" type="number" name="age"
            value={student.age || ""} onChange={addStudentHandler}></input><br/>
            Male: <input className="form-check-input" type="radio" id="male" name="gender"
            value="male" onChange={addStudentHandler}></input><span> </span>
            Female: <input className="form-check-input" type="radio" id="female" name="gender"
            value="female" onChange={addStudentHandler}></input><br/>
            Photo: <input className=" py-3 form-control shadow" type="text" name="image"
            value={student.image || ""} onChange={addStudentHandler}></input><br/>
            <button className="m-2 mt-2 btn btn-dark" onClick={() => props.addStudent(student)}>Add</button>
            </div>
    );
}
export default Studentadd;