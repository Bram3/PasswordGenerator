interface Options {
  length: number;
  symbols: boolean;
  numbers: boolean;
  lowercase: boolean;
  uppercase: boolean;
}

export default function generate({
  length,
  symbols,
  numbers,
  lowercase,
  uppercase,
}: Options): string {
  const symbolsString = () => {
    if (symbols == true) {
      return "!@#$%^&*";
    } else {
      return "";
    }
  };
  const numbersString = () => {
    if (numbers == true) {
      return "1234567890";
    } else {
      return "";
    }
  };
  const lowercaseString = () => {
    if (lowercase == true) {
      return "abcdefghijklmnopqrstuvwxyz";
    } else {
      return "";
    }
  };
  const uppercaseString = () => {
    if (uppercase == true) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      return "";
    }
  };
  const newString =
    symbolsString() + numbersString() + lowercaseString() + uppercaseString();

  const generate = (possible) => {
    let text = "";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };
  return generate(newString);
}
