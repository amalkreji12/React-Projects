import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllMeetUp from "./Pages/AllMeetUp";
import Favorites from "./Pages/Favorites";
import NewMeetUp from "./Pages/NewMeetUp";
import NavBar from "./components/NavBar/NavBar";
import Layout from "./components/Layout/Layout";

// const routes = (
//   <Router>
//     <Routes>
//       <Route path="/" element={<AllMeetUp />} />
//       <Route path="/favorites" element={<Favorites />} />
//       <Route path="/new-meetup" element={<NewMeetUp />} />
//     </Routes>
//   </Router>
// );
function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<AllMeetUp />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/new-meetup" element={<NewMeetUp />} />
        </Routes>
    </Layout>
  );
}

export default App;
