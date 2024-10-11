import React from "react";
import styles from "./TopBar.module.css";

interface TopBarProps {
  children: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({ children }) => {
  return <div className={styles.topBar}>{children}</div>;
};

export default TopBar;
