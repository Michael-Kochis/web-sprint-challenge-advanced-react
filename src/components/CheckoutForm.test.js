import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test("tests run", ()=> {
    expect(true).toBe(true);
})

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText("React Plants");
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText("First Name:");
    const lastName = screen.getByLabelText("Last Name:");
    const address = screen.getByLabelText("Address:");
    const city = screen.getByLabelText("City:");
    const state = screen.getByLabelText("State:");
    const zip = screen.getByLabelText("Zip:");
    const button = screen.getByRole("button");

    const fnString = "Warren";
    const lnString = "Longmire";
    const aString = "555 Some Road";
    const cString = "Washington";
    const sString = "DC";
    const zString = "55555";

    userEvent.type(firstName, fnString);
    userEvent.type(lastName, lnString);
    userEvent.type(address, aString);
    userEvent.type(city, cString);
    userEvent.type(state, sString);
    userEvent.type(zip, zString);

    button.click();
    let view = screen.getByText(fnString);
    view = screen.getByText(lnString);
    view = screen.getByText(aString);
    view = screen.getByText(cString);
    view = screen.getByText(sString);
    view = screen.getByText(zString);
    expect(view).toBeInTheDocument();
});
