var emp = /** @class */ (function () {
    function emp() {
    }
    emp.prototype.display = function () {
        var strToDisplay = "id: " + this.id + ", name: " + this.name + ", dept: " + this.dept + ", designation: " + this.designation;
        console.log(strToDisplay);
    };
    return emp;
}());
var empObj = new emp(); //allocates new memory to obj of emp type
empObj.id = 100;
empObj.name = 'Rashmi';
empObj.dept = 'PCM';
empObj.designation = 'Full Stack Engineer';
console.log(empObj.display());
