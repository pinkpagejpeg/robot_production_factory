import bioarm from './../assets/images/bioarm.svg'
import microchip from './../assets/images/microchip.svg'
import soul from './../assets/images/soul.svg'
import { makeAutoObservable } from 'mobx'

class SpareStore {
  bioarms = {
    name: 'Биорука',
    image: bioarm,
    buyPrice: 7,
    sellPrice: 5,
    currentCount: 0,
    requiredCount: 4,
    selectedCount: 0,
  };

  microchips = {
    name: 'Микрочип',
    image: microchip,
    buyPrice: 5,
    sellPrice: 3,
    currentCount: 0,
    requiredCount: 4,
    selectedCount: 0,
  };

  souls = {
    name: 'Душа',
    image: soul,
    buyPrice: 25,
    sellPrice: 15,
    currentCount: 0,
    requiredCount: 1,
    selectedCount: 0,
  };

  constructor() {
    makeAutoObservable(this)
  }

  setBioarms(currentCount) {
    this.bioarms.currentCount = currentCount;
  }

  setMicrochips(currentCount) {
    this.microchips.currentCount = currentCount;
  }

  setSouls(currentCount) {
    this.souls.currentCount = currentCount
  }

  selectBioarms(selectedCount) {
    this.bioarms.selectedCount = selectedCount;
  }

  selectMicrochips(selectedCount) {
    this.microchips.selectedCount = selectedCount;
  }

  selectSouls(selectedCount) {
    this.souls.selectedCount = selectedCount
  }
}
const spareStore = new SpareStore();

export default new SpareStore()