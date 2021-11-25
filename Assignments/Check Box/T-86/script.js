document.querySelector("button").onclick = function () {
    let person = {
        email: "",
        password: "",
    };
    let allCheckBoxElements = document.getElementsByName('subject');
    let allRadioElements = document.getElementsByName('gender');

    for (a in person) {
        person[a] = document.getElementById(a).value;
    }
    person['subjects'] = [];
    allCheckBoxElements.forEach((element) => {
        // console.log(element);
        if (element.checked) {
            person.subjects.push(element.value);
        }
    });
    person['gender'] = '';

    allRadioElements.forEach((element) => {
        if (element.checked) {
            person.gender = element.value;
        }
    });

    console.log(person);
};