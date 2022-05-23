import React from "react";
import { Heading } from "@chakra-ui/layout";
import { translations } from "../utils";

export const Title = () => {
  return (
    <Heading as="h2" size="3xl" noOfLines={1}>
      {`${translations.en.prefix.func}: ${translations.en.title}`}
    </Heading>
  );
};
