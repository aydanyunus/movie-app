import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="content__wrapper">
            <h1 className="content__wrapper--title">404</h1>
            <h3 className="content__wrapper--subtitle">Page Not Found </h3>
            <p className="content__wrapper--text">
              Oops! It seems you've taken a wrong turn on
              this cinematic journey.
            </p>
            <button className="error-btn" type="button">
                <Link to='/'>
                    Go to homepage
                </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
