const createArray1 = (...param1:string[]):string[] =>{
        return param1.reverse()
}
const result1 = createArray1("hello","hi", "Assalamu alaikum","bye")
console.log(result1)