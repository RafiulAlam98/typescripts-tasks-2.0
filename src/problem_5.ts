const myFunc = (param:unknown):string =>{
        if (typeof param === "string"){
                return `${param}`
        }
        else{
                return `Error! this is not a string`
        }
}

type StringCheck= string
const stringCheck:StringCheck = "Tonmoy"

type StringCheck1= number
const stringCheck1:StringCheck1 = 3

const output = myFunc(stringCheck)
console.log(output)