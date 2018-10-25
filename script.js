function nameCheck() {
    if (document.getElementById('nama').value === '') {
        document.getElementById('nama').classList.remove('is-valid')
        document.getElementById('nama').classList.add('is-invalid')
        return false;
    } else {
        document.getElementById('nama').classList.remove('is-invalid')
        document.getElementById('nama').classList.add('is-valid')
        return true;
    }
}

function nimCheck() {
    if (document.getElementById('nim').value === '') {
        document.getElementById('nim').classList.remove('is-valid')
        document.getElementById('nim').classList.add('is-invalid')
        return false;
    } else if(document.getElementById('nim').value.length < 8 || document.getElementById('nim').value.length > 8){
        document.getElementById('nim').classList.remove('is-valid')
        document.getElementById('nim').classList.add('is-invalid')
        return false;
    }else {
        document.getElementById('nim').classList.remove('is-invalid')
        document.getElementById('nim').classList.add('is-valid')
        return true;
    }
}

function alamatCheck() {
    if (document.getElementById('alamat').value === '') {
        document.getElementById('alamat').classList.remove('is-valid')
        document.getElementById('alamat').classList.add('is-invalid')
        return false;
    } else {
        document.getElementById('alamat').classList.remove('is-invalid')
        document.getElementById('alamat').classList.add('is-valid')
        return true;
    }
}

function submitCheck() {
    if 
        ((nameCheck() && nimCheck() && alamatCheck()) ||
        (alamatCheck() && nameCheck() && nimCheck()) ||
        (nimCheck() && nameCheck() && alamatCheck()) 
        ){
        alert("Form Succes");
    } else {
        alert("Periksa Dan Lengkapi Data");
    }
 
}
