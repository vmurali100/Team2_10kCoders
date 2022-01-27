export function getAllStudents(){
    return{
        type:"GET_ALL_STUDENTS"
    }
}

export function deleteStudent(std){
    return{
        type:"DEL_STUDENT",
        payload:std
    }
}