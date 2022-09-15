import React from "react";

export const clients = [
  {
    data: {
      id: "i-0493675ddb63302b0",
      label: "i-0493675ddb63302b0",
      resourceType: "AWS::EC2::Instance",
      group: "nodes",
    },
    position: {
      x: 284.23,
      y: 107.56,
    },
  },
  {
    data: {
      id: "i",
      label: "i",
      resourceType: "AWS::EC2::Instance",
      group: "nodes",
    },
    position: {
      x: 284.23,
      y: 107.56,
    },
  },
  {
    data: {
      id: "ASG-Datalake-jenkins/bcd3ad50-0d85-11e7-8a98-500c2893c036",
      label: "ASG-Datalake-jenkins/bcd3ad50-0d85-11e7-8a98-500c2893c036",
      resourceType: "AWS::CloudFormation::Stack",
      group: "nodes",
    },
    position: {
      x: 456.23,
      y: 2.56,
    },
  },
  {
    data: {
      id: "ASG-Datalake",
      label: "ASG-Datalake",
      resourceType: "AWS::CloudFormation::Stack",
      group: "nodes",
    },
    position: {
      x: 134.23,
      y: 187.56,
    },
  },
  {
    data: {
      id: "ASG-Datalake-jenkins",
      label: "ASG-Datalake-jenkins",
      resourceType: "AWS::CloudFormation::Security",
      group: "nodes",
      position: {
        x: -180.23,
        y: 222.56,
      },
    },
  },
  {
    data: {
      id: "dms",
      label: "dms",
      resourceType: "AWS::S3::Bucket",
      group: "nodes",
    },
    position: {
      x: -120,
      y: 220,
    },
  },
  {
    data: {
      id: "dm",
      label: "dm",
      resourceType: "AWS::S3::Bucket",
      group: "nodes",
    },
    position: {
      x: -150,
      y: 250,
    },
  },
  {
    data: {
      id: "d",
      label: "d",
      resourceType: "AWS::CloudFormation::Stack",
      group: "nodes",
    },
    position: {
      x: -120,
      y: 220,
    },
  },
  {
    data: {
      id: "dms",
      label: "dms",
      resourceType: "AWS::CloudFormation::Stack",
      group: "nodes",
    },
    position: {
      x: -120,
      y: 220,
    },
  },
  {
    data: {
      id: "dms-neptune-s3bucket-5g62f3hhayq4",
      label: "dms-neptune-s3bucket-5g62f3hhayq4",
      resourceType: "AWS::S3::Bucket",
      group: "nodes",
    },
    position: {
      x: 100,
      y: -150,
    },
  },
  {
    data: {
      id: "dms-neptune",
      label: "dms-neptune",
      resourceType: "AWS::S3::Bucket",
      group: "nodes",
    },
    position: {
      x: 300,
      y: -150,
    },
  },
  {
    data: {
      id: "DocStar_build",
      label: "DocStar_build",
      resourceType: "AWS::CodeBuild::Project",
      group: "nodes",
    },
    position: {
      x: 256.23,
      y: 256,
    },
  },
  {
    data: {
      id: "glyph-glyph1",
      class: "necessary stimulation",
      cardinality: 0,
      source: "i",
      target: "DocStar_build",
      bendPointPositions: [],
      portSource: "i",
      portTarget: "DocStar_build",
      group: "edges",
    },
  },
  {
    data: {
      id: "glyph8-glyph15",
      class: "necessary stimulation",
      cardinality: 0,
      source: "i",
      target: "ASG-Datalake-jenkins",
      bendPointPositions: [],
      portSource: "i",
      portTarget: "ASG-Datalake-jenkins",
      group: "edges",
    },
  },
  {
    data: {
      id: "glyph8-glyph15",
      class: "necessary stimulation",
      cardinality: 0,
      source: "DocStar_build",
      target: "ASG-Datalake-jenkins",
      bendPointPositions: [],
      portSource: "DocStar_build",
      portTarget: "ASG-Datalake-jenkins",
      group: "edges",
    },
  },
  {
    data: {
      id: "glyph9-glyph16",
      class: "stimulation",
      cardinality: 0,
      source: "i-0493675ddb63302b0",
      target: "dms",
      bendPointPositions: [],
      portSource: "i-0493675ddb63302b0",
      portTarget: "dms",
      group: "edges",
    },
  },
  {
    data: {
      id: "glyph9-glyph16",
      class: "stimulation",
      cardinality: 0,
      source: "i-0493675ddb63302b0",
      target: "ASG-Datalake-jenkins/bcd3ad50-0d85-11e7-8a98-500c2893c036",
      bendPointPositions: [],
      portSource: "i-0493675ddb63302b0",
      portTarget: "ASG-Datalake-jenkins/bcd3ad50-0d85-11e7-8a98-500c2893c036",
      group: "edges",
    },
  },
  {
    data: {
      id: "glyph23-glyph124",
      class: "stimulation",
      cardinality: 0,
      source: "i-0493675ddb63302b0",
      target: "d",
      bendPointPositions: [],
      portSource: "i-0493675ddb63302b0",
      portTarget: "d",
      group: "edges",
    },
  },
  {
    data: {
      id: "glyph10-glyph17",
      class: "stimulation",
      cardinality: 0,
      source: "dms-neptune-s3bucket-5g62f3hhayq4",
      target: "ASG-Datalake-jenkins/bcd3ad50-0d85-11e7-8a98-500c2893c036",
      bendPointPositions: [],
      portSource: "dms-neptune-s3bucket-5g62f3hhayq4",
      portTarget: "ASG-Datalake-jenkins/bcd3ad50-0d85-11e7-8a98-500c2893c036",
      group: "edges",
    },
  },
  {
    data: {
      id: "glyph10-glyph18",
      class: "stimulation",
      cardinality: 0,
      source: "dms-neptune-s3bucket-5g62f3hhayq4",
      target: "ASG-Datalake-jenkins",
      bendPointPositions: [],
      portSource: "dms-neptune-s3bucket-5g62f3hhayq4",
      portTarget: "ASG-Datalake-jenkins",
      group: "edges",
    },
  },
  {
    data: {
      id: "glyph12-glyph16",
      class: "stimulation",
      cardinality: 0,
      source: "i-0493675ddb63302b0",
      target: "ASG-Datalake",
      bendPointPositions: [],
      portSource: "i-0493675ddb63302b0",
      portTarget: "ASG-Datalake",
      group: "edges",
    },
  },
];
