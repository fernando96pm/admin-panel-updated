import { Route, Routes } from "react-router-dom";
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
import GroupDetails from "./pages/GroupDetails";
import { useEffect, useState } from "react";
import { Group } from "./entities/Group";
import Layout from "./components/Layout";
import useHttp from "./hooks/use-http";


const App = () => {
  const [selectedGroup, setSelectedGroup] = useState<Group>()
  const location = useLocation();
  const atLogin = location.pathname === "/";
  const { companyHandler, usersHandler, groupsHandler } = useHttp();

  useEffect(() => {
    companyHandler();
    usersHandler();
    groupsHandler();
  }, []);

  const groupDetailsHandler = (group: Group) => {
    setSelectedGroup(group)
  }

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      {!atLogin && <Layout>
        <div className="">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Home />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/groups" element={ <Groups onDetails={groupDetailsHandler}/>} />
            <Route path="/admin/messages" element={<Messages />} />
            <Route path="/admin/graph" element={<Graph />} />
            <Route path="/admin/groups/:id" element={<GroupDetails group={selectedGroup!}/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        </Layout>}
    </ReactKeycloakProvider>
  );
};
export default App;
