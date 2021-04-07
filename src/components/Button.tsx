import React, { ReactElement } from "react";
import Text from "./Text";
import styled from "styled-components";

interface Props {
  text: string;
  onPress: () => void;
}

export default function ButtonStyle(props: Props): ReactElement {
  const { text, onPress } = props;

  return (
    <Button onPress={() => onPress()}>
      <Text center color="#fff">
        {text}
      </Text>
    </Button>
  );
}

const Button = styled.TouchableOpacity`
  margin: 0 32px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #0099ff;
  border-radius: 6px;
  margin-top: 40px;
`;
