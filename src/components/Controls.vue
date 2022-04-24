<script lang="ts">
export default {
  data() {
    return {
      linePlaceValue: 0,
      columnPlaceValue: undefined,
      orientationPlaceValue: undefined
    }
  },
  computed: {
    console: () => console
  },
  methods: {
    handlePlaceClick(event) {
      console.log(`Place button clicked with line ${this.linePlaceValue}, column ${this.columnPlaceValue} and orientation ${this.orientationPlaceValue}`);
    },
    handleMoveClick(event) {
      console.log("Move button clicked");
    },
    handleLeftClick(event) {
      console.log("Left button clicked");
    },
    handleRightClick(event) {
      console.log("Right button clicked");
    },
    handleReportClick(event) {
      console.log("Report button clicked");
    }    
  }
}
</script>

<template>
    <div class="container">
      <div class="row align-items-end">
        <div class="col" id="place-action-container">
          <div class="row pb-2">
            <div class="col-4">
              <label for="line-select" class="row mx-auto p-0">line:</label>
              <input type="number" :value="linePlaceValue" @input="event => linePlaceValue = event.target.value" placeholder="0-4" name="line-select" class="row w-100 mx-auto">
            </div>

            <div class="col-4">
              <label for="col-select" class="row mx-auto p-0">column:</label>
              <input type="number" v-model="columnPlaceValue" placeholder="0-4" name="col-select" class="row w-100 mx-auto">
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
            <button class="w-100" @click="handlePlaceClick()">Place</button>
          </div>
        </div>

        <div class="col" id="move-action-container">
            <button class="w-100" @click="handleMoveClick()">Move</button>
        </div>

        <div class="col" id="left-action-container">
            <button class="w-100" @click="handleLeftClick()">Left</button>
        </div>

        <div class="col" id="right-action-container">
            <button class="w-100" @click="handleRightClick()">Right</button>
        </div>

        <div class="col" id="report-action-container">
            <button class="w-100" @click="handleReportClick()">Report</button>
        </div>
      </div>
    </div>
</template>
