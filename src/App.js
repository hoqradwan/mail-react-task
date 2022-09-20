import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Inboxes from "./components/Inbox/Inboxes";
import DeletedItems from "./components/DeletedItems/DeletedItems";
import CustomFolder from "./components/CustomFolder/CustomFolder";
import InboxDetail from "./components/Inbox/InboxDetail";
import SpamDetail from "./components/Spam/SpamDetail";
import useInboxes from "./hooks/useInboxes";
import Spams from "./components/Spam/Spams";

function App() {
  const [inboxes] = useInboxes()
  let unreadCount = 0;
  inboxes.map(inbox => {
    if(inbox.unread === true){
      unreadCount = unreadCount + 1;
    }
    return unreadCount;
  })
  return (
    <>
      <Header></Header>
      <div className="flex">
        <div className="h-screen w-48" style={{ backgroundColor: "#F4F4F4" }}>
          <h1 className="font-bold pt-4 pl-2">Folders</h1>
          <div className="px-8">
            <Link to="/">Inbox {unreadCount}</Link>
            <br />
            <Link to="/spam">Spam</Link>
            <br />
            <Link to="/deleted">Deleted Items</Link>
            <br />
            <Link to="/custom">Custom Folder</Link>
          </div>
        </div>
        <Routes>
              <Route path="/" element={<Inboxes></Inboxes>}></Route>
              <Route path="/spam" element={<Spams></Spams>}></Route>
              <Route
                path="/deleted"
                element={<DeletedItems></DeletedItems>}
              ></Route>
              <Route
                path="/custom"
                element={<CustomFolder></CustomFolder>}
              ></Route>

          <Route
            path="/:inboxDetail"
            element={<InboxDetail></InboxDetail>}
          >
          </Route>
          <Route
            path="/spam/:spamDetail"
            element={<SpamDetail></SpamDetail>}
          >
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
