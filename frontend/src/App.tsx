import { useEffect, useState } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <>{loading ? <Loading /> : <Header />}</>;
}

export default App;
