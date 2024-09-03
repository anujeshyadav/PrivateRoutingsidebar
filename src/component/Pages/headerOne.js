// import "../../App.css";
// import { Link } from "react-router-dom";
// import { Navigation } from "./NavigationConfig";
// import { useState, useEffect } from "react";

// function HeaderOne() {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [child, setchild] = useState({});
//   const [ItemId, setItemId] = useState("");

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const toggleMobileSidebar = () => {
//     setIsMobileOpen(!isMobileOpen);
//   };

//   useEffect(() => {
//     console.log(Navigation);
//   }, []);

//   const handleShowChild = (ele) => {
//     setchild(ele);
//   };
//   return (
//     <>
//       <div className="hamburger-menu" onClick={toggleMobileSidebar}>
//         <span style={{ color: "black" }}>☰</span>
//       </div>
//       <div
//         className={`sidebar ${isCollapsed ? "collapsed" : ""} ${
//           isMobileOpen ? "mobile-open" : ""
//         }`}>
//         <button className="toggle-btn" onClick={toggleSidebar}>
//           {isCollapsed ? ">" : "<"}
//         </button>
//         <ul className="menu">
//           {Navigation?.length > 0 && (
//             <>
//               {Navigation?.map((ele, i) => {
//                 if (ele?.Children?.length > 0) {
//                   return (
//                     <>
//                       <li
//                         style={{
//                           cursor: "pointer",
//                           backgroundColor: ele?.id == ItemId ? "#5c877b" : "",
//                           padding: "10px",
//                         }}
//                         onClick={() => setItemId(ele?.id)}
//                         key={ele?.id}>
//                         <div
//                           onClick={() => handleShowChild(ele)}
//                           style={{ cursor: "pointer" }}
//                           className="heading d-flex justify-content-space-around">
//                           <span>{ele?.title}</span>
//                           <span className="mx-50">
//                             {ele?.Children?.length > 0 && "+"}
//                           </span>
//                         </div>
//                       </li>
//                       {ele?.id == child?.id &&
//                         ele?.Children?.map((item, index) => (
//                           <li
//                             onClick={() => setItemId(item?.id)}
//                             style={{
//                               cursor: "pointer",
//                               padding: "15px",
//                               backgroundColor:
//                                 item?.id == ItemId ? "#5c877b" : "",
//                             }}
//                             key={item?.id}>
//                             <Link to={item?.path}>
//                               {index + 1} .{item?.title}
//                             </Link>
//                           </li>
//                         ))}
//                     </>
//                   );
//                 } else {
//                   return (
//                     <li
//                       style={{
//                         cursor: "pointer",
//                         padding: "10px",
//                         backgroundColor: ele?.id == ItemId ? "#5c877b" : "",
//                       }}
//                       onClick={() => setItemId(ele?.id)}
//                       key={ele?.id}>
//                       <Link to={ele?.path}>{ele?.title}</Link>
//                     </li>
//                   );
//                 }
//               })}
//             </>
//           )}
//           <li>
//             <Link to="/product">product</Link>
//           </li>
//           <li>
//             <Link to="/productlist">productlist</Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default HeaderOne;
import "../../App.css";
import { Link, Outlet } from "react-router-dom";
import { Navigation } from "./NavigationConfig";
import { useState, useEffect } from "react";

function HeaderOne() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [child, setchild] = useState({});
  const [ItemId, setItemId] = useState("");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  useEffect(() => {
    console.log(Navigation);
  }, []);

  const handleShowChild = (ele) => {
    setchild(ele);
  };
  return (
    <>
      <div className="app-container">
        <div className="hamburger-menu" onClick={toggleMobileSidebar}>
          <span style={{ color: "black" }}>☰</span>
        </div>
        <div
          className={`sidebar ${isCollapsed ? "collapsed" : ""} ${
            isMobileOpen ? "mobile-open" : ""
          }`}>
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isCollapsed ? ">" : "<"}
          </button>
          <ul className="menu">
            {Navigation?.length > 0 && (
              <>
                {Navigation?.map((ele, i) => {
                  if (ele?.Children?.length > 0) {
                    return (
                      <>
                        <li
                          style={{
                            cursor: "pointer",
                            backgroundColor: ele?.id == ItemId ? "#5c877b" : "",
                            padding: "10px",
                          }}
                          onClick={() => setItemId(ele?.id)}
                          key={ele?.id}>
                          <div
                            onClick={() => handleShowChild(ele)}
                            style={{ cursor: "pointer" }}
                            className="heading d-flex justify-content-space-around">
                            <span>{ele?.title}</span>
                            <span className="mx-50">
                              {ele?.Children?.length > 0 && "+"}
                            </span>
                          </div>
                        </li>
                        {ele?.id == child?.id &&
                          ele?.Children?.map((item, index) => (
                            <li
                              onClick={() => setItemId(item?.id)}
                              style={{
                                cursor: "pointer",
                                padding: "15px",
                                backgroundColor:
                                  item?.id == ItemId ? "#5c877b" : "",
                              }}
                              key={item?.id}>
                              <Link to={item?.path}>
                                {index + 1} .{item?.title}
                              </Link>
                            </li>
                          ))}
                      </>
                    );
                  } else {
                    return (
                      <li
                        style={{
                          cursor: "pointer",
                          padding: "10px",
                          backgroundColor: ele?.id == ItemId ? "#5c877b" : "",
                        }}
                        onClick={() => setItemId(ele?.id)}
                        key={ele?.id}>
                        <Link to={ele?.path}>{ele?.title}</Link>
                      </li>
                    );
                  }
                })}
              </>
            )}
            <li>
              <Link to="/product">product</Link>
            </li>
            <li>
              <Link to="/productlist">productlist</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default HeaderOne;
