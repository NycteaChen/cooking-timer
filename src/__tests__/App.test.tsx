import { render } from "@testing-library/react";
import App from "@/App";

test("Test App.tsx exists", async () => {
  render(<App />);
  expect(true).toBeTruthy();
});
