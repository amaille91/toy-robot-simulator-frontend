export const controller =  {
  handlePlaceClick(linePlaceValue, columnPlaceValue, orientationPlaceValue) {
    console.log(`Place button clicked with line ${linePlaceValue}, column ${columnPlaceValue} and orientation ${orientationPlaceValue}`);
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