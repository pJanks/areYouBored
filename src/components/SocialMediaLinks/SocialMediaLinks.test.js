import { render, screen, waitFor } from "@testing-library/react"
import { SocialMediaLinks } from "./SocialMediaLinks"

describe("SocialMediaLinks", () => {
  it("should match snapshot", () => {
    const RenderedSocialMediaLinks = render(<SocialMediaLinks />)
    expect(RenderedSocialMediaLinks).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="sc-gsTCUz cIiuFc"
            >
              <a
                aria-label="my github profile"
                href="https://github.com/pJanks"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="Github icon"
                  class="sc-bdfBwQ bXibue"
                  src="github_icon.png"
                />
              </a>
              <a
                aria-label="my linkedin profile"
                href="https://linkedin.com/in/johnnykcassidy"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="Linkedin icon"
                  class="sc-bdfBwQ bXibue"
                  src="linkedin_icon.png"
                />
              </a>
              <a
                aria-label="my twitter profile"
                href="https://twitter.com/pJanksio"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="Twitter icon"
                  class="sc-bdfBwQ bXibue"
                  src="twitter_icon.png"
                />
              </a>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="sc-gsTCUz cIiuFc"
          >
            <a
              aria-label="my github profile"
              href="https://github.com/pJanks"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Github icon"
                class="sc-bdfBwQ bXibue"
                src="github_icon.png"
              />
            </a>
            <a
              aria-label="my linkedin profile"
              href="https://linkedin.com/in/johnnykcassidy"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Linkedin icon"
                class="sc-bdfBwQ bXibue"
                src="linkedin_icon.png"
              />
            </a>
            <a
              aria-label="my twitter profile"
              href="https://twitter.com/pJanksio"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Twitter icon"
                class="sc-bdfBwQ bXibue"
                src="twitter_icon.png"
              />
            </a>
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
