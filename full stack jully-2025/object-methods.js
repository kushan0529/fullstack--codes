const person={
    firstname:"kushan",
    lastname:"kumar",
    fullname:function(){
        return `${this.firstname}${this.lastname}`
    }
}
console.log(person.fullname())
const player={
    name:"virat",
    country:"india",
    runs:[40,60,50],
    matchesplayed:function(){
        return this.runs.length;
    },
    totalruns : functions(){
        const total =this.runs.reduce((acc,cv)=>{
            return acc+cv;
        },0)
    }
    
}
console.log(player.matchesplayed());
console.log(player.totalruns)