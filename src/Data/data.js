import React from "react";

export const elements = [
  {
    data: {
      id: "i-0493675ddb63302b0",
      label: "i-0493675ddb63302b0",
      resourceType: "AWS::EC2::Instance",
      class: "compartment",
      group: "nodes",
      selected: true,
    },
  },
  {
    data: {
      id: "ASG-Datalake-jenkins/bcd3ad50-0d85-11e7-8a98-500c2893c036",
      label: "ASG-Datalake-jenkins/bcd3ad50-0d85-11e7-8a98-500c2893c036",
      resourceType: "AWS::CloudFormation::Stack",
      group: "nodes",
    },
  },
  {
    data: {
      id: "ASG-Datalake-jenkins",
      label: "ASG-Datalake-jenkins",
      resourceType: "AWS::CloudFormation::Security",
      group: "nodes",
    },
  },
  {
    data: {
      id: "DocStar_build",
      label: "DocStar_build",
      resourceType: "AWS::CodeBuild::Project",
      group: "nodes",
    },
  },
  {
    data: {
      id: "glyph8-glyph15",
      class: "necessary stimulation",
      cardinality: 0,
      source: "i-0493675ddb63302b0",
      target: "ASG-Datalake-jenkins",
      bendPointPositions: [],
      portSource: "i-0493675ddb63302b0",
      portTarget: "ASG-Datalake-jenkins",
      group: "edges",
    },
  },
  {
    data: {
      id: "glyph8-glyph15",
      class: "necessary stimulation",
      cardinality: 0,
      source: "i-0493675ddb63302b0",
      target: "DocStar_build",
      bendPointPositions: [],
      portSource: "i-0493675ddb63302b0",
      portTarget: "DocStar_build",
      group: "edges",
    },
  },
];
