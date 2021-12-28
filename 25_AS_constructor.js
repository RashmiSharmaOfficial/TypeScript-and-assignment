var Foodresturant = /** @class */ (function () {
    function Foodresturant(code, empName, cities, type, country) {
        console.log('in the constructor');
        this.Id = code;
        this.Name = empName;
        this.City = cities;
        this.Type = type;
        this.Country = country;
    }
    Foodresturant.prototype.disp = function () {
        var strToDisplay = "id: " + this.Id + " Name: " + this.Name + ", City: " + this.City + ", Type: " + this.Type + ", country: " + this.Country;
        console.log(strToDisplay);
    };
    return Foodresturant;
}());
console.log('before obj creation');
var resturant = new Foodresturant(101, 'Foodies', 'veg', 'del', 'india');
console.log('after obj creation');
resturant.disp();
