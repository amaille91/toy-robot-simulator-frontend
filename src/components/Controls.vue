<script lang="ts">
export default {
  data() {
    return {
      linePlaceValue: undefined,
      columnPlaceValue: undefined,
      orientationPlaceValue: undefined
    }
  },
  computed: {
    console: () => console
  },
  methods: {
    handlePlaceClick(event) {
      console.log("Place button clicked");
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
      <div class="row">
        <div class="col" id="place-action-container">
          <div class="row pb-2">
            <div class="col-4">
              <label for="line-select" class="row mx-auto p-0">line:</label>
              <input type="number" placeholder="0-4" name="line-select" class="row w-100 mx-auto">
            </div>

            <div class="col-4">
              <label for="col-select" class="row mx-auto p-0">column:</label>
              <input type="number" placeholder="0-4" name="col-select" class="row w-100 mx-auto">
            </div>

            <div class="col-4">
              <label for="orientation-select" class="row mx-auto p-0">NESW</label>
              <select name="orientation-select" class="row w-100 mx-auto">
                <option value="N">NORTH</option>
                <option value="E">EAST</option>
                <option value="S">SOUTH</option>
                <option value="W">WEST</option>
              </select>
            </div>
          </div>

          <div class="row">
            <button @click="console.log('Place button has been clicked')">Place</button>
          </div>
        </div>

        <div class="col" id="move-action-container">
            <button @click="console.log('Move button has been clicked')">Move</button>
        </div>

        <div class="col" id="left-action-container">
            <button @click="console.log('Left button has been clicked')">Left</button>
        </div>

        <div class="col" id="right-action-container">
            <button @click="console.log('Right button has been clicked')">Right</button>
        </div>

        <div class="col" id="report-action-container">
            <button @click="console.log('Report button has been clicked')">Report</button>
        </div>
      </div>
    </div>
</template>
