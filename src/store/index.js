import {defineStore} from 'pinia'
import {icon} from "../helpers/icon.js";

export const useMainStore = defineStore({
    id: 'main',
    state: () => {
        return {
            CARD_LIST: []
        }
    },
    actions: {
        GET_CARDS(value = 1) {
            const cards = {
                liga: {
                    name: 'La Liga Santander',
                    icon: icon('ball')
                },
                date: {
                    value: 'Sat 6 May, 17:00',
                    icon: icon('clock')
                },
                teams: [
                    {
                        name: 'Roma FC',
                        icon: icon('t-shirt-green'),
                        score: 0
                    },
                    {
                        name: 'FC Napoli',
                        icon: icon('t-shirt-blue'),
                        score: 0
                    },
                ],
                prediction: {
                    insights: {
                        atm: 62,
                        draw: 62,
                        npl: 62,
                    }
                }
            }
            for (let i = 0; i < value; i++) {
                this.CARD_LIST.push(cards)
            }
        }
    }
})
