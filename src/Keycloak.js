import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://localhost:8080/",
 realm: "cry",
 clientId: "crysec-admin-panel",
});

export default keycloak;