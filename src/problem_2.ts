interface myData {
        name:string
        age:number
}
const newFunc = (params:myData[]) =>{
        params.map(param =>{
                if(param.age >= 18){
                        console.log(param)
                }
        })
}

const data:myData[] = [
        {
                name:"Tonmoy",
                age:24
        },
        {
                name:"Abir",
                age:16
        },
        {
                name:"Mohona",
                age:18
        },
        {
                name:"Mohona",
                age:23
        },
        {
                name:"Mohona",
                age:13
        },
]

 newFunc(data)
