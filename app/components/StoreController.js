

import StoreService from "./StoreService.js"
const storeService = new StoreService()

class StoreController {
    constructor(){

    }
    addMoney(cur) {
        let total = storeService.addMoney(cur)
        drawTotal(total)
    }
}









export default StoreController