var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    return Employee;
}());
var RegularEmployee = /** @class */ (function (_super) {
    __extends(RegularEmployee, _super);
    function RegularEmployee(id, name, daysWorked) {
        var _this = _super.call(this, id, name) || this;
        _this.daysWorked = daysWorked;
        return _this;
    }
    RegularEmployee.prototype.display = function () {
        var str = "My id is " + this.id + ", my name is " + this.name + " and I have worked " + this.daysWorked + " days!";
        console.log(str);
    };
    return RegularEmployee;
}(Employee));
var regEmpObj = new RegularEmployee(101, 'Seira', 90);
regEmpObj.display();
