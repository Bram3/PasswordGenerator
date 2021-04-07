interface Options {
  length: number;
  symbols: boolean;
  numbers: boolean;
  lowercase: boolean;
  uppercase: boolean;
}

const characterSets = {
  symbols: "!@#$%^&*",
  numbers: "1234567890",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
} as const;

export default function generatePassword({
  length,
  symbols,
  numbers,
  lowercase,
  uppercase,
}: Options): string {
  let characters = "";

  if (symbols) characters += characterSets.symbols;
  if (numbers) characters += characterSets.numbers;
  if (lowercase) characters += characterSets.lowercase;
  if (uppercase) characters += characterSets.uppercase;

  if (length < 1 || characters.length === 0) return "";

  let text = "";

  while (length-- > 0)
    text += characters.charAt(Math.floor(Math.random() * characters.length));

  return text;
}
