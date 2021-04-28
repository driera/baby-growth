import React, { CSSProperties } from "react";

const PageHeader = (): JSX.Element => {
  const headerStyles: CSSProperties = {
    padding: "20px 0"
  };

  const titleStyles: CSSProperties = {
    textAlign: "center",
    fontSize: 34,
    fontWeight: "bold"
  };

  return (
    <header style={headerStyles}>
      <h1 style={titleStyles}>Baby weight progression</h1>
    </header>
  );
};

export default PageHeader;
