export const controller =  {
  robotState: undefined,

  handlePlaceClick(linePlaceValue, columnPlaceValue, orientationPlaceValue) {
    if(isLineInBounds(linePlaceValue) && isColInBounds(columnPlaceValue) && isOrientationValid(orientationPlaceValue)) {
      this.robotState = {
        position: {
          line: linePlaceValue,
          col: columnPlaceValue
        },
        orientation: orientationPlaceValue
      }
    }
  },

  handleMoveClick() {
    console.log("Move button clicked");
    if(this.robotState !== undefined) {
      const newPosition = computeNewPosition(this.robotState)
      if(isLineInBounds(newPosition.line) && isColInBounds(newPosition.col)) {
        this.robotState.position = newPosition;
      }
    }
  },

  handleLeftClick() {
    if(this.robotState !== undefined) {
      switch (this.robotState.orientation) {
        case "N":
          this.robotState.orientation = "W";
          break;
        case "W":
          this.robotState.orientation = "S";
          break;
        case "S":
          this.robotState.orientation = "E";
          break;
        case "E":
          this.robotState.orientation = "N";
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
          break;
        case "W":
          this.robotState.orientation = "N";
          break;
        case "S":
          this.robotState.orientation = "W";
          break;
        case "E":
          this.robotState.orientation = "S";
          break;
        default:
          console.error("unknown orientation");
      }
    }
  },
  handleReportClick() {
    console.log("Report button clicked");
  }    
}

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