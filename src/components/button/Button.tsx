import { Button } from "@mui/material";

type Props = {
  children: JSX.Element;
  onclick: () => void;
  disabled?: boolean;
  content: string;
  variant: "text" | "outlined" | "contained";
};

const CustomButton = ({
  children,
  onclick,
  variant,
  disabled,
  content,
}: Props) => {
  return (
    <>
      <Button variant={variant}></Button>
      <button disabled={disabled} onClick={onclick}>
        {content}
      </button>
    </>
  );
};

export default CustomButton;
