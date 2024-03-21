import { Route, Routes } from "react-router-dom"
import { NotFoundPage,HomePage, CalculatorPage, PromptPage } from "./Pages"


export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/prompt" element={<PromptPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
    }