class Foodresturant {

    Id: number;
    Name: string;
    City: string;
    Type: string;
    Country: string;

    constructor(code: number, empName: string, cities: string, type: string, country: string) {
        console.log('in the constructor')
        this.Id = code;
        this.Name = empName;
        this.City = cities;
        this.Type = type;
        this.Country = country;
    }
    disp() {
        var strToDisplay = `id: ${this.Id} Name: ${this.Name}, City: ${this.City}, Type: ${this.Type}, country: ${this.Country}`;
        console.log(strToDisplay);
    }
}
console.log('before obj creation')
var resturant = new Foodresturant(101, 'Foodies', 'veg', 'del', 'india');
console.log('after obj creation')
resturant.disp()