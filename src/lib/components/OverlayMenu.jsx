import "core-js/stable";
import "regenerator-runtime/runtime";

import React, { useEffect } from "react";

const OverlayMenu = ({ visible=true, setVisible=(_)=>{}, container_ref, children }) => {
  const handleClickOutside = (event) => {
    if (
      container_ref.current &&
      !container_ref.current.contains(event.target)
    ) {
      setVisible(false);
    }
  };
  const handleEscapePress = (e) => {
    if (e.code == "Escape") {
      setVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapePress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, []);
  return (
    <React.Fragment>
      {visible && <React.Fragment>{children}</React.Fragment>}
    </React.Fragment>
  );
};

export default OverlayMenu;
