import FooterCom from "./footer";
import Navbar from "./navbar";
import "./Layout.css";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <div className="layout-page">{children}</div>
      <FooterCom />
    </>
  );
};

export default Layout;
