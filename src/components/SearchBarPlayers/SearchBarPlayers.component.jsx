import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import predefinedPlayers from "../../constants/predefinedPlayers";
import "./SearchBarPlayer.styles.scss";

const SearchBarPlayers = ({ currentQuery, validateQPlayer }) => {
  const CssTextField = withStyles({
    root: {
      "& label": {
        color: "#ffffff",
      },
      "& label.Mui-focused": {
        color: "#ffffff",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#ffffff",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#ffffff",
        },
        "& input": {
          color: "#ffffff",
        },
        "&:hover fieldset": {
          borderColor: "#ffffff",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#ffffff",
        },
      },
    },
  })(TextField);

  return (
    <div className="SearchBar">
      <Autocomplete
        id="teams"
        freeSolo
        options={predefinedPlayers.map((player) => player.name)}
        renderInput={(params) => (
          <CssTextField
            {...params}
            label="First or last name"
            margin="normal"
            variant="outlined"
            onKeyPress={(e) => validateQPlayer(e)}
          />
        )}
      />
    </div>
  );
};

SearchBarPlayers.displayName = "SearchBarPlayers";

export default SearchBarPlayers;
