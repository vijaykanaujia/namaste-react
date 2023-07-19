const { render } = require("@testing-library/react");
import Header from "../Header";
import { Provider } from "react-redux";
import store from "./../../Utils/store";
import { StaticRouter } from "react-router-dom/server";
import { LOGO_URL } from "../../Utils/constants";

test("logo should load on rendering header", async () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe(LOGO_URL);
});

test("Online Status shuld be gren on render header", async () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("isOnline");
  expect(onlineStatus.innerHTML).toBe("🟢");
});

test("Cart should be 0 on render header", async () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const cartStatus = header.getByTestId("cartStatus");
    expect(cartStatus.innerHTML).toBe("0");
  });
