// function player(pname,pcountry,pruns){
//     this.name=pname
//     this.country=pcountry
//     this.runs=pruns

//     this.details=function(){
//         return `${this.name} plays for ${this.country}`

//     }
// }
// const p1= new player("virat","india",[100,40,59])
// console.log(p1)


function player(pname,pcountry,pruns){
    this.name=pname
    this.country=pcountry
    this.runs=pruns


    this.details=function(){
        return `${this.name} plays for ${this.country}`
    }
}
const p1=new player ("rohith","india",[267,209,236])
console.log(p)