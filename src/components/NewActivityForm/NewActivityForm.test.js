import { render, screen, waitFor } from "@testing-library/react"
import { NewActivityForm } from "./NewActivityForm"

describe("NewActivityForm", () => {
  it("should match snapshot", () => {
    const mockSetActivity = jest.fn()
    const mockSetIsFavorite = jest.fn()
    const mockActivity = {
      activity: "Learn how to make an Alexa skill",
      type: "education",
      participants: 1,
      price: 0,
      link:
        "https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html",
      key: "1592381",
      accessibility: 0.1,
    }
    const RenderedNewActivityForm = render(
      <NewActivityForm
        setActivity={mockSetActivity}
        currentActivity={mockActivity}
        setIsFavorite={mockSetIsFavorite}
      />
    )
    expect(RenderedNewActivityForm).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <form
              class="sc-bdfBwQ fwUEEt"
            >
              <label
                for="activity-type"
              />
              <span
                class="sc-gsTCUz jtpdXf"
              />
              <select
                class="sc-hKgILt iQURkK"
                id="activity-type"
                name="activity-type"
              >
                <option
                  disabled=""
                  hidden=""
                  selected=""
                  value="Select Activity Type"
                >
                  Select Activity Type
                </option>
                <option
                  value="busywork"
                >
                  Busywork
                </option>
                <option
                  value="charity"
                >
                  Charity
                </option>
                <option
                  value="cooking"
                >
                  Cooking
                </option>
                <option
                  value="diy"
                >
                  DIY
                </option>
                <option
                  value="education"
                >
                  Education
                </option>
                <option
                  value="music"
                >
                  Music
                </option>
                <option
                  value="recreational"
                >
                  Recreational
                </option>
                <option
                  value="relaxation"
                >
                  Relaxation
                </option>
                <option
                  value="social"
                >
                  Social
                </option>
              </select>
              <button
                class="sc-dlfnbm cnBrkR"
                type="button"
              >
                Get Random Activity by Type
              </button>
              <button
                class="sc-dlfnbm cnBrkR"
                type="button"
              >
                Get Random Activity
              </button>
              <button
                class="sc-dlfnbm cnBrkR"
                type="submit"
              >
                Get Random Free Activity
              </button>
            </form>
          </div>
        </body>,
        "container": <div>
          <form
            class="sc-bdfBwQ fwUEEt"
          >
            <label
              for="activity-type"
            />
            <span
              class="sc-gsTCUz jtpdXf"
            />
            <select
              class="sc-hKgILt iQURkK"
              id="activity-type"
              name="activity-type"
            >
              <option
                disabled=""
                hidden=""
                selected=""
                value="Select Activity Type"
              >
                Select Activity Type
              </option>
              <option
                value="busywork"
              >
                Busywork
              </option>
              <option
                value="charity"
              >
                Charity
              </option>
              <option
                value="cooking"
              >
                Cooking
              </option>
              <option
                value="diy"
              >
                DIY
              </option>
              <option
                value="education"
              >
                Education
              </option>
              <option
                value="music"
              >
                Music
              </option>
              <option
                value="recreational"
              >
                Recreational
              </option>
              <option
                value="relaxation"
              >
                Relaxation
              </option>
              <option
                value="social"
              >
                Social
              </option>
            </select>
            <button
              class="sc-dlfnbm cnBrkR"
              type="button"
            >
              Get Random Activity by Type
            </button>
            <button
              class="sc-dlfnbm cnBrkR"
              type="button"
            >
              Get Random Activity
            </button>
            <button
              class="sc-dlfnbm cnBrkR"
              type="submit"
            >
              Get Random Free Activity
            </button>
          </form>
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
