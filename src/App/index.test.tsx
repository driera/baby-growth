import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";
import userEvent from "@testing-library/user-event";

describe("Page", () => {
  it("Shows a new line after submitting weight form", () => {
    render(<App />);

    userEvent.click(screen.getByText(/Weight in grams/i));
    userEvent.type(screen.getByRole("textbox"), "3000");
    userEvent.click(screen.getByRole("button", { name: /submit weight/i }));

    expect(screen.getByText(/new entry: 3000/i));
  });

  it("removes decimals from input", () => {
    render(<App />);

    userEvent.click(screen.getByText(/weight in grams/i));
    userEvent.type(screen.getByRole("textbox"), "1000.5");
    userEvent.click(screen.getByRole("button", { name: /submit weight/i }));

    expect(screen.getByText("new entry: 1000 g"));
  });
});
