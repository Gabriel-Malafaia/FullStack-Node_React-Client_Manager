// Interfaces dos estilos

export type ITag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "label"
  | undefined;

export type IFontSize =
  | "title1"
  | "title2"
  | "title3"
  | "text1"
  | "text2"
  | "text3"
  | "text4"
  | undefined;

export type IColor =
  | "primary"
  | "secundary"
  | "negative"
  | "error"
  | "success"
  | "alert"
  | "white"
  | "grey1"
  | "grey2"
  | "grey3"
  | "grey4"
  | undefined;

export interface ITitleComponent {
  tag?: ITag;
  children: React.ReactNode;
  className?: string;
  color?: IColor;
  fontSize?: IFontSize;
}
