import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import predefinedTeams from "../../constants/predefinedTeams";

const SearchBarTeam = ({ validateQTeam }) => {
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
    <div style={{ paddingBottom: 20 }}>
      <Autocomplete
        id="teams"
        freeSolo
        options={predefinedTeams.map((team) => team.full_name)}
        renderInput={(params) => (
          <CssTextField
            {...params}
            label="Select team and press Enter"
            margin="normal"
            variant="outlined"
            onKeyPress={(e) => validateQTeam(e)}
          />
        )}
      />
    </div>
  );
};

SearchBarTeam.displayName = "SearchBarTeam";

export default SearchBarTeam;
