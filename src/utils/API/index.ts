import { QueryCache, useQuery } from "react-query"
import { APIResponseMultiple, APIResponseSingle } from "../../types/API"
import { Person } from "../../types/Person"
import { Planet } from "../../types/Planet"

export const baseUrl = "https://swapi.dev/api"
export const baseUrlAlt = "http://swapi.dev/api"

const query = (key: string) =>
  fetch(`${baseUrl}${key}`).then((res) => res.json())

export const cache = new QueryCache({
  defaultConfig: {
    queries: {
      staleTime: 60000,
      // cacheTime: 10000,
      queryFn: query,
    },
  },
})

export const noCache = new QueryCache({
  defaultConfig: {
    queries: {
      staleTime: 0,
      cacheTime: 0,
      queryFn: query,
    },
  },
})

export const prefetchPlanets = async () => {
  const cacheHit = cache.getQuery("/planets/")
  if (!cacheHit || cacheHit?.isStale()) {
    await cache.prefetchQuery("/planets/", () => query("/planets/"))
  }
}

export const usePlanets = () => {
  const result = useQuery<APIResponseMultiple<Planet>>("/planets/")

  return result
}

export const usePlanet = (id: string) => {
  const result = useQuery<APIResponseSingle<Planet>>(`/planets/${id}/`, {
    enabled: id,
    initialData: () => {
      const regexp = RegExp(`/planets/${id}`)

      const cacheHit = cache
        .getQueryData<APIResponseMultiple<Planet>>("/planets/")
        ?.results.find((d) => regexp.test(d.url))

      return cacheHit
    },
  })

  return result
}

export const prefetchPeople = async () => {
  const cacheHit = cache.getQuery("/people/")
  if (!cacheHit || cache.getQuery("/people/")?.isStale()) {
    await cache.prefetchQuery("/people/", () => query("/people/"))
  }
}

export const usePeople = () => {
  const result = useQuery<APIResponseMultiple<Person>>("/people/")

  return result
}

export const usePerson = (id: string) => {
  const result = useQuery<APIResponseSingle<Person>>(`/people/${id}/`, {
    enabled: id,
    initialData: () => {
      const regexp = RegExp(`/people/${id}`)

      const cacheHit = cache
        .getQueryData<APIResponseMultiple<Person>>("/people/")
        ?.results.find((d) => regexp.test(d.url))

      return cacheHit
    },
  })

  return result
}
