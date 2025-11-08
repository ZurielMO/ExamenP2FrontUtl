import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Registro from "./Registro";
import Gafete, { loaderGafete } from "./Gafete";
import Participantes, { loaderParticipantes } from "./Participantes";
import LayoutPublic from "../layout/LayoutPublic";

//Creamos el router y su configuración básica
export const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },

  {
    element: <LayoutPublic />,
    children: [
      {
        path: "/participantes",
        element: <Participantes />,
        loader: loaderParticipantes,
      },
      {
        path: "/registro",
        element: <Registro />,
      },
      {
        path: "/gafete/:id",
        element: <Gafete />,
        loader: loaderGafete,
      },
    ],
  },

]);