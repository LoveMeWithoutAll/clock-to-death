import { shallowMount } from "@vue/test-utils";
import BirthInput from "@/components/birth-input.vue";

describe("birth-input.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(BirthInput);
    expect(wrapper.exists()).toBe(true);
  });
});
