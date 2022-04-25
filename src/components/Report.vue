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
    <span id="report-message" v-if="controller.reportMsg">Report: {{ controller.reportMsg }}</span>
</template>
