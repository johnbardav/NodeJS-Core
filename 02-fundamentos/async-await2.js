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

let getEmployee = async(id) => {
    let employeeRecord = employees.find(employee => employee.id === id);

    if (!employeeRecord) {
        throw new Error(`The employee with id ${id} doesn't exists.`);
    } else {
        return employeeRecord;
    }
};

let getSalary = async(employee) => {
    let salaryRecord = salaries.find(salary => salary.id === employee.id);

    if (!salaryRecord) {
        throw new Error(`The salary for employee ${employee.name} doesn't exists.`);
    } else {
        return {
            id: employee.id,
            name: employee.name,
            salary: salaryRecord.salary
        };
    }
};

let getInformation = async(id) => {
    let employee = await getEmployee(id);
    let salaryObject = await getSalary(employee);

    console.log(employee, salaryObject);
    return `The salary for employee ${salaryObject.name} is ${salaryObject.salary}$.`;
};

getInformation(2)
    .then(message => console.log(message))
    .catch(error => console.log(error));