import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Categories, Home, SignIn, SignUp } from "./pages";
import { AuthProvider } from "./context/authContext";
import { MeetingProvider } from "./context/meetingContext"; // qo'shildi
import ChoosedGenre from "./pages/ChoosedGenre";
import MoviePage from "./pages/MoviePage";
import PrivateRoute from "./components/PrivateRoute";
import WelcomePage from "./pages/WelcomePage"; // yangi sahifa
import MeetingPage from "./pages/MeetingPage"; 

// 🔔 Sonner toasterni import qilamiz
import { Toaster } from "sonner";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/welcome",
      element: <WelcomePage />, // yangi sahifa
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "categories", element: <Categories /> },
        { path: "genres/:genre", element: <ChoosedGenre /> },
        { path: "movies/:id", element: <MoviePage /> },
        { 
          path: "meeting", 
          element: (
            <MeetingProvider> {/* MeetingProvider bilan o'ralgan */}
              <MeetingPage />
            </MeetingProvider>
          ) 
        }, 
      ],
    },
  ]);

  return (
    <AuthProvider>
      {/* 🔔 Toaster joylashuvi */}
      <Toaster richColors position="top-middle" />
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
