import React from "React";
import { render, screen, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Form from "./InputOutputForm";
import Context from "../../helpers/context/context";

describe("Component", () => {
    const setProblemInfo = jest.fn();
    const problemInfo = "";

    beforeEach(() => {
        render(
            <Context.Provider value={{problemInfo, setProblemInfo}}>
                <Form />
            </Context.Provider>
        );
    });

    it('Should render', () => {
        const formComponent = screen.getByText('Agregue un Caso de Prueba:');
        expect(formComponent).toBeInTheDocument();
    });

    it("Should have empty input and output fields", () => {
        const inputField = document.querySelector("[name=input]");
        const outputField = document.querySelector("[name=output]");
        expect(inputField.value).toBe("");
        expect(outputField.value).toBe("");
    });

    it("Should have input value '1' and output value '2'", () => {
        const inputField = document.querySelector("[name=input]");
        const outputField = document.querySelector("[name=output]");
        act(() => {
            userEvent.type(inputField, "1");
        });
        act(() => {
            userEvent.type(outputField, "2");
        });
        expect(inputField.value).toBe("1");
        expect(outputField.value).toBe("2");
    });

})