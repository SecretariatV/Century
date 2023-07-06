import Active from "./Active";
import Default from "./Default";

const Icon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="45"
      height="61"
      viewBox="0 0 45 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {active ? <Active /> : <Default />}
    </svg>
  );
};

export default Icon;
