import SearchComponent from "./SectionA/Index";
import "./App.css";
import SectionAandB from "./SectionAandB";
import { Box } from "@material-ui/core";
import { Copyright } from "./SectionC/SignUpPage/SignUp";

function App() {
  return (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        flexDirection: "column",
        backgroundColor: "#F5F5F5",
        width: "100%",
      }}
    >
      <div style={{ zIndex: 2000 }}>
        <SearchComponent />
      </div>

      <SectionAandB />
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
}

export default App;
