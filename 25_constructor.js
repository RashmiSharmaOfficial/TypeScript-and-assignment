var Emp = /** @class */ (function () {
    function Emp(code, empName, deptn, desig) {
        console.log('in the constructor');
        this.id = code;
        this.name = empName;
        this.dept = deptn;
        this.designation = desig;
    }
    Emp.prototype.display = function () {
        var strToDisplay = "id: " + this.id + ", name: " + this.name + ", dept: " + this.dept + ", designation: " + this.designation;
        console.log(strToDisplay);
    };
    return Emp;
}());
console.log('before obj creation');
var empObj = new Emp(100, 'Rashmi', 'PCM', 'Full Stack Engineer');
console.log('after obj creation');
empObj.display();
