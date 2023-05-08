class Person {
        private name:string
        private age:number

        constructor (name:string, age:number){
                this.name = name;
                this.age=age
        }
        getDetails():string {
                return `${this.name} is ${this.age} years old`
        }
}

class Student extends Person {
        private grade : number

        constructor(name:string, age:number,grade:number){
                super(name,age)
                this.grade= grade
               
        }
        getGrade():string {
                return `His gpa is ${this.grade} out of 4`
        }
}

const person = new Student("Tonmoy", 23, 3.8)
console.log(person.getDetails())
console.log(person.getGrade())