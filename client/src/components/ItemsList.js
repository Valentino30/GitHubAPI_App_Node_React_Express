import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";

export default function ItemsList(props) {
  return (
    <div test-class="ItemsList">
      <List>
        {props.items.map((item) => (
          <div key={item.id} test-class="Item">
            <ListItem alignItems="flex-start">
              {props.type === "users" ? (
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={item.avatar_url} />
                </ListItemAvatar>
              ) : (
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
              )}
              <ListItemText
                primary={props.type === "users" ? item.login : item.name}
                secondary={
                  <React.Fragment>
                    {props.type === "users" ? (
                      <Link to={`/users/${item.login}/repos`}>
                        Check out my repos
                      </Link>
                    ) : (
                        `Updated: ${new Date(item.updated_at).toDateString()}`
                    )}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </div>
  );
}

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};
