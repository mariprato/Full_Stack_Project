import FooterCom from "./footer";
import Navbar from "./navbar";
import "./Layout.css";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const { children } = props;
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <Navbar />
      <div className={`layout-page ${isHomePage ? "" : "not-home-page"}`}>
        {children}
      </div>
      <FooterCom />
    </>
  );
};

export default Layout;
