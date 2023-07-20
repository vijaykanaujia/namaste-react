import { Provider } from "react-redux";
import Body from "./../Body";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";
import store from "./../../Utils/store";
const {
  render,
  waitFor,
  screen,
  fireEvent,
} = require("@testing-library/react");
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});
test("Shimmer should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");
  waitFor(() => expect(shimmer.innerHTML).toBeInTheDocument());
});

test("Restaurant should load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
});

test("test input box search load data", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });
  const input = body.getByTestId("search-input");
  fireEvent.change(input, {
    target: {
      value: "sardar",
    },
  });
  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(2);
});
