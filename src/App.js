import * as React from 'react';
import SearchContainer from "./Pages/Search/SearchContainer";
import { Routes, Route, Navigate } from "react-router-dom";
import ProfileUserContainer from "./Componets/ProfileUser/ProfileUserContainer";

//компонента с роутами между главной стриницей и деталями пользователя

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<SearchContainer />} />
        <Route path="/" element={<Navigate replace to="/all" />} />
        <Route path="profile">
          <Route path=":userId" element={<ProfileUserContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
