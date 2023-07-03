import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
import DemoLifecycle from "./Pages/DemoLifecycle/DemoLifecycle";
import DemoRedux from "./Pages/DemoRedux/DemoRedux";
import ShoesStore from "./Pages/ShoesStore/ShoesStore";
import ShoesDetail from "./Pages/ShoesStore/ShoesDetail";
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
          <Route path="shoes-detail">
            <Route path=":id" element={<ShoesDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
