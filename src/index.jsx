import React from "react"
import AppRoutes from "./app/AppRoutes"
import { createRoot } from "react-dom/client"
import "./css/style.css"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(<AppRoutes />)
