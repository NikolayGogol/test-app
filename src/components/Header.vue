<script setup>
import {ref} from "vue";

const timer = ref({
  days: {
    value: 5,
  },
  hours: {
    value: 17,
  },
  minutes: {
    value: 28,
  },
  seconds: {
    value: 20
  }
})
</script>

<template>
  <div class="container header-wrapper">
    <div class="flex items-center justify-between pt-[53px]">
      <div class="main-title">ROUND 18</div>
      <div class="flex items-center">
        <div class="block">
          <div class="title">Countdown</div>
          <div class="sub-title">Don’t miss!</div>
        </div>
        <div class="timer flex">
          <div class="item" v-for="(item, key, index) in timer" :key="index">
            <div class="value">{{ item.value }}</div>
            <div class="name">{{ key }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
