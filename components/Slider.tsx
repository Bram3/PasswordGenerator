import React from "react";
import styled from "styled-components/native";
import Slider from "@react-native-community/slider";

const SliderStyle = (props) => {
  const { onChange } = props;
  return (
    <CustomSlider
      minimumValue={5}
      maximumValue={100}
      minimumTrackTintColor="#0099ff"
      maximumTrackTintColor="#414959"
      step={1}
      thumbTintColor="#0099ff"
      onValueChange={(value) => onChange(value)}
    />
  );
};

const CustomSlider = styled(Slider)`
  padding-top: 50px;
  margin-right: 50px;
  margin-left: 50px;
  justify-content: center;
  align-items: center;
`;

export default SliderStyle;
