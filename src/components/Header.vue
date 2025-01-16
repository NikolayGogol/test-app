<script setup>
import {ref} from "vue";

const timer = ref({
  days: {
    value: 0,
  },
  hours: {
    value: 0,
  },
  minutes: {
    value: 0,
  },
  seconds: {
    value: 0
  }
})

//
const targetDate = new Date('2025-12-31T23:59:59'); // Ваша цільова дата
startCountdown(targetDate);

function startCountdown(targetDate) {
  const countdownInterval = setInterval(() => {
    const now = new Date();
    const timeRemaining = targetDate - now; // Різниця між поточним часом і цільовою датою
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval); // Зупиняємо відлік, коли час досягнуто
      console.log('Time is up!');
      return;
    }

    timer.value.days.value = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); // Кількість днів
    timer.value.hours.value = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Кількість годин
    timer.value.minutes.value = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)); // Кількість хвилин
    timer.value.seconds.value = Math.floor((timeRemaining % (1000 * 60)) / 1000); // Кількість секунд
  }, 1000); // Оновлювати кожну секунду
}
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
          <div class="title !text-[20px]">Countdown</div>
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
