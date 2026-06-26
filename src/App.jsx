import { Suspense } from "react";
import Bottles from "./components/Bottles";


const bottlesPromise = fetch("bottles.json").then((res) => res.json());
// console.log(bottlesPromise);
function App() {
  return(
  <>
    
      <h1> awesome water Bottles</h1>
      <Suspense fallback={<h3>Bottles is comming</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    
  </>
  )
}

export default App;
