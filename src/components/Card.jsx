const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.image}
        alt="profile_image"
        className="card-img-top rounded-circle p-3"
        style={{ border: "2px solid #b63925" }}
      ></img>
      <div
        className="card-footer
      "
      >
        <div className="card-text text-center">{props.text}</div>
      </div>
    </div>
  );
};

export default Card;
