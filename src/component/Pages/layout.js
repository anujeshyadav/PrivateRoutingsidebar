import { Outlet, Link } from "react-router-dom";

const Layout = ({ children }) => {
  debugger;
  return (
    <>
      <div className="mysidebarmenu">
        <div className="customsidebar">
          <ul className="menu">
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="/product">product</Link>
            </li>
            <li>
              <Link to="/productlist">productlist</Link>
            </li>
          </ul>
        </div>
        <div className="right-side">
          {/* <Outlet /> */}
          <div className="right-side">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
