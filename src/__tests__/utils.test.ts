import filterProduct from "../utils/filterProduct";

const data = [
  {
    id: 1,
    name: "test",
    price: 10,
    quantity: 6,
  },
  {
    id: 2,
    name: "foobar",
    price: 6,
    quantity: 10,
  },
];

describe("filter products", () => {
  //  fix test
  it("filter by name", () => {
    expect(data.filter(filterProduct({ name: "Test" })).length).toBe(1);
  });

  //  test multi-filters e.g. by `name` and `price`
  it("filter by name and price", () => {
    expect(
      data.filter(filterProduct({ name: "foobar", price: 3 })).length
    ).toBe(1);
  });
  //  test multi-filters

  it("test multi-filters", () => {
    expect(
      data.filter(filterProduct({ name: "test", price: 6, quantity: 2 })).length
    ).toBe(1);
  });

  it("no matches", () => {
    expect(data.filter(filterProduct({ name: "javascript" })).length).toBe(0);
  });
});
