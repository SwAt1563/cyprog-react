import "./Buttons.css";

const PrimaryButton = (props) => {
  return (
    <>
      <div className="button primary-btn">
        <a href="#1">{props.children}</a>
      </div>
    </>
  );
};

const SecondaryButton = (props) => {
  return (
    <>
      <div className="button secondary-btn">
        <a href="#2">{props.children}</a>
      </div>
    </>
  );
};

export default PrimaryButton;
export { SecondaryButton };
