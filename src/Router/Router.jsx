import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddCraft from "../Pages/AddCraft";
import AllArtAndCraft from "../Pages/AllArtAndCraft";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyArtAndCraft from "../Pages/MyArtAndCraft";
import Register from "../Pages/Register";
import ArtAndCraftCategoriesSection from "../components/ArtAndCraftCategoriesSection";
import CraftItemsSection from "../components/CraftItemsSection";
import ProtectorRuout from "../components/ProtectorRuout";
import UpdateProduct from "../components/UpdateProduct";
import ViewDetailsCraftItem from "../components/ViewDetailsCraftItem";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/craftItemsSection',
                element: <CraftItemsSection></CraftItemsSection>
            },
            {
                path: '/ArtCraftCategoriesSection',
                element: <ArtAndCraftCategoriesSection></ArtAndCraftCategoriesSection>
            },
            {
                path: '/viewDetailsCraftItem/:id',
                element: <ProtectorRuout>
                    <ViewDetailsCraftItem></ViewDetailsCraftItem>
                </ProtectorRuout>
            },
            {
                path: '/allArtAndCraft',
                element: <AllArtAndCraft></AllArtAndCraft>
            },
            {
                path: '/addCraft',
                element: <ProtectorRuout>
                    <AddCraft></AddCraft>
                </ProtectorRuout>
            },
            {
                path: '/myArtAndCraft',
                element: <ProtectorRuout>
                    <MyArtAndCraft></MyArtAndCraft>
                </ProtectorRuout>
            },
            {
                path: '/update/:id',
                element: <ProtectorRuout>
                    <UpdateProduct></UpdateProduct>
                </ProtectorRuout>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Router;