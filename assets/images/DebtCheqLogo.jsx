import * as React from "react";
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Path,
  Text,
  TSpan,
} from "react-native-svg";

const DebtCheqLogo = (props) => (

  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 1366 768"
    {...props}
  >
    <Defs>
      <LinearGradient
        id="a"
        x1={345.5}
        x2={1061}
        y1={384.25}
        y2={384.25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#ffb894" />
        <Stop offset={0.22} stopColor="#ffc58f" stopOpacity={0.76} />
        <Stop offset={0.6} stopColor="#ffdc86" stopOpacity={0.36} />
        <Stop offset={0.87} stopColor="#ffeb81" stopOpacity={0.1} />
        <Stop offset={1} stopColor="#fff17f" stopOpacity={0} />
      </LinearGradient>
    </Defs>
    <Path
      d="M345.5 166.5c0 368.8 525.12 0 525.12 0L1061 248.46 377.18 602 345.5 166.5Z"
      style={{
        fill: "url(#a)",
        stroke: "#000",
        strokeMiterlimit: 10,
      }}
    />
    <Text
      style={{
				fontFamily: "regular",
        fontSize: 72,
      }}
      transform="translate(584.33 358.22)"
    >
      <TSpan x={0} y={0}>
        {"DebtChe"}
      </TSpan>
      <TSpan
        x={268.13}
        y={0}
        style={{
          letterSpacing: "-.06em",
        }}
      >
        {"q"}
      </TSpan>
    </Text>
  </Svg>
);

export default DebtCheqLogo;
