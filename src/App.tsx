import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import AdminMain from "./components/pages/admin/adminMain/AdminMain";
import AdminHeader from "./components/pages/admin/header/AdminHeaer";
import Login from "./components/pages/admin/login/Login";
import BoardList from "./components/pages/boardList/BoardList";
import ShowPost from "./components/pages/showPost/ShowPost";
import WritePost from "./components/pages/writePost/writePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Header />}>
          <Route element={<BoardList />} path="" />
          <Route element={<WritePost />} path="write" />
          <Route element={<ShowPost />} path=":id" />
        </Route>
        <Route path="/admin" element={<AdminHeader />}>
          <Route element={<AdminMain />} path="" />
          <Route element={<Login />} path="login" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
