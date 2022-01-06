let person = [
    {
        "fname": "Jeanneth",
        "lname": "Brill",
        "tel": "(302)773-9620",
        "address": "241 Porta Ave",
        "city": "Chambersburg",
        "state": "NV",
        "zip": 73902
    },
    {
        "fname": "April",
        "lname": "Puckett",
        "tel": "(599)120-9168",
        "address": "4042 Tincidunt Ln",
        "city": "Saltilo",
        "state": "NY",
        "zip": 68863
    },
    {
        "fname": "Serena",
        "lname": "Atanasov",
        "tel": "(782)015-0591",
        "address": "5872 Fringilla Ave",
        "city": "White Bear Lake",
        "state": "PA",
        "zip": 78694
    },
    {
        "fname": "Melina",
        "lname": "Ripley",
        "tel": "(880)691-8798",
        "address": "1377 Placerat Dr",
        "city": "Pittsburg",
        "state": "FL",
        "zip": 14841
    },
    {
        "fname": "Carolin",
        "lname": "Harvey",
        "tel": "(905)994-9711",
        "address": "943 Placerat Ave",
        "city": "Minneola",
        "state": "VT",
        "zip": 26740
    },
    {
        "fname": "Jacqueline",
        "lname": "Elkins",
        "tel": "(425)915-1605",
        "address": "4774 Magna Dr",
        "city": "Kingsley",
        "state": "CT",
        "zip": 47572
    },
    {
        "fname": "David",
        "lname": "Absalom",
        "tel": "(193)576-0690",
        "address": "313 Dui Ln",
        "city": "Riverside",
        "state": "MT",
        "zip": 57488
    },
    {
        "fname": "Effram",
        "lname": "Comeau",
        "tel": "(477)379-4059",
        "address": "5550 Ipsum Ct",
        "city": "San Antonio",
        "state": "CT",
        "zip": 36789
    },
    {
        "fname": "Syed",
        "lname": "Hobson",
        "tel": "(877)870-5859",
        "address": "1239 Facilisis St",
        "city": "Wilder",
        "state": "LA",
        "zip": 42274
    },
    {
        "fname": "Allana",
        "lname": "Renbarger",
        "tel": "(104)721-7363",
        "address": "2766 Lacus Ln",
        "city": "Pittsburg",
        "state": "ID",
        "zip": 21589
    }
]

const data = {
    person
}

const PersonReducer =(state=data,action)=>{
    const type={
        action
    }
    switch (type) {
        case "GET_DATA":
            return state.person
                
        default:
            return state
    }
}
export default PersonReducer