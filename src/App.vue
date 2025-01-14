<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {useMainStore} from "./store/index.js";
import {storeToRefs} from "pinia";
import {icon} from "./helpers/icon.js";
//
const store = useMainStore()
const {CARD_LIST} = storeToRefs(store)
const {GET_CARDS} = store
const tabsList = [
  {
    icon: icon('compass'),
    label: 'Insights',
  },
  {
    icon: icon('diagram'),
    label: 'Stats'
  },
  {
    icon: icon('ball'),
    label: 'Last 5 Games'
  },
]
//
GET_CARDS(6)

</script>

<template>
  <Header></Header>
  <div class="main-wrapper">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-[24px] sm:gap-[40px] container">
      <div v-for="(card, cardIndex) in CARD_LIST"
           class="card-wrapper"
           :key="cardIndex">
        <div class="card-header flex items-center justify-between">
          <div class="flex items-center" v-if="card.liga">
            <div v-html="card.liga.icon"></div>
            <p class="ml-[13px]">{{ card.liga.name }}</p>
          </div>
          <div class="flex items-center" v-if="card.date">
            <div v-html="card.date.icon"></div>
            <p class="ml-[10px] date">{{ card.date.value }}</p>
          </div>
        </div>
        <div class="card-main grid grid-cols-2">
          <div class="grid grid-cols-3 items-center"
               v-for="(team, i) in card.teams"
               :class="[i % 2 ? 'even': 'odd']"
               :key="i">
            <template v-if="i % 2">
              <div class="col-span-1 flex flex-col items-center">
                <div class="controls">
                  <i class="fa-solid fa-chevron-up"></i>
                </div>
                <p class="score">{{ team.score }}</p>
                <div class="controls">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div class="col-span-2 flex flex-col items-center justify-center">
                <div v-html="team.icon"></div>
                <p class="mt-[12px] text-[14px]">{{ team.name }}</p>
              </div>
            </template>
            <template v-else>
              <div class="col-span-2 flex flex-col items-center justify-center">
                <div v-html="team.icon"></div>
                <p class="mt-[12px] text-[14px]">{{ team.name }}</p>
              </div>
              <div class="col-span-1 flex flex-col items-center">
                <div class="controls">
                  <i class="fa-solid fa-chevron-up"></i>
                </div>
                <p class="score">{{ team.score }}</p>
                <div class="controls">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="card-tabs">
          <ul class="tab-list">
            <li v-for="(tab, tabIndex) in tabsList"
                :class="{'active': !tabIndex}"
                :key="tabIndex">
              <div v-html="tab.icon"></div>
              <p>{{ tab.label }}</p>
            </li>
          </ul>
          <div class="tab-content" v-if="card.prediction">
            <div class="insights mt-[24px]">
              <div class="grid grid-cols-5 gap-[20px] items-center">
                <div class="col-span-2">
                  <img class="w-full object-cover" src="./assets/images/Chart.png" alt="">
                </div>
                <ul class="col-span-3 w-full">
                  <li v-for="(value, key, index) in card.prediction.insights"
                      class="flex items-center justify-between"
                      :key="index">
                    <div class="flex items-center">
                      <div class="icon"></div>
                      <p class="label uppercase">{{ key }}</p>
                    </div>
                    <div class="block font-[700] text-[12px]">{{ value }}%</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
