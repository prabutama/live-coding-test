
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Makanan/List";
import ListMakanan from "../pages/Makanan/List";
import MakananDetail from "../pages/Makanan/_id";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ListMakanan/>,
    },
    {
        path: "/makanan/:id",
        element: <MakananDetail/>
    }
]);

export default router;
