import { describe, it, expect, afterEach, vi } from "vitest";

import { mount } from "@vue/test-utils";
import App from "../../App.vue";

describe("App", () => {

  it("should move from (0, 0) to (1, 0) when facing north", async () => {
    const wrapper = mount(App);
    expect(wrapper.find('.container-fluid').exists()).toBe(true);
    await wrapper.find('#line-input').setValue(0);
    await wrapper.find('input[name="col-input"]').setValue(0);
    await wrapper.find('select[name="orientation-select"]').setValue('N');

    await wrapper.find('#place-button').trigger('click');
    expect(wrapper.find('#grid-place-0-0 #svg-north').exists()).toBe(true);

    await wrapper.find('#move-button').trigger('click');
    expect(wrapper.find('#grid-place-1-0 #svg-north').exists()).toBe(true);

    await wrapper.find('#report-button').trigger('click');
    expect(wrapper.find('#report-message').text()).toEqual('Report: Robot is at (1, 0) and is facing N')
  });
});
