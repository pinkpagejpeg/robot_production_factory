function productionInfo(coins, selectedBioarms, selectedMicrochips, selectedSouls, requiredBioarms, requiredMicrochips, requiredSouls, selectedType, selectedStabilizer) {
    let info = ''

    if ((selectedBioarms < requiredBioarms) || (selectedMicrochips < requiredMicrochips) || (selectedSouls < requiredSouls)) {
        info = 'Для производства биоробота не хватает '

        if (selectedBioarms < requiredBioarms) {
            if (selectedBioarms >= 1) {
                (selectedBioarms < 3)
                    ? info += (requiredBioarms - selectedBioarms) + ' биорук'
                    : info += (requiredBioarms - selectedBioarms) + ' биоруки'
                if ((selectedMicrochips < requiredMicrochips) || (selectedSouls < requiredSouls) || (coins < 10)) {
                    info += ', '
                }
            } else {
                info += 'биорук'
                if ((selectedMicrochips < requiredMicrochips) || (selectedSouls < requiredSouls) || (coins < 10)) {
                    info += ', '
                }
            }
        }

        if (selectedMicrochips < requiredMicrochips) {
            if (selectedMicrochips >= 1) {
                (selectedMicrochips < 3)
                    ? info += (requiredMicrochips - selectedMicrochips) + ' микрочипов'
                    : info += (requiredMicrochips - selectedMicrochips) + ' микрочипа'
                if ((selectedSouls < requiredSouls) && (coins < 10)) {
                    info += ', '
                } else if ((selectedSouls < requiredSouls) || (coins < 10)) {
                    info += ' и '
                }
            } else {
                info += 'микрочипов'
                if ((selectedSouls < requiredSouls) && (coins < 10)) {
                    info += ', '
                } else if ((selectedSouls < requiredSouls) || (coins < 10)) {
                    info += ' и '
                }
            }
        }

        if (selectedSouls < requiredSouls) {
            if ((selectedBioarms < requiredBioarms) && (selectedMicrochips < requiredMicrochips) && (selectedSouls < requiredSouls)) {
                info += 'душ'
            } else {
                info += (requiredSouls - selectedSouls) + ' души'
            }
        }

        if (coins < 10) {
            if ((selectedBioarms < requiredBioarms) || (selectedMicrochips < requiredMicrochips) || (selectedSouls < requiredSouls)) {
                info += ' и денег'
            }
        }

    } else if (coins < 10) {
        info = 'Не хватает денег'
    }
    else if ((selectedType === '') || (selectedStabilizer === '')) {
        info = 'Выберити тип и стабилизатор биоробота'
    }
    return info
}

export default productionInfo;