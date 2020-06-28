import axios from "axios";
import PropTypes from "prop-types";
import ItemsList from "../components/ItemsList";
import React, { useState, useEffect } from "react";

export default function ItemsListContainer({ type, match }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = () => {
      const url =
        type === "users"
          ? "/api/users"
          : `/api/users/${match.params.userId}/repos`;

      axios
        .get(url)
        .then((res) => {
          const items = res.data;
          setItems(items);
        })
        .catch((err) => console.log(err.message));
    };
    getItems();
  }, [type, match]);

  return (
    <div test-class="ItemsListContainer">
      {type === "users" ? (
        <ItemsList type="users" items={items} />
      ) : (
        <ItemsList type="repos" items={items} />
      )}
    </div>
  );
}

ItemsListContainer.propTypes = {
  match: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};
