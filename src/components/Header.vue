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
    <div class="grid grid-cols-2 sm:flex items-center justify-between pt-[30px] sm:pt-[53px]">
      <div class="main-title col-span-1">ROUND 18</div>
      <div class="flex justify-end col-span-1 sm:hidden">
        <button type="button" class="back-btn">
          <span class="arrow-wrapper">
            <i class="fa-solid fa-chevron-left"></i>
          </span>
          <p>back</p>
        </button>
      </div>
      <div class="flex items-center col-span-2">
        <div class="hidden sm:block">
          <div class="title">Countdown</div>
          <div class="sub-title">Don’t miss!</div>
        </div>
        <div class="timer mt-[17px] sm:mt-0 flex sm:ml-[42px] justify-center w-full sm:w-auto">
          <div class=" item"
               v-for="(item, key, index) in timer" :key="index">
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
