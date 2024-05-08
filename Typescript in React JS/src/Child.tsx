interface ChildProps {
  head: string;
}

const Child: React.FC<ChildProps> = ({ head }) => {
  return (
    <>
      <h1>hello {head}</h1>
    </>
  );
};

export default Child;
