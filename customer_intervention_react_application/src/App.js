import "./App.css";
import AuthenticationForm from "./components/form_authentication";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column">
      <Header />

      <AuthenticationForm />

      <Footer className="align-self-baseline" />
    </div>
  );
}

export default App;
