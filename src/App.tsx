import { Provider } from "react-redux";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/app/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
