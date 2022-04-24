export const controller =  {
  handlePlaceClick(linePlaceValue, columnPlaceValue, orientationPlaceValue) {
    console.log(`Place button clicked with line ${linePlaceValue}, column ${columnPlaceValue} and orientation ${orientationPlaceValue}`);
  },
  handleMoveClick() {
    console.log("Move button clicked");
  },
  handleLeftClick() {
    console.log("Left button clicked");
  },
  handleRightClick() {
    console.log("Right button clicked");
  },
  handleReportClick() {
    console.log("Report button clicked");
  }    
}