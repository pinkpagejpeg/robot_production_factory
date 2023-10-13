import { makeAutoObservable } from 'mobx'

class SoulStore {
    soulsCount = 0;

    constructor() {
        makeAutoObservable(this)
    }

    setSouls (soulsCount) {
        this.soulsCount = soulsCount
    }
}

export default new SoulStore()