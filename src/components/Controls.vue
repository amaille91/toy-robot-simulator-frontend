<script lang="ts">
import {controller} from './controller.js'
import Controls from './Controls.vue'
export default {
  data() {
    return {
      linePlaceValue: undefined,
      columnPlaceValue: undefined,
      orientationPlaceValue: undefined,
      controller: controller
    }
  },
  methods: {
    onPlaceClicked() {
      const lineNumber = parseInt(this.linePlaceValue);
      const colNumber = parseInt(this.columnPlaceValue);
      if(lineNumber !== undefined && colNumber !== undefined && this.orientationPlaceValue !== undefined) {
        controller.handlePlaceClick(lineNumber, colNumber, this.orientationPlaceValue)
        this.linePlaceValue = undefined;
        this.columnPlaceValue = undefined;
        this.orientationPlaceValue = undefined;
      }
    }
  }
}
</script>

<template>
    <div class="container-fluid">
      <div class="row align-items-end">
        <div class="col" id="place-action-container">
          <div class="row pb-2">
            <div class="col-4" id="toto">
              <label for="line-input" class="row mx-auto p-0">line:</label>
              <input type="number" id="line-input" v-model="linePlaceValue" placeholder="0-4" name="line-input" class="row w-100 mx-auto" />
            </div>

            <div class="col-4">
              <label for="col-input" class="row mx-auto p-0">column:</label>
              <input type="number" v-model="columnPlaceValue" placeholder="0-4" name="col-input" class="row w-100 mx-auto">
            </div>

            <div class="col-4">
              <label for="orientation-select" class="row mx-auto p-0">NESW</label>
              <select name="orientation-select" v-model="orientationPlaceValue" class="row w-100 mx-auto">
                <option value="N">NORTH</option>
                <option value="E">EAST</option>
                <option value="S">SOUTH</option>
                <option value="W">WEST</option>
              </select>
            </div>
          </div>

          <div class="row">
            <button class="w-100" id="place-button" @click="this.onPlaceClicked()">Place</button>
          </div>
        </div>

        <div class="col" id="move-action-container">
            <button class="w-100" id="move-button" @click="controller.handleMoveClick()">Move</button>
        </div>

        <div class="col" id="left-action-container">
            <button class="w-100" id="left-button" @click="controller.handleLeftClick()">Left</button>
        </div>

        <div class="col" id="right-action-container">
            <button class="w-100" id="right-button" @click="controller.handleRightClick()">Right</button>
        </div>

        <div class="col" id="report-action-container">
            <button class="w-100" id="report-button" @click="controller.handleReportClick()">Report</button>
        </div>
      </div>
    </div>
</template>
