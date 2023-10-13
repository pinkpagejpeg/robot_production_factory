import { makeAutoObservable } from 'mobx'

class MicrochipStore {
    microchipsCount = 0;

    constructor() {
        makeAutoObservable(this)
    }

    setMicrochips (microchipsCount) {
        this.microchipsCount = microchipsCount
    }
}

export default new MicrochipStore()