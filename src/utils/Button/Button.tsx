import { Boton } from "../CustomTheme/CustomComponents";

interface ButtonProps {
  typeButton: string;
  content: string;
  color: string;
  padding: string;
}

export const Button = (props: ButtonProps): React.JSX.Element => {
  const { content, color, padding, typeButton } = props;
  return (
    <>
      <Boton
        type={typeButton === "submit" ? typeButton : "button"}
        $colorRef={color}
        $paddingRef={padding}
      >
        {content.toUpperCase()}
      </Boton>
    </>
  );
};
