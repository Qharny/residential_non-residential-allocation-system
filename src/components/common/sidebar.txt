import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "./style.css";

const Sidebar = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { cart } = useCart();

  return (
    <div className="sidebar">
      <div className="user-info">
        <Icon name="user" size="big" />
        <span>{user ? user.email : t("sidebar.guest")}</span>
      </div>
      <div className="cart-info">
        <Icon name="cart" size="big" />
        <span>{t("sidebar.cart", { count: cart.length })}</span>
      </div>
      <Link to="/cart">
        <Button primary>{t("sidebar.viewCart")}</Button>
      </Link>
    </div>
  );
};
export default Sidebar;
