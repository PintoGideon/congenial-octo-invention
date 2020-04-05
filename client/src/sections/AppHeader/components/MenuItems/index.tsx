import React from "react";
import { useMutation } from "@apollo/react-hooks";

import { Link } from "react-router-dom";
import { Button, Menu, Avatar } from "antd";
import { Viewer } from "../../../../lib/types";
import { LOG_OUT } from "../../../../lib/graphql/mutations/LogOut";
import { LogOut as LogOutData } from "../../../../lib/graphql/mutations/LogOut/__generated__/LogOut";
import {
  displaySuccessNotification,
  displayErrorMessage
} from "../../../../lib/utils";

const { Item, SubMenu } = Menu;

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const MenuItems = ({ viewer, setViewer }: Props) => {
  const [logOut] = useMutation<LogOutData>(LOG_OUT, {
    onCompleted: data => {
      if (data && data.logOut) {
        setViewer(data.logOut);
        displaySuccessNotification("You've successfully Logged out");
      }
    },
    onError: data => {
      displayErrorMessage("Sorry, We weren't able to log you out.");
    }
  });

  const handleLogOut = () => {
    logOut();
  };

  const subMenuLogin =
    viewer.id && viewer.avatar ? (
      <SubMenu title={<Avatar src={viewer.avatar} />}>
        <Item key="/user">Profile</Item>
        <Item key="/logout">
          <div onClick={handleLogOut}>Logout</div>
        </Item>
      </SubMenu>
    ) : (
      <Item>
        <Link to="/login">
          <Button type="primary">Sign In</Button>
        </Link>
      </Item>
    );
  return (
    <Menu mode="horizontal" selectable={false} className="menu">
      <Item key="/host">
        <Link to="/host">Host</Link>
      </Item>
      {subMenuLogin}
    </Menu>
  );
};
