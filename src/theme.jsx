import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    "html, body": {
      widht: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "url('src/images/symbol-scatter-haikei.svg')",
    },
  },
};

export default extendTheme({ styles });
