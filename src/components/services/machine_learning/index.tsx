import React from "react";

import styles from "styles/Home.module.css";

const Content: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        This page is gonna host a service. <br />
        Plase coming soon..
      </main>
    </div>
  );
};

export default Content;
