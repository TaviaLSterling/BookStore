class Product {
    constructor(id,name,img,price,quantity){
        this.id = 1
        this.name = name || ""
        this.img = img || ''
        this.price = price || 0
        this.quantity = quantity || 0
    }
    soldOut() {
        if (this.quantity <= 0) {
            return "Sold Out"
        } 
    }
}


export default Product