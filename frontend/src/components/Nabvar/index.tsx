import Header from "../Header";

const Nabvar = ({
  link,
  setLink,
}: {
  link: number;
  setLink: (c: number) => void;
}) => {
  return <Header link={link} setLink={setLink} />;
};

export default Nabvar;
