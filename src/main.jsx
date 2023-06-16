import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Overpass Variable', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  colors: {
    White: " hsl(0, 0%, 100%)", //Text
    Grayishblue: "hsl(240, 2%, 79%)", //footer text
    Verydarkblue: "hsl(208, 49%, 24%)", //headings
    Verydarkgrayishblue: "hsl(207, 13%, 34%)", //body copy
    Verylightred: "hsl(13, 100%, 72%)",
    Lightred: "hsl(353, 100%, 62%)",
    Verydarkgrayblue: "hsl(237, 17%, 21%)",
    Verydarkdesaturatedblue: " hsl(237,23%, 32%) ",
    // extras
    charcoalBlack: "hsl(240,10%,16%)",
  },
  fontWeights: {
    t_normal: "300",
    t_bold: "600",
    normal: "400",
    bold: "500",
    extraBold: "700",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
