import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import AdminMain from "./pages/admin/AdminMain";
import AdminHeader from "./components/common/header/AdminHeaer";
import Login from "./pages/admin/Login";
import BoardList from "./pages/BoardList";
import ShowPost from "./pages/ShowPost";
import WritePost from "./pages/writePost";
import PutPost from "./pages/putBoard";
import useInterval from "use-interval";
import { getNewToken } from "./assets/function/getNewToken";

function App() {
  const refreshTimer: number = 60 * 10 * 1000;

  useInterval(() => {
    getNewToken();
    console.log("aaa");
  }, refreshTimer);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Header />}>
          <Route element={<BoardList />} path="" />
          <Route element={<WritePost />} path="write" />
          <Route element={<PutPost />} path="put/:id" />
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
