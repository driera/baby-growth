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

    expect(screen.getByText(/3000 g/i)).toBeInTheDocument();
  });

  it("removes decimals from input", () => {
    render(<App />);

    userEvent.click(screen.getByText(/weight in grams/i));
    userEvent.type(screen.getByRole("textbox"), "1000.5");
    userEvent.click(screen.getByRole("button", { name: /submit weight/i }));

    expect(screen.getByText(/1000 g/i)).toBeInTheDocument();
  });

  it("does not add a new line when input is empty", () => {
    render(<App />);

    userEvent.click(screen.getByText(/weight in grams/i));
    userEvent.type(screen.getByRole("textbox"), "");
    userEvent.click(screen.getByRole("button", { name: /submit weight/i }));

    expect(screen.queryByText(/new entry/i)).not.toBeInTheDocument();
  });

  it("shows a date in each new weight registry", () => {
    jest
      .spyOn(Date, "now")
      .mockImplementation(() =>
        new Date(Date.UTC(2021, 3, 28, 16, 15)).getTime()
      );
    render(<App />);

    userEvent.click(screen.getByText(/weight in grams/i));
    userEvent.type(screen.getByRole("textbox"), "4000");
    userEvent.click(screen.getByRole("button", { name: /submit weight/i }));

    expect(
      screen.getByText("new entry: 28/4/2021 18:15 - 4000 g")
    ).toBeInTheDocument();

    jest.spyOn(Date, "now").mockRestore();
  });

  it("avoids anything else than numbers in input", () => {
    render(<App />);

    userEvent.click(screen.getByText(/weight in grams/i));
    userEvent.type(screen.getByRole("textbox"), "this is a text");
    userEvent.click(screen.getByRole("button", { name: /submit weight/i }));

    expect(screen.queryByText(/new entry/i)).not.toBeInTheDocument();
  });
});
