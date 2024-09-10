import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text",()=>{
  render(<App/>);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
})

test("plus button has correct text",()=>{
  render(<App/>);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
})

test("When the + button is pressed, the counter changes to 1",()=>{
  render(<App/>)
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
})

test("on/off button color is blue", () => {
  render(<App/>)
  const onoffbuttonElement = screen.getByTestId("on/off-button");
  expect(onoffbuttonElement).tobe({ backgroundColor: "blue"});
})

test("on/off button is pressed, -/+ button is blocked", () => {
  render(<App/>)
  const onoffbuttonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onoffbuttonElement);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toBeDisabled();
})
