
enum Gender{
    Male,
    Female
}
let i:{name:string ,gender:Gender}
i={name:"张三",gender:1}
console.log(i.gender===Gender.Female)