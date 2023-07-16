import { RouterProvider } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import router from "./routes/routes";

function App() {
  const authCheck = useAuthCheck();

  if (!authCheck) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} />;
}

export default App;
