Class Cart {
    constructor(){
        this.subTotal = 0
        this.tax =  0
        this.total = 0
        this.cart = [{
            id: 'one',
            title: "Assassin's Apprentice",
            img: '//placehold.it/200x200',
            price: 12.50,
            quantity: 10
        }, {
            id:'two',
            title: "Royal Assassin",
            img: "//placehold.it/200x200",
            price: 15,
            quantity: 5
        }, {
            id: "three",
            title: "Assassin's Quest",
            img:"placehold.it/200x200",
            price: 17.25,
            quantity:20
        }

        ]
    }
}