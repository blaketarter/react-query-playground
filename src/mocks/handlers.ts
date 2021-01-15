import { rest } from "msw"
import { APIResponseMultiple, APIResponseSingle } from "../types/API"
import { Person } from "../types/Person"
import { Planet } from "../types/Planet"
import { baseUrl } from "../utils/API"
import { people, planets } from "../utils/API/mockData"

export const handlers = [
  rest.get(`${baseUrl}/planets/`, (_req, res, ctx) => {
    const response: APIResponseMultiple<Planet> = {
      count: 2,
      next: null,
      previous: null,
      results: planets,
    }

    return res(ctx.status(200), ctx.json(response))
  }),

  rest.get(`${baseUrl}/planets/:id/`, (req, res, ctx) => {
    const response: APIResponseSingle<Planet> =
      planets[parseInt(req.params.id) - 1]

    if (!response) {
      return res(ctx.status(404), ctx.json({ message: "Not Found" }))
    }

    return res(ctx.status(200), ctx.json(response))
  }),

  rest.get(`${baseUrl}/people/`, (_req, res, ctx) => {
    const response: APIResponseMultiple<Person> = {
      count: 2,
      next: null,
      previous: null,
      results: people,
    }

    return res(ctx.status(200), ctx.json(response))
  }),

  rest.get(`${baseUrl}/people/:id/`, (req, res, ctx) => {
    const response: APIResponseSingle<Person> =
      people[parseInt(req.params.id) - 1]

    if (!response) {
      return res(ctx.status(404), ctx.json({ message: "Not Found" }))
    }

    return res(ctx.status(200), ctx.json(response))
  }),
]
