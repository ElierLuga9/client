import S3Bucket from "../../Assets/s3-bucket.png";
import EC2 from "../../Assets/ec2.png";
import Codebuild from "../../Assets/codebuild.png";
import CloudFormationStack from "../../Assets/cloudformationstack.png";

import Lamda from "../../Assets/lamda.png";
import AwsCloudformation from "../../Assets/awscloudformation.png";

export const styleSheet = [
  {
    selector: "node[resourceType='AWS::S3::Bucket']",
    style: {
      label: "data(resourceType)",
      width: 85,
      height: 80,
      "font-size": "7rem",
      "font-family": "Amazon Ember, Helvetica, Arial, sans-serif",
      "text-valign": "top",
      "text-halign": "center",
      "background-color": "#683dc2",
      "background-opacity": "0.05",
      "text-margin-y": "-4.5%",
      "border-style": "solid",
      "border-width": 1,
      "border-color": "#683dc2",
      "text-border-width": "2px",
      "text-background-opacity": "1",
      "text-border-color": "#683dc2",
      "text-background-color": "#683dc2",
      "text-background-shape": "rectangle",
      "text-background-padding": "5px",
      "background-image": S3Bucket,
      shape: "roundrectangle",
      color: "#fafafa",
    },
  },
  {
    selector: "node[resourceType='AWS::EC2::Instance']",
    style: {
      label: "data(resourceType)",
      width: 85,
      height: 80,
      "font-size": "7rem",
      "font-family": "Amazon Ember, Helvetica, Arial, sans-serif",
      "text-valign": "top",
      "text-halign": "center",
      "background-color": "#683dc2",
      "background-opacity": "0.05",
      "text-margin-y": "-4.5%",
      "border-style": "solid",
      "border-width": 1,
      "border-color": "#683dc2",
      "text-border-width": "2px",
      "text-background-opacity": "1",
      "text-border-color": "#683dc2",
      "text-background-color": "#683dc2",
      "text-background-shape": "rectangle",
      "text-background-padding": "5px",
      "background-image": EC2,
      shape: "roundrectangle",
      color: "#fafafa",
    },
  },
  {
    selector: "node[resourceType='AWS::CloudFormation::Stack']",
    style: {
      label: "data(resourceType)",
      width: 85,
      height: 80,
      "font-size": "7rem",
      "font-family": "Amazon Ember, Helvetica, Arial, sans-serif",
      "text-valign": "top",
      "text-halign": "center",
      "background-color": "#683dc2",
      "background-opacity": "0.05",
      "text-margin-y": "-4.5%",
      "border-style": "solid",
      "border-width": 1,
      "border-color": "#683dc2",
      "text-border-width": "2px",
      "text-background-opacity": "1",
      "text-border-color": "#683dc2",
      "text-background-color": "#683dc2",
      "text-background-shape": "rectangle",
      "text-background-padding": "5px",
      "background-image": CloudFormationStack,
      shape: "roundrectangle",
      color: "#fafafa",
    },
  },

  {
    selector: "node[resourceType='AWS::CloudFormation::Security']",
    style: {
      label: "data(resourceType)",
      width: 85,
      height: 80,
      "font-size": "7rem",
      "font-family": "Amazon Ember, Helvetica, Arial, sans-serif",
      "text-valign": "top",
      "text-halign": "center",
      "background-color": "#683dc2",
      "background-opacity": "0.05",
      "text-margin-y": "-4.5%",
      "border-style": "solid",
      "border-width": 1,
      "border-color": "#683dc2",
      "text-border-width": "2px",
      "text-background-opacity": "1",
      "text-border-color": "#683dc2",
      "text-background-color": "#683dc2",
      "text-background-shape": "rectangle",
      "text-background-padding": "5px",
      "background-image": AwsCloudformation,
      shape: "roundrectangle",
      color: "#fafafa",
    },
  },

  {
    selector: "node[resourceType='AWS::CodeBuild::Project']",
    style: {
      label: "data(resourceType)",
      width: 85,
      height: 80,
      "font-size": "7rem",
      "font-family": "Amazon Ember, Helvetica, Arial, sans-serif",
      "text-valign": "top",
      "text-halign": "center",
      "background-color": "#683dc2",
      "background-opacity": "0.05",
      "text-margin-y": "-4.5%",
      "border-style": "solid",
      "border-width": 1,
      "border-color": "#683dc2",
      "text-border-width": "2px",
      "text-background-opacity": "1",
      "text-border-color": "#683dc2",
      "text-background-color": "#683dc2",
      "text-background-shape": "rectangle",
      "text-background-padding": "5px",
      "background-image": Codebuild,
      shape: "roundrectangle",
      color: "#fafafa",
    },
  },
  {
    selector: "edge",
    style: {
      width: "1px",
      "line-style": "solid",
      "line-color": "#545B64",
    },
  },
  {
    selector: "node[image']",
    style: {
      "background-image-containment": ["inside"],
      "background-width": ["100%"],
      "background-height": ["100%"],
      "background-position-x": ["0px"],
      "background-position-y": ["0px"],
      "background-clip": ["node"],
    },
  },
];
