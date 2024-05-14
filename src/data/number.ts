import { NumberLabelType } from '../types/global.types'

const numberLabel: NumberLabelType = {
    '0': '0',
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
}

export const englishNumToNepaliNum = (num: string) => {
    const myArr = String(num).split("").map((num) => {
        return num
    })
    let fullNumber: string = ''
    myArr.forEach(element => {
        if (numberLabel[element] === undefined) {
            fullNumber += element;
        } else {
            const nepaliNumber = numberLabel[element];
            fullNumber += nepaliNumber;
        }
    });
    return fullNumber;
}

