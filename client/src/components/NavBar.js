import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function NavBar(props) {
  return (
    <React.Fragment>
      <AppBar test-class="NavBar">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="h6">{props.type}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

NavBar.propTypes = {
  type: PropTypes.string.isRequired,
};
