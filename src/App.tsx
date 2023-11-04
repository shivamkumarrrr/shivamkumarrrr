//@ts-ignore
import GitProfile from "@arifszn/gitprofile";
import "@arifszn/gitprofile/dist/style.css";
//@ts-ignore
import config from "./gitprofileconfig.js";

function App() {
  return <GitProfile config={config} />;
}

export default App;
