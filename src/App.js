import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext"; // Path to your DarkModeContext file

function App() {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}

export default App;
