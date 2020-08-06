let employees = [{
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Carter'
    },
    {
        id: 3,
        name: 'Menak'
    }
];

let salaries = [{
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 2000
    }
];

let getEmployee = (id, callback) => {
    let employeeRecord = employees.find(employee => employee.id === id);

    if (!employeeRecord) {
        callback(`The employee with id ${id} doesn't exists.`);
    } else {
        callback(null, employeeRecord);
    }
}

let getSalary = (employee, callback) => {
    let salaryRecord = salaries.find(salary => salary.id === employee.id);

    if (!salaryRecord) {
        callback(`The salary for employee ${employee.name} doesn't exists.`);
    } else {
        callback(null, {
            id: employee.id,
            name: employee.name,
            salary: salaryRecord.salary
        });
    }
}

getEmployee(2, (error, employee) => {
    if (error) {
        return console.log(error);
    }

    //Call another function
    getSalary(employee, (error, response) => {
        if (error) {
            return console.log(error);
        }

        console.log(`The salary for employee ${response.name} is ${response.salary}$`);
    });
});