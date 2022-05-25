import React from "react";
import { Heading } from "@chakra-ui/layout";
import { translations } from "../utils";

export class ComponentTitle extends React.Component {
  render() {
    return (
      <Heading as="h2" size="3xl" noOfLines={1}>
        {`${translations.en.prefix.component}: ${translations.en.title}`}
      </Heading>
    );
  }
}
