const Shimmer = () => {
  return (
    <div className="body" data-testid="shimmer">
      <div id="restaurent_card_container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, index) => (
          <div
            key={index}
            className="res-card"
            style={{ minHeight: "250px", background: "#ddd" }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
