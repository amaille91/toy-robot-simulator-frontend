import { reactive } from 'vue'

export const controller =  reactive({
  robotState: undefined,
  reportMsg: undefined,

  handlePlaceClick(linePlaceValue, columnPlaceValue, orientationPlaceValue) {
    if(isLineInBounds(linePlaceValue) && isColInBounds(columnPlaceValue) && isOrientationValid(orientationPlaceValue)) {
      this.robotState = {
        position: {
          line: linePlaceValue,
          col: columnPlaceValue
        },
        orientation: orientationPlaceValue
      }

      this.reportMsg = undefined;
    }
  },

  handleMoveClick() {
    console.log("Move button clicked");
    if(this.robotState !== undefined) {
      const newPosition = computeNewPosition(this.robotState)
      if(isLineInBounds(newPosition.line) && isColInBounds(newPosition.col)) {
        this.robotState.position = newPosition;
        this.reportMsg = undefined;
      }
    }
  },

  handleLeftClick() {
    if(this.robotState !== undefined) {
      switch (this.robotState.orientation) {
        case "N":
          this.robotState.orientation = "W";
          this.reportMsg = undefined;
          break;
        case "W":
          this.robotState.orientation = "S";
          this.reportMsg = undefined;
          break;
        case "S":
          this.robotState.orientation = "E";
          this.reportMsg = undefined;
          break;
        case "E":
          this.robotState.orientation = "N";
          this.reportMsg = undefined;
          break;
        default:
          console.error("unknown orientation");
      }
    }
  },
  handleRightClick() {
    if(this.robotState !== undefined) {
      switch (this.robotState.orientation) {
        case "N":
          this.robotState.orientation = "E";
          this.reportMsg = undefined;
          break;
        case "W":
          this.robotState.orientation = "N";
          this.reportMsg = undefined;
          break;
        case "S":
          this.robotState.orientation = "W";
          this.reportMsg = undefined;
          break;
        case "E":
          this.robotState.orientation = "S";
          this.reportMsg = undefined;
          break;
        default:
          console.error("unknown orientation");
      }
    }
  },
  handleReportClick() {
    if(this.robotState) {
      const reportStr = `Robot is at (${this.robotState.position.line}, ${this.robotState.position.col}) and is facing ${this.robotState.orientation}`;
      console.log(`Reporting : ${reportStr}`);
      this.reportMsg = reportStr;
    }
  }    
})

const lineSize = 5;
const colSize = 5
let isLineInBounds = lineVal => lineVal >= 0 && lineVal < lineSize;

let isColInBounds = lineVal => lineVal >= 0 && lineVal < colSize;

let isOrientationValid = orientationVal =>  orientationVal === "N" || orientationVal === "E" || orientationVal === "S" || orientationVal === "W";

let computeNewPosition = state => {
  switch (state.orientation) {
    case "N":
      return { line: state.position.line + 1, col: state.position.col }
    case "W":
      return { line: state.position.line, col: state.position.col - 1 }
    case "S":
      return { line: state.position.line - 1, col: state.position.col }
    case "E":
      return { line: state.position.line, col: state.position.col + 1 }
    default:
      console.error("unknown orientation");
  }
}