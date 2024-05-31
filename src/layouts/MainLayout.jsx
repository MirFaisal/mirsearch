import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { AppContext } from "../contexts/AppContextprovider";

function MainLayout() {
  const { themeMode } = useContext(AppContext);

  return (
    <>
      <div className={themeMode ? "dark" : ""}>
        <Layout style={{ width: "100%" }}>
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              height: "90px",
              alignItems: "center",
              padding: "0px",
            }}
          >
            <Navbar />
          </Header>
          <Content>
            <div className="dark:bg-gray-900">
              <div className="max-w-screen-xl mx-auto min-h-screen">
                <Outlet />
              </div>
            </div>
          </Content>
          <Footer className="p-0">
            <FooterComponent />
          </Footer>
        </Layout>
      </div>
    </>
  );
}

export default MainLayout;
