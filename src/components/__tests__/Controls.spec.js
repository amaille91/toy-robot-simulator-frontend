import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

import { mount } from "@vue/test-utils";
import Controls from "../Controls.vue";
import { controller } from "../controller.js"
import { textChangeRangeIsUnchanged } from "typescript";

// vi.mock('../controller.js', () => {
//         return {
//             controller: vi.fn(() => ({
//                 handlePlaceClick: vi.fn(),
//                 handleMoveClick: vi.fn(),
//                 handleLeftClick: vi.fn(),
//                 handleRightClick: vi.fn(),
//                 handleReportClick: vi.fn()
//             }))
//         }
//     });

describe("Controls", () => {

  it("should call controller.handleMoveClick when clicking on move", async () => {
    vi.mock('../controller.js');
    
    await mount(Controls).find('#move-button').trigger('click');

    expect(controller.handleMoveClick.mock.calls.length).toBe(1);
  });
});
