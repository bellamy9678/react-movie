import React from "react";
import { Heading } from "@chakra-ui/layout";
import { translations } from "../utils";

export class PureTitle extends React.PureComponent {
  render() {
    return (
      <Heading as="h2" size="3xl" noOfLines={1}>
        {`${translations.en.prefix.pure}: ${translations.en.title}`}
      </Heading>
    );
  }
}
