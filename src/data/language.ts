import { LabelType } from '../types/global.types'
import bs from 'bikram-sambat';

const date: Date = new Date
export const weatherLabel: LabelType = {
    title: {
        en: 'Weather Application',
        np: 'मौसम आवेदन'
    },

    date: {
        en: bs.toBik_euro(date.toJSON().split('T')[0]),
        np: bs.toBik_dev(date.toJSON().split('T')[0]),
    },
}