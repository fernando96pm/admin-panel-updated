import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import { useLocation } from "react-router-dom";
import Users from "./pages/Users";
import Graph from "./pages/Grapht";
import Groups from "./pages/Groups";
import Messages from "./pages/Messages";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import PrivateRoute from "./helpers/PrivateRoute";


const App = () => {
  const location = useLocation();
  const atLogin = location.pathname === "/";

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      {!atLogin && <Sidebar>
        <div className="flex flex-1 h-screen min-h-screen bg-gradient-to-b from-[#c5c5c5] to-[#929292]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Home />} />
            <Route path="/admin/users" element={<Users />} />
            <Route
              path="/admin/groups"
              element={
                <PrivateRoute>
                  <Groups />
                </PrivateRoute>
              }
            />
            <Route path="/admin/messages" element={<Messages />} />
            <Route path="/admin/graph" element={<Graph />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        </Sidebar>}
    </ReactKeycloakProvider>
  );
};
export default App;
