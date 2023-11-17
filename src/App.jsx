import React from "react";
import Index from "./components/users/Index";
import Create from "./components/users/Create";
import Details from "./components/users/Details";
import { Route , Routes} from "react-router-dom"

export default function App() {
  return (
    <Routes>
      <Route parth='/'  element={<Index/>} />
      <Route path='/users/index' element={<Index/>} />
      <Route path='/users/create' element={<Create/>} />
      <Route path='/users/:id' element={<Details/>} />
      <Route path='*' element={<h2>User not found</h2>} />
    </Routes>
  )
}