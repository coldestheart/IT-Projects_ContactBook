<template>
  <div id="contact-book">
    <transition name="page" mode="out-in">
      <RouterView />
    </transition>
  </div>
</template>

<script>
import '@/assets/styles/style.scss'
export default {
  name: 'ContactBook'
}
</script>
