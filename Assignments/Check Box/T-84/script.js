document.querySelector("button").onclick = function () {
    var person = {
        email : "",
        password : '',
    };
    var allCheckBoxElements = document.getElementsByName('subject');
    var allRadioButtons = document.getElementsByName('gender');

    for (a in person) {
        person[a] = document.getElementById(a).value;
    }
    person['subjects'] = [];
    allCheckBoxElements.forEach((element) => {
        if (element.checked) {
            person.subjects.push(element.value);
        }
    });
    person['gender'] = ' ';
    allRadioButtons.forEach((element) => {
        if (element.checked) {
            person.gender = element.value;
        }
    });
    console.log(person);
};