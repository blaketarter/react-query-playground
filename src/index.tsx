import React from "react"
import ReactDOM from "react-dom"
import { App } from "./components/App"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"

if (
  process.env.REACT_APP_ENABLE_MSW &&
  process.env.NODE_ENV === "development"
) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("./mocks/browser")

  worker.start()
} else {
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
