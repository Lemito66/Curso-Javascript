function chequearEnBlanco(){
    if (document.getElementById('fname').value =="") {
        alert('porfavor ingresa tu nombre');
        document.getElementById('fname').style.borderColor="red";
        return false;
    }
}