import { Grid, IconButton, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import FileCopyRoundedIcon from "@material-ui/icons/FileCopyRounded";

const useStyles = makeStyles({
  root: {
    color: "black",
  },
});

export default function PasswordDisplay({ password }) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <TextField
          classes={{
            root: classes.root,
          }}
          style={{ minWidth: 350 }}
          disabled
          value={password}
          variant="outlined"
          margin="normal"
          label="Password"
        />
      </Grid>
      <Grid item>
        <IconButton onClick={(e) => navigator.clipboard.writeText(password)}>
          <FileCopyRoundedIcon color="secondary" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
