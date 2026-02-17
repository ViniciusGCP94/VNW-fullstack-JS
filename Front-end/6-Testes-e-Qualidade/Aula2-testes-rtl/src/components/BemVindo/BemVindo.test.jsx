import { render, screen } from "@testing-library/react"
import BemVindo from "./BemVindo"
import { expect } from "vitest"

test("exibe mensagem de boas vindas", ()=> {
    render(<BemVindo />)

    expect(
        screen.getByText("Bem vindo a aula de testes com RTL!")
    ).toBeInTheDocument()
})

