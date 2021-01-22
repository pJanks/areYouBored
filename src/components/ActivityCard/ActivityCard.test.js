import { render, screen, waitFor } from "@testing-library/react"
import { ActivityCard } from "./ActivityCard"

describe("ActivityCard", () => {
  it("should match snapshot when favorite page and about info page are inactive", () => {
    const mockSetActivity = jest.fn()
    const mockSetIsViewFavoritesActive = jest.fn()
    const mockSetIsAboutInfoActive = jest.fn()
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
    const RenderedActivityCard = render(
      <ActivityCard
        appError={""}
        currentActivity={mockActivity}
        setActivity={mockSetActivity}
        isAboutInfoActive={false}
        setIsAboutInfoActive={mockSetIsAboutInfoActive}
        isViewFavoritesActive={false}
        setIsViewFavoritesActive={mockSetIsViewFavoritesActive}
      />
    )
    expect(RenderedActivityCard).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="sc-pFZIQ hBQrCZ"
            >
              <section
                class="sc-jrAGrp jlsYQA"
              >
                <div
                  class="sc-kEjbxe lewQfq"
                >
                  <img
                    alt="Click to favorite activity"
                    class="sc-iqHYGH ebPQul"
                    src="favorite_inactive.png"
                    tabindex="0"
                  />
                </div>
                <h4
                  class="sc-bqyKva ceXEdJ"
                >
                  Activity: 
                  Learn how to make an Alexa skill
                </h4>
                <h3
                  class="sc-kstrdz kBGJaC"
                >
                  Activity Type: 
                  education
                </h3>
                <h3
                  class="sc-kstrdz kBGJaC"
                >
                  Participants: 
                  1
                </h3>
                <h3
                  class="sc-kstrdz kBGJaC"
                >
                  Link: 
                  <a
                    class="sc-hBEYos eSQjyu"
                    href="https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html"
                  >
                    https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html
                  </a>
                </h3>
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
              </section>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="sc-pFZIQ hBQrCZ"
          >
            <section
              class="sc-jrAGrp jlsYQA"
            >
              <div
                class="sc-kEjbxe lewQfq"
              >
                <img
                  alt="Click to favorite activity"
                  class="sc-iqHYGH ebPQul"
                  src="favorite_inactive.png"
                  tabindex="0"
                />
              </div>
              <h4
                class="sc-bqyKva ceXEdJ"
              >
                Activity: 
                Learn how to make an Alexa skill
              </h4>
              <h3
                class="sc-kstrdz kBGJaC"
              >
                Activity Type: 
                education
              </h3>
              <h3
                class="sc-kstrdz kBGJaC"
              >
                Participants: 
                1
              </h3>
              <h3
                class="sc-kstrdz kBGJaC"
              >
                Link: 
                <a
                  class="sc-hBEYos eSQjyu"
                  href="https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html"
                >
                  https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html
                </a>
              </h3>
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
            </section>
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

  it("should match different snapshot when favorite page is active", () => {
    const mockSetActivity = jest.fn()
    const mockSetIsViewFavoritesActive = jest.fn()
    const mockSetIsAboutInfoActive = jest.fn()
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
    const RenderedActivityCard = render(
      <ActivityCard
        appError={""}
        currentActivity={mockActivity}
        setActivity={mockSetActivity}
        isAboutInfoActive={false}
        setIsAboutInfoActive={mockSetIsAboutInfoActive}
        isViewFavoritesActive={true}
        setIsViewFavoritesActive={mockSetIsViewFavoritesActive}
      />
    )
    expect(RenderedActivityCard).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <h1
              class="sc-dQppl liEsRZ"
            >
              You Have No Favorites!
            </h1>
          </div>
        </body>,
        "container": <div>
          <h1
            class="sc-dQppl liEsRZ"
          >
            You Have No Favorites!
          </h1>
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

  it("should match different snapshot when about info page is active", () => {
    const mockSetActivity = jest.fn()
    const mockSetIsViewFavoritesActive = jest.fn()
    const mockSetIsAboutInfoActive = jest.fn()
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
    const RenderedActivityCard = render(
      <ActivityCard
        appError={""}
        currentActivity={mockActivity}
        setActivity={mockSetActivity}
        isAboutInfoActive={true}
        setIsAboutInfoActive={mockSetIsAboutInfoActive}
        isViewFavoritesActive={false}
        setIsViewFavoritesActive={mockSetIsViewFavoritesActive}
      />
    )
    expect(RenderedActivityCard).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="sc-pFZIQ hBQrCZ"
            >
              <div
                class="sc-gKsewC bTkCNG"
              >
                <p
                  class="sc-iBPRYJ dJPnKX"
                >
                  Are you bored? This app can help you find something to do! You can either pick any random activity, a FREE random activity, or filter a random activity by type.
                  <button
                    class="sc-fubCfw iuCyKv"
                  >
                    Close
                  </button>
                </p>
              </div>
              <section
                class="sc-jrAGrp jlsYQA"
              >
                <div
                  class="sc-kEjbxe lewQfq"
                >
                  <img
                    alt="Click to favorite activity"
                    class="sc-iqHYGH ebPQul"
                    src="favorite_inactive.png"
                    tabindex="0"
                  />
                </div>
                <h4
                  class="sc-bqyKva ceXEdJ"
                >
                  Activity: 
                  Learn how to make an Alexa skill
                </h4>
                <h3
                  class="sc-kstrdz kBGJaC"
                >
                  Activity Type: 
                  education
                </h3>
                <h3
                  class="sc-kstrdz kBGJaC"
                >
                  Participants: 
                  1
                </h3>
                <h3
                  class="sc-kstrdz kBGJaC"
                >
                  Link: 
                  <a
                    class="sc-hBEYos eSQjyu"
                    href="https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html"
                  >
                    https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html
                  </a>
                </h3>
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
              </section>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="sc-pFZIQ hBQrCZ"
          >
            <div
              class="sc-gKsewC bTkCNG"
            >
              <p
                class="sc-iBPRYJ dJPnKX"
              >
                Are you bored? This app can help you find something to do! You can either pick any random activity, a FREE random activity, or filter a random activity by type.
                <button
                  class="sc-fubCfw iuCyKv"
                >
                  Close
                </button>
              </p>
            </div>
            <section
              class="sc-jrAGrp jlsYQA"
            >
              <div
                class="sc-kEjbxe lewQfq"
              >
                <img
                  alt="Click to favorite activity"
                  class="sc-iqHYGH ebPQul"
                  src="favorite_inactive.png"
                  tabindex="0"
                />
              </div>
              <h4
                class="sc-bqyKva ceXEdJ"
              >
                Activity: 
                Learn how to make an Alexa skill
              </h4>
              <h3
                class="sc-kstrdz kBGJaC"
              >
                Activity Type: 
                education
              </h3>
              <h3
                class="sc-kstrdz kBGJaC"
              >
                Participants: 
                1
              </h3>
              <h3
                class="sc-kstrdz kBGJaC"
              >
                Link: 
                <a
                  class="sc-hBEYos eSQjyu"
                  href="https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html"
                >
                  https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html
                </a>
              </h3>
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
            </section>
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
