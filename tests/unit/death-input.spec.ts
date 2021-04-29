import { shallowMount } from "@vue/test-utils";
import DeathInput from "@/components/death-input.vue";

describe("death-input.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(DeathInput);
    expect(wrapper.exists()).toBe(true);
  });
});
