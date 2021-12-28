class Employee{
    protected id: number;
    protected name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}

class RegularEmployee extends Employee{
    daysWorked: number

    constructor(id: number, name: string, daysWorked: number){
        super(id, name);
        this.daysWorked = daysWorked;
    }

    display(){
        var str = `My id is ${this.id}, my name is ${this.name} and I have worked ${this.daysWorked} days!`;
        console.log(str);
    }
}

let regEmpObj = new RegularEmployee(101, 'Seira', 90);
regEmpObj.display();