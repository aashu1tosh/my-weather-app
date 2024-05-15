import { LanguageEnum, NumberLabelType } from '@type/global.types'

const numberLabel: NumberLabelType = {
    '0': '०',
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

// export const englishNumToNepaliNum = (num: string, lang: LanguageEnum) => {
//     if(lang === LanguageEnum.en){
//         return num
//     } else if (lang === LanguageEnum.ne) {
//         const myArr = String(num).split("").map((num) => {
//             return num;
//         })
//         let fullNumber: string = ''
//         myArr.forEach(element => {
//             if (numberLabel[element] === undefined) {
//                 fullNumber += element;
//             } else {
//                 const nepaliNumber = numberLabel[element];
//                 fullNumber += nepaliNumber;
//             }
//         });
//         return fullNumber;
//     }
// }



export const englishNumToNepaliNum = (num: string, lang: LanguageEnum) => {
    if (lang === LanguageEnum.en) {
        return num;
    } else {
        // Convert English numbers to Nepali numbers
        const myArr = String(num).split("").map((num) => {
            if (numberLabel[num] !== undefined) {
                return numberLabel[num]; 
            }
            return num;
        });
        return myArr.join("");
    } 
}

// if(lang === LanguageEnum.ne) 