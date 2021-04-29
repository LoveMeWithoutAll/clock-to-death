import { shallowMount } from "@vue/test-utils";
import Timer from "@/components/timer.vue";

describe("timer.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(Timer);
    expect(wrapper.exists()).toBe(true);
  });
});
