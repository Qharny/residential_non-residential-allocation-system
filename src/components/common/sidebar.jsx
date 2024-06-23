import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import "./style.css";
import "./sidebar.css"

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <Menu vertical className="sidebar">
      <Menu.Item as="div" className="logo">
        <Icon name="shopping bag" size="large" />
        <span>{t("Residensial")}</span>
      </Menu.Item>

      <Menu.Item as={Link} to="/dashboard">
        <Icon name="dashboard" />
        {t("Non-Residential")}
      </Menu.Item>



    </Menu>
  );
};

export default Sidebar;