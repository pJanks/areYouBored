import { render, screen, waitFor } from "@testing-library/react"
import { AboutInfo } from "./AboutInfo"


describe("AboutInfo", () => {
  it("should match snapshot", () => {
    const setIsAboutInfoActive = jest.fn()
    const RenderedAboutInfo = render(
      <AboutInfo setIsAboutInfoActive={setIsAboutInfoActive} />
    )

    expect(RenderedAboutInfo).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="sc-bdfBwQ fJbLbc"
            >
              <p
                class="sc-gsTCUz bgsQDd"
              >
                Are you bored? This app can help you find something to do! You can either pick any random activity, a FREE random activity, or filter a random activity by type.
                <button
                  class="sc-dlfnbm htNczv"
                >
                  Close
                </button>
              </p>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="sc-bdfBwQ fJbLbc"
          >
            <p
              class="sc-gsTCUz bgsQDd"
            >
              Are you bored? This app can help you find something to do! You can either pick any random activity, a FREE random activity, or filter a random activity by type.
              <button
                class="sc-dlfnbm htNczv"
              >
                Close
              </button>
            </p>
          </div>
        </div>,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `)
  })
})
