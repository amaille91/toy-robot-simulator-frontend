import { describe, it, expect, afterEach, vi, beforeEach } from "vitest";
import { controller } from '../controller.js'

const maxLineNb = 4;
const maxColNb = 4;

describe("Domain Logic", () => {

    beforeEach(() => {
        controller.robotState = undefined;
    })
    
    describe("Placing the robot", () => {
        
        it("should place the robot when placing it in the bounds of the board", () => {
            controller.handlePlaceClick(0, 0, 'N');

            expect(controller.robotState).toBeDefined();
            expect(controller.robotState.position.line).toBe(0);
            expect(controller.robotState.position.col).toBe(0);
            expect(controller.robotState.orientation).toBe('N');
        })

        it("should place the robot when placing it in the bounds of the board even if the robot is already placed", () => {
            controller.robotState = {
                position: {
                    line: 0,
                    col: 0
                },
                orientation: "N"
            };

            controller.handlePlaceClick(2, 4, 'S');

            expect(controller.robotState).toBeDefined();
            expect(controller.robotState.position.line).toBe(2);
            expect(controller.robotState.position.col).toBe(4);
            expect(controller.robotState.orientation).toBe('S');
        })

        it("should NOT place the robot when placing it outside the bounds of the board even if the robot is not placed", () => {
            controller.handlePlaceClick(-1, 4, 'S');
            expect(controller.robotState).toBeUndefined();

            controller.handlePlaceClick(2, -1, 'S');
            expect(controller.robotState).toBeUndefined();

            controller.handlePlaceClick(5, 4, 'S');
            expect(controller.robotState).toBeUndefined();

            controller.handlePlaceClick(2, 5, 'S');
            expect(controller.robotState).toBeUndefined();
        })

        it("should NOT place the robot when orientation is invalid", () => {
            controller.handlePlaceClick(-1, 4, 'T');
            expect(controller.robotState).toBeUndefined();
        })
    })

    describe("turning should change the orientation when the robot is placed", () => {
        beforeEach(() => {
            controller.robotState = {
                position: {
                    line: 0,
                    col: 0
                },
                orientation: 'N'
            }
        })

        it("turn left from north", () => {
            controller.handleLeftClick();
    
            expect(controller.robotState.position).toEqual({ line: 0, col: 0});
            expect(controller.robotState.orientation).toEqual('W');
        })

        it("turn left from west", () => {
            controller.robotState.orientation = "W"
            controller.handleLeftClick();
    
            expect(controller.robotState.position).toEqual({ line: 0, col: 0});
            expect(controller.robotState.orientation).toEqual('S');
        })

        it("turn left from south", () => {
            controller.robotState.orientation = "S"
            controller.handleLeftClick();
    
            expect(controller.robotState.position).toEqual({ line: 0, col: 0});
            expect(controller.robotState.orientation).toEqual('E');
        })

        it("turn left from east", () => {
            controller.robotState.orientation = "E"
            controller.handleLeftClick();
    
            expect(controller.robotState.position).toEqual({ line: 0, col: 0 });
            expect(controller.robotState.orientation).toEqual('N');
        })

        it("turn right from north", () => {
            controller.handleRightClick();
    
            expect(controller.robotState.position).toEqual({ line: 0, col: 0});
            expect(controller.robotState.orientation).toEqual('E');
        })

        it("turn right from west", () => {
            controller.robotState.orientation = "W"
            controller.handleRightClick();
    
            expect(controller.robotState.position).toEqual({ line: 0, col: 0});
            expect(controller.robotState.orientation).toEqual('N');
        })

        it("turn right from south", () => {
            controller.robotState.orientation = "S"
            controller.handleRightClick();
    
            expect(controller.robotState.position).toEqual({ line: 0, col: 0});
            expect(controller.robotState.orientation).toEqual('W');
        })

        it("turn right from east", () => {
            controller.robotState.orientation = "E"
            controller.handleRightClick();
    
            expect(controller.robotState.position).toEqual({ line: 0, col: 0 });
            expect(controller.robotState.orientation).toEqual('S');
        })
    })

    describe("trying to move the robot when not placed", () => {
        it("turn left", () => {
            controller.handleLeftClick();
    
            expect(controller.robotState).toBeUndefined();
        })
    
        it("turn right", () => {
            controller.handleRightClick();
    
            expect(controller.robotState).toBeUndefined();
        })
    
        it("move", () => {
            controller.handleMoveClick();
    
            expect(controller.robotState).toBeUndefined();
        })
    })

    describe("moving while inside the board", () => {

        beforeEach(() => {
            controller.robotState = {
                position: { line: 1, col: 1 },
                orientation: "N"
            }
        })

        it("line should decrease when moving south", () => {
            controller.robotState.orientation = "S"
            controller.handleMoveClick();
    
            expect(controller.robotState.position).toEqual({ line: 0, col: 1 });
            expect(controller.robotState.orientation).toEqual("S");
        })

        it("line should increase when moving north", () => {
            controller.robotState.orientation = "N"
            controller.handleMoveClick();
    
            expect(controller.robotState.position).toEqual({ line: 2, col: 1 });
            expect(controller.robotState.orientation).toEqual("N");
        })
        
        it("column should increase when moving east", () => {
            controller.robotState.orientation = "E"
            controller.handleMoveClick();
    
            expect(controller.robotState.position).toEqual({ line: 1, col: 2 });
            expect(controller.robotState.orientation).toEqual("E");
        })
        
        it("column should decrease when moving west", () => {
            controller.robotState.orientation = "W"
            controller.handleMoveClick();
    
            expect(controller.robotState.position).toEqual({ line: 1, col: 0 });
            expect(controller.robotState.orientation).toEqual("W");
        })
    })

    describe("moving outside the board should not alter the robot's position", () => {

        it("robot should not be able to move when on the first line and trying to move south", () => {
            controller.robotState = {
                position: { line: 0, col: 2 },
                orientation: "S"
            }
            controller.handleMoveClick();
    
            expect(controller.robotState.position).toEqual({ line: 0, col: 2 });
            expect(controller.robotState.orientation).toEqual("S");
        })

        it("robot should not be able to move when on the first column and trying to move west", () => {
            controller.robotState = {
                position: { line: 2, col: 0 },
                orientation: "W"
            }
            controller.handleMoveClick();
    
            expect(controller.robotState.position).toEqual({ line: 2, col: 0 });
            expect(controller.robotState.orientation).toEqual("W");
        })
        it("robot should not be able to move when on the last line and trying to move north", () => {
            controller.robotState = {
                position: { line: 4, col: 2 },
                orientation: "N"
            }
            controller.handleMoveClick();
    
            expect(controller.robotState.position).toEqual({ line: 4, col: 2 });
            expect(controller.robotState.orientation).toEqual("N");
        })

        it("robot should not be able to move when on the last column and trying to move east", () => {
            controller.robotState = {
                position: { line: 2, col: 4 },
                orientation: "E"
            }
            controller.handleMoveClick();
    
            expect(controller.robotState.position).toEqual({ line: 2, col: 4 });
            expect(controller.robotState.orientation).toEqual("E");
        })
    })
})