<script lang="ts">
import RobotRepresentation from './RobotRepresentation.vue'
import {controller} from './controller.js'
export default {
  components: {
    RobotRepresentation
  },
  data() {
    return {
      controller
    }
  },
  methods: {
    isRobotPlacedAt(line, col) {
      return controller.robotState &&
        controller.robotState.position.line === line &&
        controller.robotState.position.col === col
    }
  }
}
</script>

<template>
    <div class="robot-grid m-auto">

      <div class="grid-place" id="grid-place-4-0">
        <RobotRepresentation v-if="this.isRobotPlacedAt(4,0)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-4-1">
        <RobotRepresentation v-if="this.isRobotPlacedAt(4,1)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-4-2">
        <RobotRepresentation v-if="this.isRobotPlacedAt(4,2)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-4-3">
        <RobotRepresentation v-if="this.isRobotPlacedAt(4,3)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-4-4">
        <RobotRepresentation v-if="this.isRobotPlacedAt(4,4)" :orientation="controller.robotState.orientation" />
      </div>

      <div class="grid-place" id="grid-place-3-0">
        <RobotRepresentation v-if="this.isRobotPlacedAt(3,0)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-3-1">
        <RobotRepresentation v-if="this.isRobotPlacedAt(3,1)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-3-2">
        <RobotRepresentation v-if="this.isRobotPlacedAt(3,2)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-3-3">
        <RobotRepresentation v-if="this.isRobotPlacedAt(3,3)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-3-4">
        <RobotRepresentation v-if="this.isRobotPlacedAt(3,4)" :orientation="controller.robotState.orientation" />
      </div>

      <div class="grid-place" id="grid-place-2-0">
        <RobotRepresentation v-if="this.isRobotPlacedAt(2,0)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-2-1">
        <RobotRepresentation v-if="this.isRobotPlacedAt(2,1)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-2-2">
        <RobotRepresentation v-if="this.isRobotPlacedAt(2,2)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-2-3">
        <RobotRepresentation v-if="this.isRobotPlacedAt(2,3)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-2-4">
        <RobotRepresentation v-if="this.isRobotPlacedAt(2,4)" :orientation="controller.robotState.orientation" />
      </div>

      <div class="grid-place" id="grid-place-1-0">
        <RobotRepresentation v-if="this.isRobotPlacedAt(1,0)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-1-1">
        <RobotRepresentation v-if="this.isRobotPlacedAt(1,1)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-1-2">
        <RobotRepresentation v-if="this.isRobotPlacedAt(1,2)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-1-3">
        <RobotRepresentation v-if="this.isRobotPlacedAt(1,3)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-1-4">
        <RobotRepresentation v-if="this.isRobotPlacedAt(1,4)" :orientation="controller.robotState.orientation" />
      </div>

      <div class="grid-place" id="grid-place-0-0">
        <RobotRepresentation v-if="this.isRobotPlacedAt(0,0)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-0-1">
        <RobotRepresentation v-if="this.isRobotPlacedAt(0,1)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-0-2">
        <RobotRepresentation v-if="this.isRobotPlacedAt(0,2)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-0-3">
        <RobotRepresentation v-if="this.isRobotPlacedAt(0,3)" :orientation="controller.robotState.orientation" />
      </div>
      <div class="grid-place" id="grid-place-0-4">
        <RobotRepresentation v-if="this.isRobotPlacedAt(0,4)" :orientation="controller.robotState.orientation" />
      </div>
      
    </div>
</template>

<style scoped src="../assets/base.css"></style>
