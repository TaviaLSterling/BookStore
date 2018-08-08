import Product from "../models/Product.js"

import Cart from "../models/Cart.js";
const crt = new Cart
class StoreService {
    constructor(){

    }

buyItem(itemIndex) {
    return crt.buyItem(itemIndex)
}
getItems() {
    return crt.getItems()
}
addMoney(type) {
return crt.addMoney(type)
}
}














export default StoreService