import "./App.css";
import AuthenticationForm from "./components/form_authentication";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AuthenticationForm />
    </div>
  );
}

export default App;
