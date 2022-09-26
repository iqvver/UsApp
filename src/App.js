import * as React from 'react';
import SearchContainer from "./Pages/Search/SearchContainer";
import { Routes, Route } from "react-router-dom";
import ProfileUserContainer from "./Componets/ProfileUser/ProfileUserContainer";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/*" element={<SearchContainer />} />
        <Route path="profile">
          <Route path=":userId" element={<ProfileUserContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
