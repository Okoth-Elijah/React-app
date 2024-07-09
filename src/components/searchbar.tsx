const Searchbar = () => {
  return (
    <nav className="navbar navbar-light  searchnav ">
      <form className="form-inline">
        <div className="search-nav form-group">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Searchbar;
