class Cart {
    constructor() {
        this.subTotal = 0
        this.tax =  0
        this.total = 0
        this.items = [{
            id: 'one',
            title: "Assassin's Apprentice",
            img: 'https://images-na.ssl-images-amazon.com/images/I/51R7mLxzL7L._SX327_BO1,204,203,200_.jpg',
            price: 12.50,
            quantity: 10
        }, {
            id:'two',
            title: "Royal Assassin",
            img: "https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007562268.jpg",
            price: 15,
            quantity: 5
        }, {
            id: "three",
            title: "Assassin's Quest",
            img:"http://www.robinhobb.com/wp-content/uploads/2010/01/AssassinsQuest-UK.jpg",
            price: 17.25,
            quantity:20
        }

        ]
    }
    buyItem(itemIndex) {
        let item = this.items[itemIndex]
        if(item.quantity > 0) {
            item.quantity -= 1
            
        }
    }
    getItems() {
        return this.items
    }
    addMoney() {
       let total = this.subTotal += this.items.price
       this.total += this.tax
       return this.total

    }
}
export default Cart