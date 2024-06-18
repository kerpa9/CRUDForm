import "../components/styles/Loader.css";

const Loader = () => {
  return (
    <div>
      <h2>Loader</h2>

      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
