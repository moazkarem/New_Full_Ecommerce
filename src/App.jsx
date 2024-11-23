import { RouterProvider } from "react-router";
import router from "./router/Routere";
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
