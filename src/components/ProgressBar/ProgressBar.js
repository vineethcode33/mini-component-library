/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: "8px",
    padding: "0",
    radius: "4px",
  },
  medium: { height: "12px", padding: "0", radius: "4px" },
  large: { height: "16px", padding: "4px", radius: "8px" },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  console.log(size);
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={{ "--padding": styles.padding }}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--width": value + "%",
            "--height": styles.height,
          }}
        ></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px 0px ${COLORS.transparentGray35};
  border-radius: 4px;
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
