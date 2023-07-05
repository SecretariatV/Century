import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <>{loading ? <Loading /> : <div>Hi</div>}</>;
}

export default App;
