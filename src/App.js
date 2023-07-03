import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
import DemoLifecycle from "./Pages/DemoLifecycle/DemoLifecycle";
import DemoRedux from "./Pages/DemoRedux/DemoRedux";
import ShoesStore from "./Pages/ShoesStore/ShoesStore";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route path="lifecycle" element={<DemoLifecycle />}>
            <Route path=":id" element={<DemoLifecycle />} />
          </Route>
          <Route path="demoredux" element={<DemoRedux />} />
          <Route path="shoesshop" element={<ShoesStore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
