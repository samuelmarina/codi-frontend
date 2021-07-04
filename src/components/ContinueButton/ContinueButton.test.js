import React from "React";
import { render, screen, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ContinueButton from "./ContinueButton";

describe("<ContinueButton />", () => {
    const buttonText = "This is the text";
    const onClick = jest.fn();

    beforeEach(() => {
        render(
            <ContinueButton
                buttonText={buttonText}
                onClick={onClick}
            />
        );
    });

    it('Should render', () => {
        const button = screen.getByTestId("continueButton");
        expect(button).toBeInTheDocument();
    });

    it("Should execute onClick function", () => {
        const button = screen.getByTestId("continueButton");
        userEvent.click(button);
        expect(onClick).toBeCalled();
    });

    it("Should contain buttonText", () => {
        const textElement = screen.getByText(buttonText);
        expect(textElement).toBeInTheDocument();
    });
})

