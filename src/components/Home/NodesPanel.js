import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Icon from "awesome-react-icons";

const NodesPanel = () => {
  return (
    <>
      <div className="container">
        <Navigation
          activeItemId="/management/members"
          onSelect={({ itemId }) => {}}
          items={[
            {
              title: "Inventory Managment",
              itemId: "/dashboard",
            },
            {
              title: "Resources",
              itemId: "/resources",
              elemBefore: () => <Icon name="users" />,
              subNav: [
                {
                  title: "Aws - Members",
                  itemId: "/resources/aws-members",
                },
                {
                  title: "Clients",
                  itemId: "/management/clients",
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default NodesPanel;
