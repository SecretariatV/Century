import { useEffect, useState } from "react";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Nabvar from "./components/Nabvar";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Nabvar />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
