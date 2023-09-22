
function Employee (name, salary, job_title, status = "Full-Time" ){
    this.name = name
    this.salary = salary
    this.job_title = job_title
    this.status = status
    this.printEmployeeForm = function() {
        console.log ("Name:" + this.name +" "+ " Salary:" + this.salary +" "+ " Job Title:" + this.job_title +" "+ " Status:" + this.status)
    }
}
var employee1 = new Employee ( "John", "$65/hr", "Jr. Software Developer",  )
var employee2 = new Employee ( "Bob", "$75/hr", "Software Developer I",  "Part-Time")
var employee3 = new Employee ( "Chris", "$85/hr", "Software Developer II", )


employee1.printEmployeeForm()
employee2.printEmployeeForm()
employee3.printEmployeeForm()

var employees = [employee1, employee2, employee3]
console.log(employees)


