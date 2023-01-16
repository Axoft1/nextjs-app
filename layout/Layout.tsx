import React from "react";
import { LayoutProps } from "./Layout.props";
import styles from "./P.module.css";
import cn from "classnames";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer/>
    </>
  );
};