import { shallowMount } from "@vue/test-utils";
import SearchBox from "@/components/SearchBox.vue";

describe("SearchBox.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SearchBox);
  });

  it("Emits a input event when Value is changed", () => {
    wrapper.find("input.search-box__input").setValue("Kick");
    expect(wrapper.emitted().input[0]).toEqual(["Kick"]);
  });

  it("Displays error when Error is truthy", async () => {
    await wrapper.setProps({
      error: true,
    });
    expect(wrapper.find(".search-box__error").isVisible()).toBeTruthy();
  });

  it("Displays error message correctly", async () => {
    await wrapper.setProps({
      error: true,
      errorText: "Error",
    });
    expect(wrapper.find(".search-box__error").text()).toMatch("Error");
  });
});
