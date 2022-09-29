import { useEffect, useState } from "react"
import Studentitem from '../studentitem/studentitem'
import styles from '../studentlist/studentlist.css'
import StudentAdd from '../studentadd/studentadd'
import StudentsService from "../../services/studentsService"
import { navigateTo } from "react-server"

function Studentlist() {

    const [students, setItems] = useState([])
    const studentService = StudentsService();

    useEffect(()=>{
        studentService.getItems()
        .then(data => setItems(data))
    })

    const onDeleteHandler= (id)=> {
        let updated = students.filter(s => s.id != id);
                studentService.deleteItem(id, updated)
                .then(data => setItems(data))
      }

      const [addStudent, setStudentAdd] = useState(false);

    function addToogle() {
        setStudentAdd(!addStudent);
    }

    const addStudentHandler = (student) => {
        let addStudents = [...students, student];
        studentService.addItem(student)
        .then(data => console.log(data));

        setStudentAdd(addStudents);
    }

    const onEditHandler = (student) => {
        let updated = students.slice();
        for (let index = 0; index < updated.length; index++){
            let element = updated[index];
            if (element.id == student.id){
            updated[index] = student;
            studentService.updateItem(updated[index])
            .then(data => console.log(data))
            setItems(updated);
            break;
            }
        }
    }


    return(
        <div>
            <div className='list'>
            <h1 className="h1">Students:</h1><br/>
            {Array.from(students).map(student => <Studentitem key={student.id} student={student}
            students={students} onedit={onEditHandler} 
            ondelete={()=>onDeleteHandler(student.id)}></Studentitem>)}
            </div>
            <button id="addbtn" className="m-2 mt-2 btn btn-dark" onClick={addToogle}>Add Student</button>
            {addStudent &&
            <StudentAdd addStudent={addStudentHandler}/>
            }
        </div>
    )
}

export default Studentlist;