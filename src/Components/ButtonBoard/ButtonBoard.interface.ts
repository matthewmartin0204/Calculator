export interface ButtonConfig {
  // The function you pass to execute on a button press
  callback: Function;
  // The value on the button
  value?: string | number;
  // The theme used to pass certain custom css properties
  theme?: ButtonStyle;
}

export interface ButtonStyle {
  // Hex code or any valid css color
  backgroundColor?: string;
  // Hex code or any valid css color
  color?: string;
  // Number of columns you want the button to span
  gridColumnSpan?: number;
  // Number of rows you want the button to span
  gridRowSpan?: number;
}

export interface ButtonBoardStyle {
  // Valid grid columns input i.e. 1fr 1fr 1fr or 25% 100px 25% 50px
  gridTemplateColumns?: string;
  // Single static grid value i.e. 25px, 1em
  gridTemplateRows?: string;
  // Hex code or any valid css color
  backgroundColor?: string;
}