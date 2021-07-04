import React from "React";
import { render, screen } from '@testing-library/react';
import DifficultyBox from "./DifficultyBox";

describe("<DifficultyBox />", () => {
    const title = "Titulo";
    const titleColor = "white";
    const difficulty = "easy";
    const content = "Esto es lo que va adentro";

    beforeEach(() => {
        render(
            <DifficultyBox
                title={title}
                titleColor={titleColor}
                difficulty={difficulty}
            >
                {content}
            </DifficultyBox>
        );
    });

    it("Should render", () => {
        const boxComponent = screen.getByTestId("difficultyGrid");
        expect(boxComponent).toBeInTheDocument();
    });

    it("Should contain title and content", () => {
        const titleField = screen.getByText(title);
        const contentField = screen.getByText(content);

        expect(titleField).toBeInTheDocument();
        expect(contentField).toBeInTheDocument();
    });
})