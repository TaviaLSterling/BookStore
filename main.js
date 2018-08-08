import StoreController from "./app/components/StoreController.js"

class App {
    constructor() {
        this.controllers = {
            storeController = new StoreController()
        }
    }
}
window.app = new App()