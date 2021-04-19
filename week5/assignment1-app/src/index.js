import React from "react"
import ReactDOM from "react-dom"
import {BrowseRouter} from "react-router-dom"

import App from "./App"

ReactDom.render(
    <BrowseRouter>
        <App />
    </BrowseRouter>,
 document.getElementById('root')

)