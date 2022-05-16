import React from "react";
import { translations } from "../utils";
import '../App.css';

export const CreateElemTitle = React.createElement(
  "h2",
  { className: "header" },
  `${translations.en.prefix.create}: ${translations.en.title}`
);
