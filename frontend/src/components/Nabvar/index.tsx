import Header from "../Header";

const Nabvar = ({
  link,
  setLink,
}: {
  link: number;
  setLink: (c: number) => void;
}) => {
  return (
    <div>
      <Header link={link} setLink={setLink} />
    </div>
  );
};

export default Nabvar;
