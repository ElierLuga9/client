import React, { useEffect, useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import Cytoscape from "cytoscape";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Icon from "awesome-react-icons/lib/cjs/Icon";
import gridGuide from "cytoscape-grid-guide";
import { elements } from "../../Data/data";
import { clients } from "../../Data/clients";
import { styleSheet } from "./GraphStyle";
import { layout } from "./Layout";
import { options } from "../../Data/options";

gridGuide(Cytoscape);

const Graph = (data) => {
  const [width, setWith] = useState("100%");
  const [height, setHeight] = useState("700px");
  const [nodes, setNodes] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    if (data) {
      setNodes(clients);
      setResources(options);
    }
  }, [resources]);

  const showResources = () => {
    let format = options.map((name, id) => {
      return {
        key: id,
        title: name.resourceType,
        itemId: name.resourceType,
        count: name.count,
      };
    });
    return format;
  };

  const displayNodes = (elem) => {
    const result = [elem];
    return result;
  };

  const setCompoundState = (cy) => {
    console.log(options);
    cy.minZoom(0.25);
    cy.maxZoom(0.9);
    cy.zoom(1);
    cy.gridGuide({
      drawGrid: true,
      animate: true,
      snapToAlignmentLocationOnRelease: false,
      parentSpacing: -1,
      gridSpacing: 15,
      geometricGuideline: true,
      parentPadding: true,
      gridStackOrder: -1,
      guidelinesStackOrder: -1,
      resize: false,
      snapToGridDuringDrag: false,
      distributionGuidelines: true,
      snapToGridCenter: false,
      initPosAlignment: true,
      lineWidth: 1.5,
    });
    cy.on("resize", (_evt) => {
      cy.layout(layout).run();
      cy.fit();
    });
  };
  return (
    <>
      <div className="column">
        <Navigation
          activeItemId="/management/members"
          onSelect={({ itemId }) => {
            if (itemId === "aws") {
              setNodes(elements);
              displayNodes(elements);
            } else if (itemId === "clients") {
              setNodes(clients);
              displayNodes(clients);
            }
          }}
          items={[
            {
              title: "Inventory Managment",
              itemId: "/dashboard",
            },
            {
              title: "Resources",
              itemId: "/resources",
              elemBefore: () => <Icon name="users" />,
              subNav: [resources],
            },
          ]}
        />
      </div>
      <div className="row">
        <CytoscapeComponent
          elements={CytoscapeComponent.normalizeElements(nodes)}
          style={{ width: width, height: height }}
          pan={{ x: 350, y: 215 }}
          maxZoom={3}
          minZoom={0.1}
          autounselectify={false}
          boxSelectionEnabled={true}
          layout={layout}
          stylesheet={styleSheet}
          cy={(cy) => {
            setCompoundState(cy);
            cy.on("tap", "node", (evt) => {
              var node = evt.target;
            });
          }}
        />
      </div>
    </>
  );
};
export default Graph;
