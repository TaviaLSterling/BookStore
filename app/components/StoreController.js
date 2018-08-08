import StoreService from "./StoreService.js"

const storeService = new StoreService()

function drawTotal(total) {
    document.getElementById('total').innerText = total
}
function drawItems() {
    let items = storeService.getItems()
    let template = ''
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        template += `
        <div class = "products-item" onclick="app.controllers.storeController.buyItem(${i})">
        <img src="${item.img}" />
        <h3> ${item.price}</h3>
        </div>
        `
    }
    document.getElementById('products').innerHTML = template
}
function drawItems(img) {
    document.getElementById('vended-item').setAttribute('src', img)
}
// PUBLIC PARTS 

class StoreController {
    constructor(){

    }
    addMoney(cur) {
        let total = storeService.addMoney(cur)
        drawTotal(total)
    }
}
drawItems()








export default StoreController