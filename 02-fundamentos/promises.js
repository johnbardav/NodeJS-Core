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

let getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        let employeeRecord = employees.find(employee => employee.id === id);

        if (!employeeRecord) {
            reject(`The employee with id ${id} doesn't exists.`);
        } else {
            resolve(employeeRecord);
        }
    });
};

let getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let salaryRecord = salaries.find(salary => salary.id === employee.id);

        if (!salaryRecord) {
            reject(`The salary for employee ${employee.name} doesn't exists.`);
        } else {
            resolve({
                id: employee.id,
                name: employee.name,
                salary: salaryRecord.salary
            });
        }
    });
};

getEmployee(3).then(employee => {
    console.log('Employee', employee);

    getSalary(employee).then(response => {
        console.log(`The salary for employee ${response.name} is: ${response.salary}$`);
    }, (error) => console.log(error));
}, (error) => console.log(error));

//Chain Promises
getEmployee(3).then(employee => {
        return getSalary(employee);
    })
    .then(response => {
        console.log(`The salary for employee ${response.name} is: ${response.salary}$`);
    })
    .catch(error => console.log(error));