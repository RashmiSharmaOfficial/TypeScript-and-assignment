class FoodResturant {

    Id: number;
    Name: string;
    City: string;
    Type: string;
    Country: string;

    disp() {
        var strToDisplay = `id: ${this.Id} Name: ${this.Name}, City: ${this.City}, Type: ${this.Type}, country: ${this.Country}`;
        console.log(strToDisplay);
    }
}

var resturant = new FoodResturant();
resturant.Id = 101
resturant.Name = 'Foodies'
resturant.Type = 'Vegeterian'
resturant.City = 'Delhi'
resturant.Country = 'India'
resturant.disp()