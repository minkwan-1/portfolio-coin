import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useDarkContext } from "../../../provider/DarkModeProvider";

const ModeChangeButton = () => {
  const context = useDarkContext();
  return (
    <IconButton onClick={context.toggleColorMode}>
      {context.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ModeChangeButton;
