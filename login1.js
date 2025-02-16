function Uservalidations(id)
{
    let x=/^[A-Za-z]+$/
    if(id.value!=x)
        alert("Username is Invalid");
}
function password_validations(id){
    if(id.value!=/^[A-Za-z0-9@&$]+$/)
        alert("Invalid Password");
}
