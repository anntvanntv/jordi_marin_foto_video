import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
import { Bio } from './pages/Bio';
import { Contact } from './pages/Contact';
import { PhotoEditorial } from './pages/photo/EditorialPhoto';
import { PhotoFashion } from './pages/photo/FashionPhoto';
import { PhotoReport  } from './pages/photo/ReportPhoto';
import { VideoEditorial } from './pages/video/EditorialVideo';
import { VideoFashion } from './pages/video/FashionVideo';
import { VideoReport } from './pages/video/ReportVideo';
import { VideoTravel } from './pages/video/TravelVideo';
import { PhotoTravel } from './pages/photo/TravelPhoto';

import "./styles/header.css"
import "./styles/nav.css"
import "./styles/layout.css"
import "./styles/pages.css"
import "./styles/footer.css"




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        { index: true, element: <Home /> },
        { path: "bio", element: <Bio /> },
        { path: "contact", element: <Contact /> },
        { path: "photo/editorial", element: <PhotoEditorial /> },
        { path: "photo/fashion", element: <PhotoFashion /> },
        { path: "photo/report", element: <PhotoReport /> },
        { path: "video/editorial", element: <VideoEditorial /> },
        { path: "video/fashion", element: <VideoFashion /> },
        { path: "video/report", element: <VideoReport />},
        { path: "video/travel", element: <VideoTravel /> },
        { path: "photo/travel", element: <PhotoTravel />}
        
    ]
  }
]) 

export const App = () => {
  return <RouterProvider router={router} />;
};


