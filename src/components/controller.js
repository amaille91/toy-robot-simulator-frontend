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
      switch (this.robotState.orientation) {
        case "N":
          this.robotState.position.line++;
          break;
        case "W":
          this.robotState.position.col--;
          break;
        case "S":
          this.robotState.position.line--;
          break;
        case "E":
          this.robotState.position.col++;
          break;
        default:
          console.error("unknown orientation");
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