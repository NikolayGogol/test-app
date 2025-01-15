<script setup>

</script>

<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div
            class="sm:max-w-[626px] w-full bg-[#0D0D0D] p-[25px] sm:p-[33px] rounded-[8px] sm:flex items-center justify-between">
          <div class="block">
            <div class="title !text-[18px]">Tiebreaker Question</div>
            <div class="sub-title sm:max-w-[240px]">Which minute do you think the first goal will be <br class="sm:hidden"> scored in any of
              the six matches?
            </div>
          </div>
          <div class="counter justify-center flex items-center">
            <div class="controls">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <p>29</p>
            <div class="controls">
              <i class="fa-solid fa-chevron-up"></i>
            </div>
          </div>
        </div>
        <div class="max-w-[328px] sm:max-w-[278px] w-full">
          <div class="sub-title">After you submit your predictions, <br class="hidden sm:block"> it can’t <br class="sm:hidden"> be undone</div>
          <div class="max-w-[70%] sm:max-w-max grid grid-cols-2 gap-[13px] mt-[15px]">
            <button class="cancel" type="button">Cancel</button>
            <button class="submit" type="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
