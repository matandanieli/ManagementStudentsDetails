function StudentsService() {

    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const STUDENTS_ROUTE = process.env.REACT_APP_STUDENTS_ROUTE;
    const serverURL = SERVER_URL + "/" + STUDENTS_ROUTE;


    const getItems = () => {
        return fetch(serverURL)
        .then(response => response.json())
        .catch(error => {
            alert("Failed to get data, please try again")
        })
    }

    const updateItem = (student) => {
        return fetch(serverURL + "/" + student.id,
        {
            method: 'PUT', 
            body: JSON.stringify(student),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            if (response.ok){
            response.json()}
            else {
                throw new Error(response.statusText);
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    const deleteItem = (id, students) => {
        return fetch(serverURL + "/" + id,
        {
        method: 'DELETE', 
        body: JSON.stringify(students),
        headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
    }

    const addItem = (student) => {
        return fetch(serverURL,
        {
            method: 'POST',
            body: JSON.stringify(student),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => response.json())
    }


    return {
        getItems: getItems,
        updateItem: updateItem,
        deleteItem: deleteItem,
        addItem: addItem
    }
}

export default StudentsService;