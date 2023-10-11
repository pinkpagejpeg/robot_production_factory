import { makeAutoObservable } from 'mobx'

class WalletStore {
    coinsCount = 0;

    constructor() {
        makeAutoObservable(this)
    }

    setCoins (coinsCount) {
        this.coinsCount = coinsCount
    }
}

export default new WalletStore()