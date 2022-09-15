import Graph from "./components/graph/Graph";
import FilterPanel from "./components/Home/FilterPanel";
import NodesPanel from "./components/Home/NodesPanel";
import { elements } from "./Data/data";
const App = () => {
  return (
    <>
      <FilterPanel />
      <Graph elements />
    </>
  );
};

export default App;
