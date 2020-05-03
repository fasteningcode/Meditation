import { FilterMeditationPipe } from "../app/service/filter-meditation.pipe";

describe("FilterMeditationPipe", () => {
  it("create an instance", () => {
    const pipe = new FilterMeditationPipe();
    expect(pipe).toBeTruthy();
  });
});
