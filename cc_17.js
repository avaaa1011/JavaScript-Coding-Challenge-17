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

// Task 4: Build a Client Report System
const salesRep = new SalesRep("Padme");

const customer1 = new Customer("Anakin Skywalker", "askywalkera@gmail.com");
customer1.addPurchase(1000); 

const customer2 = new VIPCustomer("Obi Wan", "obikenobi@gmail.com" ,"Gold");
customer2.addPurchase(2000);

salesRep.addClient(customer1);
salesRep.addClient(customer2);

const allCustomers = [customer1, customer2]; 

const totalRevenue = allCustomers.reduce((total, customer) => total + customer.getTotalSpent(), 0); //calculating total revenue
console.log(`Total Revenue: $${totalRevenue}`); 

const highestSpender = allCustomers.filter(customer => customer.getTotalSpent() > 500);// Filter customers who spent more than $500
console.log("Highest Spenders:", highestSpender.map(customer => customer.name));

const customerReport = allCustomers.map(customer => (
{
    name: customer.name,
    totalSpent: customer.getTotalSpent(),
}));
console.log("Customer Report:", customerReport); 


