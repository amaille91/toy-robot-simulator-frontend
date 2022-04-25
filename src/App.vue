<script setup lang="ts">
import Controls from './components/Controls.vue'
import Report from './components/Report.vue'
import RobotGrid from './components/RobotGrid.vue'
</script>

<template>
  <main class="p-4">
    <RobotGrid />
    <Report />
    <Controls />
  </main>
</template>
