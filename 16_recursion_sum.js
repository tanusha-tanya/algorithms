let company = {
    salers: [
        {
            name: "Jhone",
            salary: 1000
        },
        {
            name: "Sarah",
            salary: 500
        }
    ],
    development: {
        backend: [
            {
                name: "Kally",
                salary: 800
            },
            {
                name: "Kate",
                salary: 5000
            }
        ],
        frontend: [
            {
                name: "Tanya",
                salary: 1000000
            },
            {
                name: "Piter",
                salary: 100
            }
        ]
    }
}

function sumSallary(department){
    if(Array.isArray(department)){
       let sum = department.reduce((prev, current) => prev + current.salary, 0)
       return sum
    }
    else{
        let sum = 0
        for(let subDep of Object.values(department)){
            sum += sumSallary(subDep)
        }
        return sum
    }
}

console.log(sumSallary(company))