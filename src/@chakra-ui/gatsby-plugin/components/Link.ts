import { defineStyleConfig } from "@chakra-ui/react"
import { defineMergeStyles, linkDefaultTheme } from "./components.utils"

export const Link = defineStyleConfig({
  baseStyle: defineMergeStyles(linkDefaultTheme.baseStyle, {
    color: "primary.base",
    fontWeight: "bold",
    textDecor: "underline",
    textUnderlineOffset: "3px",
    _focusVisible: {
      boxShadow: "none",
      outline: "2px solid",
      outlineColor: "primary.hover",
      outlineOffset: "2px",
      borderRadius: "sm",
    },
    _hover: {
      color: "primary.hover",
    },
    _visited: {
      color: "primary.visited",
    },
  }),
})
