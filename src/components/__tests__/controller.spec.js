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
})