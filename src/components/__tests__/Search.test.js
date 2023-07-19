import { Provider } from "react-redux";
import Body from "./../Body";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";
import store from './../../Utils/store';
const { render, waitFor } = require("@testing-library/react");
import '@testing-library/jest-dom'
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
