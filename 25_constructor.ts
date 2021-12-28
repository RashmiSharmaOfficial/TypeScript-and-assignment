class Emp {
    //public, protected, private
    id: number;
    name: string;
    dept: string;
    designation: string;

    constructor(code: number, empName: string, deptn: string, desig: string) {
        console.log('in the constructor')
        this.id = code;
        this.name = empName;
        this.dept = deptn;
        this.designation = desig;
    }

    display() {
        var strToDisplay = `id: ${this.id}, name: ${this.name}, dept: ${this.dept}, designation: ${this.designation}`;
        console.log(strToDisplay)
    }
}

console.log('before obj creation')
var empObj = new Emp(100, 'Rashmi', 'PCM', 'Full Stack Engineer');
console.log('after obj creation')
empObj.display();

