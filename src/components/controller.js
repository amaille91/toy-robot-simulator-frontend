export const controller =  {
  robotState: undefined,
  handlePlaceClick(linePlaceValue, columnPlaceValue, orientationPlaceValue) {
    console.log(`Place button clicked with line ${linePlaceValue}, column ${columnPlaceValue} and orientation ${orientationPlaceValue}`);
    this.robotState = {
      position: {
        line: linePlaceValue,
        col: columnPlaceValue
      },
      orientation: orientationPlaceValue
    }
  },
  handleMoveClick() {
    console.log("Move button clicked");
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