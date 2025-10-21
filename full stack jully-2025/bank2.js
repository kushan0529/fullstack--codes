function BankAccount(aName,aNumber,aBalance){
    this.accountname=aName
    this.accountnumber=aNumber
    this.balance=aBalance
}
BankAccount.prototype.deposit=function(amount){
    if (amount<0){
        return 'deposit amount must be positive'
    }
    else{
        this.balance+=amount
        return this.balance
    }
}
const c1=new BankAccount("kushan","KOTAK-123",500)
console.log(c1)

console.log(c1.balance)
console.log(c1.deposit(100))