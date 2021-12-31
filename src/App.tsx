import Header from "./components/common/header/Header";
import BoardList from "./components/pages/boardList/BoardList";
import ShowPost from "./components/pages/showPost/ShowPost";
import WritePost from "./components/pages/writePost/writePost";

function App() {
  return (
    <div>
      <Header />
      <BoardList />
      {/* <WritePost /> */}
      {/* <ShowPost /> */}
    </div>
  );
}

export default App;
