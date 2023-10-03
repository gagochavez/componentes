import { Alert } from "@mui/material";

interface MessageProps {
  data: string;
}

export const Message = (props: MessageProps) => {
  const { data } = props;

  return (
    <>
      <Alert sx={{ width: "80%", margin: "0 auto 2rem auto" }} severity="error">
        {data}
      </Alert>
    </>
  );
};
