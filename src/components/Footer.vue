<script setup>

</script>

<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="grid grid-cols-4 gap-[62px] items-center">
        <div class="col-span-3 bg-[#0D0D0D] p-[33px] rounded-[8px] flex items-center justify-between">
          <div class="block">
            <div class="title">Tiebreaker Question</div>
            <div class="sub-title">Which minute do you think the first goal will be scored in any of the six matches?
            </div>
          </div>
          <div class="counter flex items-center">
            <div class="controls">
              <i class="fa-solid fa-chevron-up"></i>
            </div>
            <p>29</p>
            <div class="controls">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="sub-title">After you submit your predictions, it can’t be undone</div>
          <div class="grid grid-cols-2 gap-[13px] mt-[15px]">
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
