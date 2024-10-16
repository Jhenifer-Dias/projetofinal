import React from "react";
import styled from "styled-components";

const Tooltip = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
       
        <span className="text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 95 114"
            className="svgIcon"
          >
            <rect fill="black" rx="28.5" height="57" width="57" x="19" />
            <path
              fill="black"
              d="M0 109.5C0 83.2665 21.2665 62 47.5 62V62C73.7335 62 95 83.2665 95 109.5V114H0V109.5Z"
            />
          </svg>
          Follow
        </span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .tooltip-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s;
  background-color: rgb(255, 255, 255);
  padding: 11px 18px;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid rgb(211, 211, 211);
}

.text {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(0, 0, 0);
}
.svgIcon {
  width: 16px;
  height: auto;
}
.tooltip {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.3em 0.6em;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  color: rgb(34, 34, 34);
}

.tooltip::before {
  position: absolute;
  content: "";
  height: 0.6em;
  width: 0.6em;
  bottom: -0.2em;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  background-color: rgb(255, 255, 255);
}

.tooltip-container:hover .tooltip {
  top: -100%;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

`;

export default Tooltip;