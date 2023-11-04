//@ts-ignore
import GitProfile from "@arifszn/gitprofile";
import "@arifszn/gitprofile/dist/style.css";

function App() {
  return (
    <GitProfile
      config={{
        github: {
          username: "shivamkumarrrr",
        },
      }}
    />
  );
}

export default App;
