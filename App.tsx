import React, { useState } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

import Text from "./src/components/Text";
import Slider from "./src/components/Slider";
import Field from "./src/components/Field";
import Button from "./src/components/Button";

import generate from "./src/utils/Generate";
import copy from "./src/utils/Copy";

export default function App() {
  const [length, setLength] = useState(5);
  const [symbols, setSymbols] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [password, setPassword] = useState("");

  const handlePress = async () => {
    const pass = await generate({
      length,
      symbols,
      numbers,
      lowercase,
      uppercase,
    });
    setPassword(pass);
  };

  return (
    <Container>
      <Main>
        <Text title center>
          Password Generator.
        </Text>
        <Length>
          <Text large center>
            Lenght: {length}
          </Text>
          <Slider onChange={setLength} />
        </Length>
        <Field
          value={symbols}
          onChange={setSymbols}
          text="Include Symbols ( e.g. @#$% )"
        />
        <Field
          value={numbers}
          onChange={setNumbers}
          text="Include Numbers ( e.g. 123456 )"
        />
        <Field
          value={lowercase}
          onChange={setLowercase}
          text="Include Lowercase Characters ( e.g. abcdefgh )"
        />
        <Field
          value={uppercase}
          onChange={setUppercase}
          text="Include Uppercase Characters ( e.g. ABCDEFGH )"
        />
        <Button text="Generate" onPress={handlePress} />
        <PasswordText center large>
          {password}
        </PasswordText>
        <Copy onPress={() => copy({ text: password })}>
          <AntDesign name="copy1" size={40} color="#0099ff" />
          <Text large>Copy Password</Text>
        </Copy>
      </Main>
    </Container>
  );
}

const Copy = styled.TouchableOpacity`
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PasswordText = styled(Text)`
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Container = styled.ScrollView`
  flex: 1;
  background-color: #f2f6ff;
`;

const Main = styled.View`
  margin-top: 70px;
`;

const Length = styled.View`
  margin-top: 30px;
`;
