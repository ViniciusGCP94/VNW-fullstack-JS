import { render, screen, fireEvent } from "@testing-library/react"
import InputNome from "./InputNome"
import { expect } from "vitest"

test("permite digitar no input", () => {
    render(<InputNome/>)

    fireEvent.change(
        screen.getByPlaceholderText("Digite seu nome"),
        { target: { value: "Jef"} }
    )

    expect(
        screen.getByDisplayValue("Jef")
    ).toBeInTheDocument()
})