import React from "react"

import { fireEvent, render } from "@testing-library/react"

import { App } from "./App"

test('App', () => {
  const { container } = render(<App />)

  expect(container).toHaveTextContent('App')
})
