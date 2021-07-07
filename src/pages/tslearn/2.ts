
// @ts-ignore
enum Gender{
    Male = 0,
    Female = 1
}
let i:{name:string ,gender:Gender}
i={name:"张三",gender:1}
console.log(i.gender===Gender.Female)
console.log(i.gender===Gender.Male)