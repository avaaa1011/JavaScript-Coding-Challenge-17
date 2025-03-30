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

//task 2: creating a SalesRep class
class SalesRep //creating another clas
{
    constructor(name) //class properties 
    {
        this.name = name;
        this.clients = [];
    }
    addClient(client) //adding new customers to the list 
    {
        this.clients.push(client);
    }
    getClientTotal(name) //find the customer by their name and showing their total sepnt
    {
        const client = this.clients.find(client => client.name === name);
        return client ? client.getTotalSpent() : 0;
    }
}
//task 3 : creating a VIPCustomer class 
class VIPCustomer extends Customer //extending the customer class
{
    constructor(name, email, vipLevel) //class properties 
    {
        super(name, email); 
        this.vipLevel = vipLevel; //adding another property
    }
    getTotalSpent() //will return the total spent with a 10% loyalty bonus 
    {
        const total = super.getTotalSpent(); 
        return total * 0.10; 
    }
}
