import { makeAutoObservable } from 'mobx'

class WalletStore {
    coinsCount = 0;

    constructor() {
        makeAutoObservable(this)
    }

    setCoins (coinsCount) {
        this.coinsCount = coinsCount
        if (coinsCount > 100) {
            this.coinsCount = 100
        }
    }
}

export default new WalletStore()