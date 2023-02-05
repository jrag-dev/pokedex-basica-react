import { createBrowserRouter } from "react-router-dom";


import HomePage from "../pages/HomePage";
import NotFound404Page from "../pages/NotFound404Page";
import PokemonPage from "../pages/PokemonPage";
import LayoutPublic from "../layouts/LayoutPublic";
import SearchPage from "../pages/SearchPage";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic/>,
    errorElement: <NotFound404Page/>,
    children: [
      {
        errorElement: <NotFound404Page/>,
        children: [
          {
            index: true,
            element: <HomePage/>,
          },
          {
            path: "/pokemon/:id",
            element: <PokemonPage/>,
          },
          {
            path: "/pokemon/search",
            element: <SearchPage/>,
          }
        ]
      }
    ]
  }
])