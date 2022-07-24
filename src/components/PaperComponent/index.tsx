import * as S from "./styles";

interface PaperComponentProps {
  width?: string;
  height?: string;
  border?: boolean;
  borderWidth?: string;
  title?: string;
  children?: React.ReactNode
}

export const PaperComponent = ({
  width,
  height,
  border,
  title,
  borderWidth,
  children
}: PaperComponentProps) => {
  return (
    <S.Container
      width={width}
      height={height}
      border={border}
      borderWidth={borderWidth}
    >
      
      {children}
      <p>{title}</p>
    </S.Container>
  );
};
