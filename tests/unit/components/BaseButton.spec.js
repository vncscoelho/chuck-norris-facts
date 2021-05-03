import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton.vue";

describe("BaseButton.vue", () => {
  let wrapper;
  let button;

  beforeEach(() => {
    wrapper = shallowMount(BaseButton);
    button = wrapper.find("button.base-button");
  });

  it("Emits a click event when it's clicked", () => {
    button.trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });

  it("Insert primary class when Primary is truthy", async () => {
    await wrapper.setProps({
      primary: true,
    });
    expect(wrapper.classes()).toContain("base-button--primary");
  });
});
