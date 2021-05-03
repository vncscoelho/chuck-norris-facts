import { shallowMount, createLocalVue } from "@vue/test-utils";
import PageHeader from "@/components/PageHeader.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("PageHeader.vue", () => {
  let wrapper;
  let searchButton;
  let luckyButton;
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      fetchFacts: jest.fn(),
      getFirstResult: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
    wrapper = shallowMount(PageHeader, { store, localVue });
    searchButton = wrapper.findComponent({ ref: "search-button" });
    luckyButton = wrapper.findComponent({ ref: "lucky-button" });
  });

  it("Dispatchs 'fetchFacts' when 'Search' is clicked", async () => {
    await wrapper.setData({
      currentQuery: "Punch",
    });
    searchButton.vm.$emit("click");
    expect(actions.fetchFacts).toHaveBeenCalled();
  });

  it("Dispatchs 'getFirstResult' when 'Feeling lucky' is clicked", async () => {
    await wrapper.setData({
      currentQuery: "Kick",
    });
    luckyButton.vm.$emit("click");
    expect(actions.getFirstResult).toHaveBeenCalled();
  });

  /* Should work for the other case since it uses the same methods */
  it("Doesn't dispatchs 'getFirstResult' if query has less than 3 characters", async () => {
    await wrapper.setData({
      currentQuery: "A",
    });
    luckyButton.vm.$emit("click");
    expect(actions.getFirstResult).not.toHaveBeenCalled();
  });
});
