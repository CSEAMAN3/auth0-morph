import "./App.css";

import LoginButton from "./Login";
import LogoutButton from "./Logout";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <p>Auth-0 Morph</p>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
