const Navlinks = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center linksection "
      style={{
        gap: "30px",
      }}
    >
      <span>
        <a href="#">Recent Articles</a>
      </span>
      <span>
        <a href="#">Favourite Articless</a>
      </span>
      <span>
        <a href="#">Comments</a>
      </span>
      <span>
        <a href="#">Posts</a>
      </span>
    </div>
  );
};

export default Navlinks;
