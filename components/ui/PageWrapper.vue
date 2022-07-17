<template>
  <div>
    <h1 class="text-2xl font-extrabold text-black mb-4">{{ title }}</h1>

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Who the hell am I?',
    },
  },
}
</script>
