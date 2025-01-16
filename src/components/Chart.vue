<script setup>
const colors = ['#76E664', '#FFBD14', '#FF5A00']
const maxDashOffset = 496.12;
const strokeW = 13;

const props = defineProps({
  percents: {
    type: Array[Number],
    required: true,
    default: [0, 0, 0]
  },
  size: {
    type: Object,
    required: false,
    validator(value) {
      return value && 'w' in value
    },
    default: {
      w: 160,
      h: 160
    }
  }
})

//
function circleDashOffset(percent) {
  return maxDashOffset - (percent / 100) * maxDashOffset;
}

console.log(prepareSize(0));

function prepareSize(index) {
  if (!index) {
    return {
      w: props.size.w,
      h: props.size.h ?? props.size.w
    }
  } else {
    return {
      w: props.size.w - (index * (strokeW * 2.2)),
      h: (props.size.h ?? props.size.w) - (index * (strokeW * 2.2))
    }
  }
}
</script>

<template>
  <div class="relative" :style="`width:${prepareSize(0).w}px; height:${prepareSize(0).h}px;`">
    <div class="circle-wrapper"
         v-for="(percent, index) in percents"
         :key="index">
      <svg :width="prepareSize(index).w"
           :height="prepareSize(index).h"
           :id="index ? `chart_${index}`: null"
           viewBox="-22.25 -22.25 222.5 222.5"
           style="transform:rotate(-90deg)">
        <circle r="79" cx="89" cy="89" fill="transparent" :stroke="colors[index]" opacity=".1"
                :stroke-width="`${strokeW}px`"></circle>
        <circle r="79" cx="89" cy="89" :stroke="colors[index]"
                :stroke-width="`${strokeW}px`"
                stroke-linecap="round"
                :stroke-dashoffset="circleDashOffset(percent)"
                fill="transparent"
                :stroke-dasharray="`${maxDashOffset}px`"></circle>
      </svg>
    </div>
  </div>


</template>

<style scoped lang="scss">
.circle-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:nth-child(2) {
    svg {
      circle {
        stroke-width: 15px;
      }
    }
  }

  &:last-child {
    svg {
      circle {
        stroke-width: 17px;
      }
    }
  }
}
</style>
