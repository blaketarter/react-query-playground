import { baseUrl, baseUrlAlt } from "../API"

export const getId = (url: string) =>
  url.replace(baseUrl, "").replace(baseUrlAlt, "")
