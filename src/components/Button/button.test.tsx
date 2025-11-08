import { Button } from './index';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from "@jest/globals";

describe("Button tests", () => {
    test("should render button", () => {
        render(<Button onClick={() => { }}> Click me </Button>);
        const element = screen.getByTestId("button-test");
        expect(element).toBeTruthy();
    })
})