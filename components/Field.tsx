import React, { ReactElement } from "react";
import Checkbox from "expo-checkbox";
import Text from "./Text";
import styled from "styled-components";

interface Props {
  value: boolean;
  color?: string;
  onChange: (value: boolean) => void;
  text: string;
}

export default function FieldStyle(props: Props): ReactElement {
  const { value, color, onChange, text } = props;
  return (
    <Field>
      <Checkbox
        value={value}
        color={color ?? "#0099ff"}
        onValueChange={(value) => onChange(value)}
      />
      <Text medium>{text}</Text>
    </Field>
  );
}

const Field = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;
