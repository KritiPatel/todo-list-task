// import React from "react";
// import { ToastContainer } from "react-toastify";
// import "./App.css";
// import TodoList from "./pages/todoPage/todoList";

// function App() {
//   return (
//     <div className="App">
//       <React.StrictMode>
//         <TodoList />
//         <ToastContainer />
//       </React.StrictMode>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "./App.css";
import TodoList from "./pages/todoPage/todoList";
import { HELMET_TITLE } from "./utils/layout/HeaingConst";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{HELMET_TITLE}</title>
      </Helmet>
      <React.StrictMode>
        <TodoList />
        <ToastContainer />
      </React.StrictMode>
    </div>
  );
}

export default App;
