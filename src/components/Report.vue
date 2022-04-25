<script lang="ts">
import {controller} from './controller.js'
export default {
  data() {
    return {
      controller
    }
  }
}
</script>

<template>
    <span v-if="controller.reportMsg">Report: {{ controller.reportMsg }}</span>
</template>
