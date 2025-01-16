<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {useMainStore} from "./store/index.js";
import {storeToRefs} from "pinia";
import {icon} from "./helpers/icon.js";
import Chart from "./components/Chart.vue";
import {onMounted, ref} from "vue";
//
const store = useMainStore()
const {CARD_LIST} = storeToRefs(store)
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
const size = ref({w: 170})

//
onMounted(() => {
  if (window.innerWidth < 768) size.value.w = 150
})

function prepareSeries(data) {
  const arr = []
  for (let key in data.insights) {
    arr.push(data.insights[key])
  }
  return arr
}

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
                <div class="controls" @click="team.score++">
                  <i class="fa-solid fa-chevron-up"></i>
                </div>
                <p class="score">{{ team.score }}</p>
                <div class="controls" @click="team.score ? team.score-- : false">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div class="col-span-2 flex flex-col items-center justify-center">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_401)">
                    <path
                        d="M36.1587 5.02344L32.7249 16.4695H36.887C37.5018 16.4695 38.0002 15.971 38.0002 15.3562V9.2856C38.0002 7.63816 37.3098 6.10807 36.1587 5.02344Z"
                        fill="#C82C24"/>
                    <path
                        d="M0 9.2856V15.3562C0 15.971 0.498453 16.4695 1.11328 16.4695H5.2754L1.84159 5.02344C0.690457 6.10807 0 7.63824 0 9.2856Z"
                        fill="white"/>
                    <path
                        d="M19.0001 4.77177C21.0163 4.77177 22.6566 3.13146 22.6566 1.11523V0.00195312H15.3436V1.11523C15.3436 3.13146 16.9839 4.77177 19.0001 4.77177Z"
                        fill="white"/>
                    <path
                        d="M24.8831 0.306641V1.11377C24.8831 4.35772 22.244 6.99687 19 6.99687C15.7561 6.99687 13.117 4.35772 13.117 1.11377V0.306641L3.80005 3.80049L7.55307 16.3107C7.58417 16.4144 7.60005 16.5222 7.60005 16.6305V36.8872C7.60005 37.502 8.0985 38.0005 8.71333 38.0005H29.2868C29.9016 38.0005 30.4 37.502 30.4 36.8872V16.6305C30.4 16.5222 30.4159 16.4144 30.447 16.3107L34.2 3.80049L24.8831 0.306641ZM27.268 13.6345C27.268 16.0417 24.5748 17.4578 24.2677 17.6113C24.1112 17.6896 23.9406 17.7288 23.7699 17.7288C23.5992 17.7288 23.4285 17.6896 23.272 17.6113C22.9649 17.4578 20.2717 16.0417 20.2717 13.6345V11.8458C20.2717 11.231 20.7702 10.7325 21.385 10.7325H26.1547C26.7696 10.7325 27.268 11.231 27.268 11.8458V13.6345Z"
                        :fill="team.iconColor"/>
                    <path
                        d="M22.4982 13.6361C22.4982 14.2589 23.1866 14.9115 23.7698 15.3179C24.353 14.9116 25.0414 14.2589 25.0414 13.6361V12.9608H22.4981V13.6361H22.4982Z"
                        fill="#C82C24"/>
                    <g clip-path="url(#clip1_1_401)">
                      <path
                          d="M36.1587 5.02344L32.7249 16.4695H36.887C37.5018 16.4695 38.0002 15.971 38.0002 15.3562V9.2856C38.0002 7.63816 37.3098 6.10807 36.1587 5.02344Z"
                          fill="white"/>
                      <path
                          d="M19.0001 4.77177C21.0163 4.77177 22.6566 3.13146 22.6566 1.11523V0.00195312H15.3436V1.11523C15.3436 3.13146 16.9839 4.77177 19.0001 4.77177Z"
                          fill="white"/>
                      <path
                          d="M24.8831 0.306641V1.11377C24.8831 4.35772 22.244 6.99687 19 6.99687C15.7561 6.99687 13.117 4.35772 13.117 1.11377V0.306641L3.80005 3.80049L7.55307 16.3107C7.58417 16.4144 7.60005 16.5222 7.60005 16.6305V36.8872C7.60005 37.502 8.0985 38.0005 8.71333 38.0005H29.2868C29.9016 38.0005 30.4 37.502 30.4 36.8872V16.6305C30.4 16.5222 30.4159 16.4144 30.447 16.3107L34.2 3.80049L24.8831 0.306641ZM27.268 13.6345C27.268 16.0417 24.5748 17.4578 24.2677 17.6113C24.1112 17.6896 23.9406 17.7288 23.7699 17.7288C23.5992 17.7288 23.4285 17.6896 23.272 17.6113C22.9649 17.4578 20.2717 16.0417 20.2717 13.6345V11.8458C20.2717 11.231 20.7702 10.7325 21.385 10.7325H26.1547C26.7696 10.7325 27.268 11.231 27.268 11.8458V13.6345Z"
                          fill="white"/>
                      <path
                          d="M22.4982 13.6361C22.4982 14.2589 23.1866 14.9115 23.7698 15.3179C24.353 14.9116 25.0414 14.2589 25.0414 13.6361V12.9608H22.4981V13.6361H22.4982Z"
                          fill="white"/>
                      <mask id="mask0_1_401" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="38"
                            height="39">
                        <g clip-path="url(#clip2_1_401)">
                          <path
                              d="M36.1587 5.02344L32.7249 16.4695H36.887C37.5018 16.4695 38.0002 15.971 38.0002 15.3562V9.2856C38.0002 7.63816 37.3098 6.10807 36.1587 5.02344Z"
                              fill="#64B7E6"/>
                          <path
                              d="M19.0001 4.77177C21.0163 4.77177 22.6566 3.13146 22.6566 1.11523V0.00195312H15.3436V1.11523C15.3436 3.13146 16.9839 4.77177 19.0001 4.77177Z"
                              fill="white"/>
                          <path
                              d="M24.8831 0.306641V1.11377C24.8831 4.35772 22.244 6.99687 19 6.99687C15.7561 6.99687 13.117 4.35772 13.117 1.11377V0.306641L3.80005 3.80049L7.55307 16.3107C7.58417 16.4144 7.60005 16.5222 7.60005 16.6305V36.8872C7.60005 37.502 8.0985 38.0005 8.71333 38.0005H29.2868C29.9016 38.0005 30.4 37.502 30.4 36.8872V16.6305C30.4 16.5222 30.4159 16.4144 30.447 16.3107L34.2 3.80049L24.8831 0.306641ZM27.268 13.6345C27.268 16.0417 24.5748 17.4578 24.2677 17.6113C24.1112 17.6896 23.9406 17.7288 23.7699 17.7288C23.5992 17.7288 23.4285 17.6896 23.272 17.6113C22.9649 17.4578 20.2717 16.0417 20.2717 13.6345V11.8458C20.2717 11.231 20.7702 10.7325 21.385 10.7325H26.1547C26.7696 10.7325 27.268 11.231 27.268 11.8458V13.6345Z"
                              fill="#2D315F"/>
                          <path
                              d="M22.4982 13.6361C22.4982 14.2589 23.1866 14.9115 23.7698 15.3179C24.353 14.9116 25.0414 14.2589 25.0414 13.6361V12.9608H22.4981V13.6361H22.4982Z"
                              fill="white"/>
                          <rect x="19.8636" y="9.50195" width="9.5" height="9.5" fill="#D9D9D9"/>
                        </g>
                      </mask>
                      <g mask="url(#mask0_1_401)">
                        <path
                            d="M19 6.04741L22.4545 4.32014L24.1818 0.00195312L34.5455 3.4565L30.6591 16.8429V38.002H19V6.04741Z"
                            fill="white"/>
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_401">
                      <rect width="38" height="38" fill="white" transform="translate(0 0.00195312)"/>
                    </clipPath>
                    <clipPath id="clip1_1_401">
                      <rect width="19" height="38" fill="white" transform="translate(19 0.00195312)"/>
                    </clipPath>
                    <clipPath id="clip2_1_401">
                      <rect width="38" height="38" fill="white" transform="translate(0 0.00195312)"/>
                    </clipPath>
                  </defs>
                </svg>
                <p class="mt-[12px] text-[12px] sm:text-[14px]">{{ team.name }}</p>
              </div>
            </template>
            <template v-else>
              <div class="col-span-2 flex flex-col items-center justify-center">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_401)">
                    <path
                        d="M36.1587 5.02344L32.7249 16.4695H36.887C37.5018 16.4695 38.0002 15.971 38.0002 15.3562V9.2856C38.0002 7.63816 37.3098 6.10807 36.1587 5.02344Z"
                        fill="#C82C24"/>
                    <path
                        d="M0 9.2856V15.3562C0 15.971 0.498453 16.4695 1.11328 16.4695H5.2754L1.84159 5.02344C0.690457 6.10807 0 7.63824 0 9.2856Z"
                        fill="white"/>
                    <path
                        d="M19.0001 4.77177C21.0163 4.77177 22.6566 3.13146 22.6566 1.11523V0.00195312H15.3436V1.11523C15.3436 3.13146 16.9839 4.77177 19.0001 4.77177Z"
                        fill="white"/>
                    <path
                        d="M24.8831 0.306641V1.11377C24.8831 4.35772 22.244 6.99687 19 6.99687C15.7561 6.99687 13.117 4.35772 13.117 1.11377V0.306641L3.80005 3.80049L7.55307 16.3107C7.58417 16.4144 7.60005 16.5222 7.60005 16.6305V36.8872C7.60005 37.502 8.0985 38.0005 8.71333 38.0005H29.2868C29.9016 38.0005 30.4 37.502 30.4 36.8872V16.6305C30.4 16.5222 30.4159 16.4144 30.447 16.3107L34.2 3.80049L24.8831 0.306641ZM27.268 13.6345C27.268 16.0417 24.5748 17.4578 24.2677 17.6113C24.1112 17.6896 23.9406 17.7288 23.7699 17.7288C23.5992 17.7288 23.4285 17.6896 23.272 17.6113C22.9649 17.4578 20.2717 16.0417 20.2717 13.6345V11.8458C20.2717 11.231 20.7702 10.7325 21.385 10.7325H26.1547C26.7696 10.7325 27.268 11.231 27.268 11.8458V13.6345Z"
                        :fill="team.iconColor"/>
                    <path
                        d="M22.4982 13.6361C22.4982 14.2589 23.1866 14.9115 23.7698 15.3179C24.353 14.9116 25.0414 14.2589 25.0414 13.6361V12.9608H22.4981V13.6361H22.4982Z"
                        fill="#C82C24"/>
                    <g clip-path="url(#clip1_1_401)">
                      <path
                          d="M36.1587 5.02344L32.7249 16.4695H36.887C37.5018 16.4695 38.0002 15.971 38.0002 15.3562V9.2856C38.0002 7.63816 37.3098 6.10807 36.1587 5.02344Z"
                          fill="white"/>
                      <path
                          d="M19.0001 4.77177C21.0163 4.77177 22.6566 3.13146 22.6566 1.11523V0.00195312H15.3436V1.11523C15.3436 3.13146 16.9839 4.77177 19.0001 4.77177Z"
                          fill="white"/>
                      <path
                          d="M24.8831 0.306641V1.11377C24.8831 4.35772 22.244 6.99687 19 6.99687C15.7561 6.99687 13.117 4.35772 13.117 1.11377V0.306641L3.80005 3.80049L7.55307 16.3107C7.58417 16.4144 7.60005 16.5222 7.60005 16.6305V36.8872C7.60005 37.502 8.0985 38.0005 8.71333 38.0005H29.2868C29.9016 38.0005 30.4 37.502 30.4 36.8872V16.6305C30.4 16.5222 30.4159 16.4144 30.447 16.3107L34.2 3.80049L24.8831 0.306641ZM27.268 13.6345C27.268 16.0417 24.5748 17.4578 24.2677 17.6113C24.1112 17.6896 23.9406 17.7288 23.7699 17.7288C23.5992 17.7288 23.4285 17.6896 23.272 17.6113C22.9649 17.4578 20.2717 16.0417 20.2717 13.6345V11.8458C20.2717 11.231 20.7702 10.7325 21.385 10.7325H26.1547C26.7696 10.7325 27.268 11.231 27.268 11.8458V13.6345Z"
                          fill="white"/>
                      <path
                          d="M22.4982 13.6361C22.4982 14.2589 23.1866 14.9115 23.7698 15.3179C24.353 14.9116 25.0414 14.2589 25.0414 13.6361V12.9608H22.4981V13.6361H22.4982Z"
                          fill="white"/>
                      <mask id="mask0_1_401" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="38"
                            height="39">
                        <g clip-path="url(#clip2_1_401)">
                          <path
                              d="M36.1587 5.02344L32.7249 16.4695H36.887C37.5018 16.4695 38.0002 15.971 38.0002 15.3562V9.2856C38.0002 7.63816 37.3098 6.10807 36.1587 5.02344Z"
                              fill="#64B7E6"/>
                          <path
                              d="M19.0001 4.77177C21.0163 4.77177 22.6566 3.13146 22.6566 1.11523V0.00195312H15.3436V1.11523C15.3436 3.13146 16.9839 4.77177 19.0001 4.77177Z"
                              fill="white"/>
                          <path
                              d="M24.8831 0.306641V1.11377C24.8831 4.35772 22.244 6.99687 19 6.99687C15.7561 6.99687 13.117 4.35772 13.117 1.11377V0.306641L3.80005 3.80049L7.55307 16.3107C7.58417 16.4144 7.60005 16.5222 7.60005 16.6305V36.8872C7.60005 37.502 8.0985 38.0005 8.71333 38.0005H29.2868C29.9016 38.0005 30.4 37.502 30.4 36.8872V16.6305C30.4 16.5222 30.4159 16.4144 30.447 16.3107L34.2 3.80049L24.8831 0.306641ZM27.268 13.6345C27.268 16.0417 24.5748 17.4578 24.2677 17.6113C24.1112 17.6896 23.9406 17.7288 23.7699 17.7288C23.5992 17.7288 23.4285 17.6896 23.272 17.6113C22.9649 17.4578 20.2717 16.0417 20.2717 13.6345V11.8458C20.2717 11.231 20.7702 10.7325 21.385 10.7325H26.1547C26.7696 10.7325 27.268 11.231 27.268 11.8458V13.6345Z"
                              fill="#2D315F"/>
                          <path
                              d="M22.4982 13.6361C22.4982 14.2589 23.1866 14.9115 23.7698 15.3179C24.353 14.9116 25.0414 14.2589 25.0414 13.6361V12.9608H22.4981V13.6361H22.4982Z"
                              fill="white"/>
                          <rect x="19.8636" y="9.50195" width="9.5" height="9.5" fill="#D9D9D9"/>
                        </g>
                      </mask>
                      <g mask="url(#mask0_1_401)">
                        <path
                            d="M19 6.04741L22.4545 4.32014L24.1818 0.00195312L34.5455 3.4565L30.6591 16.8429V38.002H19V6.04741Z"
                            fill="white"/>
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_401">
                      <rect width="38" height="38" fill="white" transform="translate(0 0.00195312)"/>
                    </clipPath>
                    <clipPath id="clip1_1_401">
                      <rect width="19" height="38" fill="white" transform="translate(19 0.00195312)"/>
                    </clipPath>
                    <clipPath id="clip2_1_401">
                      <rect width="38" height="38" fill="white" transform="translate(0 0.00195312)"/>
                    </clipPath>
                  </defs>
                </svg>
                <p class="mt-[12px] text-[12px] sm:text-[14px]">{{ team.name }}</p>
              </div>
              <div class="col-span-1 flex flex-col items-center">
                <div class="controls" @click="team.score++">
                  <i class="fa-solid fa-chevron-up"></i>
                </div>
                <p class="score">{{ team.score }}</p>
                <div class="controls" @click="team.score ? team.score-- : false">
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
              <div class="grid grid-cols-5 gap-[20px] sm:gap-[10px] items-center">
                <div class="col-span-2">
                  <Chart :size="size"
                         :percents="prepareSeries(card.prediction)"></Chart>
                </div>
                <ul class="col-span-3 w-full">
                  <li v-for="(value, key, index) in card.prediction.insights"
                      class="flex items-center justify-between"
                      :key="index">
                    <div class="flex items-center">
                      <div class="icon"></div>
                      <p class="label" :class="[index === 1 ? 'capitalize': 'uppercase']">{{ key }}</p>
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
<style scoped lang="scss">
:deep(.insights) {
  .relative {
    left: -20px;
  }
}
</style>
