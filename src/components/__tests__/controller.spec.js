import { describe, it, expect, afterEach, vi } from "vitest";
import { controller } from '../controller.js'

const maxLineNb = 4;
const maxColNb = 4;

describe("Domain Logic", () => {
    
    it("should place the robot when placing it in the bounds of the board", () => {
        controller.handlePlaceClick(0, 0, 'N');

        expect(controller.robotState).toBeDefined();
        expect(controller.robotState.position.line).toBe(0);
        expect(controller.robotState.position.col).toBe(0);
        expect(controller.robotState.orientation).toBe('N');
    })

    it("should not modify robot state when robot is not placed", () => {
        controller.handleLeftClick();

        expect(controller.robotState).toBeUndefined();
    })
})