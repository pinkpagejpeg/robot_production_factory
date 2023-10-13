import { makeAutoObservable } from 'mobx'

class BioarmStore {
    bioarmsCount = 0;

    constructor() {
        makeAutoObservable(this)
    }

    setBioarms (bioarmsCount) {
        this.bioarmsCount = bioarmsCount
    }
}

export default new BioarmStore()