import "./App.css";
import {
  HashRouter as BrowserRouter,
  Routes,
  Route,
  Switch,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./component/Pages/home";
import Product from "./component/Pages/Product";
import ProductList from "./component/Pages/ProductList";
import SignupPage from "./component/Pages/SignupPage";
import Login from "./component/Pages/Login";
import Layout from "./component/Pages/layout";

import HeaderOne from "./component/Pages/headerOne";
import PrivateRoutes from "./component/Pages/PrivateRoutes";

function AppRoutes() {
  let user = false;
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!user && (
            <>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignupPage />} />
            </>
          )}
          {/* </Routes> */}
          {/* </Routes> */}
          {/* <div className="app-container"> */}
          {/* <HeaderOne /> */}

          {/* <div className="content"> */}
          {/* <Layout> */}
          {/* <Routes> */}
          <Route element={<PrivateRoutes />}>
            <Route exact path="/login" element={<Navigate to="/" />} />
            <Route exact path="/signup" element={<Navigate to="/" />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/product" element={<Product />} />
            <Route exact path="/productlist" element={<ProductList />} />
          </Route>
        </Routes>
        {/* </Layout> */}
        {/* </div> */}
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;

// import "./App.css";
// import {
//   HashRouter as BrowserRouter,
//   Routes,
//   Route,
//   Switch,
//   Link,
// } from "react-router-dom";
// import Home from "./component/Pages/home";
// import Product from "./component/Pages/Product";
// import ProductList from "./component/Pages/ProductList";
// import SignupPage from "./component/Pages/SignupPage";
// import Login from "./component/Pages/Login";
// import Layout from "./component/Pages/layout";

// import HeaderOne from "./component/Pages/headerOne";

// function AppRoutes() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/signup" element={<SignupPage />} />
//         </Routes>
//         {/* <div className="app-container"> */}
//         {/* <HeaderOne /> */}

//         {/* <div className="content"> */}
//         <Routes>
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/signup" element={<SignupPage />} />
//           <Route path="/" element={<Layout />}>
//             <Route exact path="/home" element={<Home />} />
//             <Route exact path="/product" element={<Product />} />
//             <Route exact path="/productlist" element={<ProductList />} />
//           </Route>
//         </Routes>
//         {/* </div> */}
//         {/* </div> */}
//       </BrowserRouter>
//     </>
//   );
// }

// export default AppRoutes;
