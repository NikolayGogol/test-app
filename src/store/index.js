import {defineStore} from 'pinia'
import {icon} from "../helpers/icon.js";
import Chart from '../assets/images/Chart.png'
import Chart1 from '../assets/images/Chart1.png'
import Chart2 from '../assets/images/Chart2.png'
import Chart3 from '../assets/images/Chart3.png'

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
                    },
                    chart: Chart3
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
                    },
                    chart: Chart
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
                    },
                    chart: Chart
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
                            atm: 0,
                            draw: 0,
                            npl: 0,
                        }
                    },
                    chart: Chart2
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
                    },
                    chart: Chart
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
                    },
                    chart: Chart1
                },
            ]
        }
    },
    actions: {}
})
