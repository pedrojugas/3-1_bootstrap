console.log("Hello world");

//let btnRegister = document.getElementById("");
let btnRegister = document.querySelector("#btnRegister")

function registerUser(){

    let txtEmail = document.querySelector("#txtRegisterEmail");
    let txtName = document.querySelector("#txtRegisterName");
    let txtPassword = document.querySelector("#txtRegisterPassword");
    let txtConfirmPassword = document.querySelector("#txtRegisterConfirmPassword");
    let radioMale = document.querySelector("#radioMale")
    let radioFemale = document.querySelector("#radioFemale")
    let selectYearLevel = document.querySelector('#selectRegisterYearLevel');
    let txtAddress = document.querySelector('#txtRegisterAddress');
    let floatingDate = document.querySelector('#txtRegisterBirthdate');



    const selectedOption = selectYearLevel.options[selectYearLevel.selectedIndex];

    const selectedYearLevel = selectedOption.value;

    let user = {
        email: txtEmail.value,
        name: txtName.value,
        password: txtPassword.value,
        confirmPassword: txtConfirmPassword.value,
        radioGender: radioMale.checked ? "Male" : radioFemale.checked ? "Female" : "",
        yearLevel: selectedYearLevel,
        address: txtAddress.value,
        birthdate: floatingDate.value
    };

    console.log("button register", user);

    if (!user.email) {
        return alert("Email is required.");
    } else if (!user.name) {
        return alert("Name is required.");
    } else if (!user.password || !user.confirmPassword) {
        return alert("Password is required.");    
    } else if (user.password != user.confirmPassword) {
        return alert("Passwords do not match.");
    } else if (!user.address) {
        return alert('Address is required.')
    } else if (!user.birthdate) {
        return alert('Birthdate is required.')
    }
}


btnRegister.onclick =  () => {
    registerUser();
    console.log("Button Clicked from onclick")
};