import React, { useContext } from "React";
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Form from "./InputOutputForm";
import Context from "../../helpers/context/context";

describe("Component", () => {
    const setProblemInfo = jest.fn();
    const problemInfo = "";

    beforeEach(() => {
        render(
            <Context.Provider value={{problemInfo,}}>
                <Form />
            </Context.Provider>
        );
    });

    it('Should render', () => {
        const formComponent = screen.getByText('Agregue un Caso de Prueba:');
        expect(formComponent).toBeInTheDocument();
    });



})