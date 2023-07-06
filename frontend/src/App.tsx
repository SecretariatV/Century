import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Nabvar from "./components/Nabvar";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [selectLink, setSelectLink] = useState<number>(-1);
  const [openContact, setOpenContact] = useState<boolean>(false);

  useEffect(() => {
    if (selectLink === 4 && !openContact) {
      setOpenContact(true);
    } else if (openContact) {
      setOpenContact(false);
    }
  }, [selectLink]);

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
        <div className="relative">
          <Nabvar link={selectLink} setLink={setSelectLink} />
          <Home />
          {openContact && <Contact />}
        </div>
      )}
    </>
  );
}

export default App;
