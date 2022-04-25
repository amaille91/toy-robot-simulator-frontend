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

  it("should face west when turning left from (0, 0) facing north", async () => {
    const wrapper = mount(App);
    expect(wrapper.find('.container-fluid').exists()).toBe(true);
    await wrapper.find('#line-input').setValue(0);
    await wrapper.find('input[name="col-input"]').setValue(0);
    await wrapper.find('select[name="orientation-select"]').setValue('N');

    await wrapper.find('#place-button').trigger('click');
    expect(wrapper.find('#grid-place-0-0 #svg-north').exists()).toBe(true);

    await wrapper.find('#left-button').trigger('click');
    expect(wrapper.find('#grid-place-0-0 #svg-west').exists()).toBe(true);

    await wrapper.find('#report-button').trigger('click');
    expect(wrapper.find('#report-message').text()).toEqual('Report: Robot is at (0, 0) and is facing W')
  });

  it("should be at (3, 3) when going move move left move from (2, 1) facing east", async () => {
    const wrapper = mount(App);
    expect(wrapper.find('.container-fluid').exists()).toBe(true);
    await wrapper.find('#line-input').setValue(2);
    await wrapper.find('input[name="col-input"]').setValue(1);
    await wrapper.find('select[name="orientation-select"]').setValue('E');

    await wrapper.find('#place-button').trigger('click');
    expect(wrapper.find('#grid-place-2-1 #svg-east').exists()).toBe(true);

    await wrapper.find('#move-button').trigger('click');
    await wrapper.find('#move-button').trigger('click');
    await wrapper.find('#left-button').trigger('click');
    await wrapper.find('#move-button').trigger('click');

    expect(wrapper.find('#grid-place-3-3 #svg-north').exists()).toBe(true);

    await wrapper.find('#report-button').trigger('click');
    expect(wrapper.find('#report-message').text()).toEqual('Report: Robot is at (3, 3) and is facing N')
  });
});
