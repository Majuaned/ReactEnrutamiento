import { Route, Routes } from "react-router-dom"
import { TodosScreen } from "../pages/TodosScreen"
import { NavBar } from "../ui/NavBar"

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/todos" element={ <TodosScreen/> } />
      </Routes>
    </>
  )
}
