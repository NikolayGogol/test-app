import {defineStore} from 'pinia'
import {icon} from "../helpers/icon.js";

function generateRandomNumber() {
    return Math.floor(Math.random() * 101);
}

export const useMainStore = defineStore({
    id: 'main',
    state: () => {
        return {
            CARD_LIST: [
                {
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
                            iconColor: '#d5d51f',
                            score: 0
                        },
                        {
                            name: 'FC Napoli',
                            iconColor: '#952c2c',
                            score: 0
                        },
                    ],
                    prediction: {
                        insights: {
                            atm: generateRandomNumber(),
                            draw: generateRandomNumber(),
                            npl: generateRandomNumber(),
                        }
                    },
                },
                {
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
                            iconColor: '#3657a8',
                            score: 0
                        },
                        {
                            name: 'FC Napoli',
                            iconColor: '#d5d51f',
                            score: 0
                        },
                    ],
                    prediction: {
                        insights: {
                            atm: generateRandomNumber(),
                            draw: generateRandomNumber(),
                            npl: generateRandomNumber(),
                        }
                    },
                },
                {
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
                            iconColor: '#1fd57a',
                            score: 0
                        },
                        {
                            name: 'FC Napoli',
                            iconColor: '#2b678c',
                            score: 0
                        },
                    ],
                    prediction: {
                        insights: {
                            atm: generateRandomNumber(),
                            draw: generateRandomNumber(),
                            npl: generateRandomNumber(),
                        }
                    },
                },
                {
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
                            iconColor: '#bd1fd5',
                            score: 0
                        },
                        {
                            name: 'FC Napoli',
                            iconColor: '#85712f',
                            score: 0
                        },
                    ],
                    prediction: {
                        insights: {
                            atm: generateRandomNumber(),
                            draw: generateRandomNumber(),
                            npl: generateRandomNumber(),
                        }
                    },
                },
                {
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
                            iconColor: '#32852f',
                            score: 0
                        },
                        {
                            name: 'FC Napoli',
                            iconColor: '#8c443b',
                            score: 0
                        },
                    ],
                    prediction: {
                        insights: {
                            atm: 0,
                            draw: 0,
                            npl: 0,
                        }
                    },
                },
                {
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
                            iconColor: '#450a0a',
                            score: 0
                        },
                        {
                            name: 'FC Napoli',
                            iconColor: '#48717e',
                            score: 0
                        },
                    ],
                    prediction: {
                        insights: {
                            atm: generateRandomNumber(),
                            draw: generateRandomNumber(),
                            npl: generateRandomNumber(),
                        }
                    },
                },
            ]
        }
    },
    actions: {}
})
