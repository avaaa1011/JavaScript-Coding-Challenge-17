//task : creating a customer class
class Customer //creating Customer class
{
    constructor(name, email) //class properties 
    {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }
    addPurchase(purchase) 
    { //adding purchase amount to its history
        this.purchaseHistory.push(purchase);
    }
    getTotalSpent() //calculating and returning the amount spent 
    {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0)
    }
}
