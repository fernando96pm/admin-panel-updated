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
import { useContext, useEffect, useState } from "react";
import { Group } from "./entities/Group";
import Layout from "./components/Layout";
import useHttp from "./hooks/use-http";
import { Client } from "@stomp/stompjs";
import UserDummy from "./entities/UserDummy";
import AdminPanelContext from "./store/AdminPanelContext";

const BROKER_URL = "ws://localhost:8080/crysecWS";

const App = () => {
  const [selectedGroup, setSelectedGroup] = useState<Group>();
  const { companyHandler, usersHandler, groupsHandler, getDummyUsersHandler } =
    useHttp();

  const ctx = useContext(AdminPanelContext);

  function webSocketSetup() {
    const client = new Client();
    client.brokerURL = BROKER_URL;

    client.onConnect = function (frame) {
      client.subscribe("/topic/updatedUsers", (msg) => {
        let user: UserDummy = JSON.parse(msg.body);
        ctx.dummyUsersEditHandler(user);
      });

      client.subscribe("/topic/newUsers", (msg) => {
        let user: UserDummy = JSON.parse(msg.body);
        ctx.dummyUsersAddHandler(user);
      });
    };
    client.activate();
  }

  useEffect(() => {
    getDummyUsersHandler().then(() => webSocketSetup());
    // companyHandler();
    // usersHandler();
    // groupsHandler();
  }, []);

  const groupDetailsHandler = (group: Group) => {
    setSelectedGroup(group);
  };

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Layout>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Home />} />
            <Route path="/admin/users" element={<Users />} />
            <Route
              path="/admin/groups"
              element={<Groups onDetails={groupDetailsHandler} />}
            />
            <Route path="/admin/messages" element={<Messages />} />
            <Route path="/admin/graph" element={<Graph />} />
            <Route
              path="/admin/groups/:id"
              element={<GroupDetails group={selectedGroup!} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Layout>
    </ReactKeycloakProvider>
  );
};
export default App;
