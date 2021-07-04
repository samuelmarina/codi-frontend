import React from "React";
import { render, screen } from '@testing-library/react';
import LoginButton from "./LoginButton";
import Context from "../../helpers/context/context";

describe("<LoginButton />", () => {
    const setUser = jest.fn();
    const setIsLoading = jest.fn();

    it("Should render Google button", () => {
        const type = "google";
        render(
            <Context.Provider value={{ setUser, setIsLoading }}>
                <LoginButton
                    type={type}
                />
            </Context.Provider>
        );

        const googleButton = screen.getByText("Log in with Google");
        expect(googleButton).toBeInTheDocument();
    });

    it("Should render GitHub button", () => {
        const type = "github";
        render(
            <Context.Provider value={{ setUser, setIsLoading }}>
                <LoginButton
                    type={type}
                />
            </Context.Provider>
        );

        const googleButton = screen.getByText("Log in with GitHub");
        expect(googleButton).toBeInTheDocument();
    });
})