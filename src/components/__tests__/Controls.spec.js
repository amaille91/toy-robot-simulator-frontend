import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

import { mount } from "@vue/test-utils";
import Controls from "../Controls.vue";
import { controller } from "../controller.js"

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

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("should call controller.handleMoveClick when clicking on move", async () => {
    vi.mock('../controller.js');
    
    await mount(Controls).find('#move-button').trigger('click');

    expect(controller.handleMoveClick.mock.calls.length).toBe(1);
    expect(controller.handleLeftClick.mock.calls.length).toBe(0);
    expect(controller.handleRightClick.mock.calls.length).toBe(0);
  });

  it("should call controller.handleLeftClick when clicking on Left button", async () => {
    vi.mock('../controller.js');
    
    await mount(Controls).find('#left-button').trigger('click');

    expect(controller.handleMoveClick.mock.calls.length).toBe(0);
    expect(controller.handleLeftClick.mock.calls.length).toBe(1);
    expect(controller.handleRightClick.mock.calls.length).toBe(0);
    expect(controller.handleReportClick.mock.calls.length).toBe(0);
  });

  it("should call controller.handleRightClick when clicking on Right button", async () => {
    vi.mock('../controller.js');
    
    await mount(Controls).find('#right-button').trigger('click');

    expect(controller.handleMoveClick.mock.calls.length).toBe(0);
    expect(controller.handleLeftClick.mock.calls.length).toBe(0);
    expect(controller.handleRightClick.mock.calls.length).toBe(1);
    expect(controller.handleReportClick.mock.calls.length).toBe(0);
  });

  it("should call controller.handleReportClick when clicking on report button", async () => {
    vi.mock('../controller.js');
    
    await mount(Controls).find('#report-button').trigger('click');

    expect(controller.handleMoveClick.mock.calls.length).toBe(0);
    expect(controller.handleLeftClick.mock.calls.length).toBe(0);
    expect(controller.handleRightClick.mock.calls.length).toBe(0);
    expect(controller.handleReportClick.mock.calls.length).toBe(1);
  });

  it("should NOT call controller.handlePlaceClick when clicking on place button and any input is empty", async () => {
    vi.mock('../controller.js');
    
    await mount(Controls).find('#place-button').trigger('click');

    expect(controller.handlePlaceClick.mock.calls.length).toBe(0);
    expect(controller.handleMoveClick.mock.calls.length).toBe(0);
    expect(controller.handleLeftClick.mock.calls.length).toBe(0);
    expect(controller.handleRightClick.mock.calls.length).toBe(0);
    expect(controller.handleReportClick.mock.calls.length).toBe(0);
  });
});
