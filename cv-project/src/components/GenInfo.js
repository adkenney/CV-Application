import React from "react";
import EditableLabel from "./EditableLabel";
import Grid from "@mui/material/Grid";

const GenInfo = () => {
  return (
    <div>
      <div>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <EditableLabel value="Full Name" />
          <EditableLabel value="Phone Number" />
          <EditableLabel value="E-mail" />
        </Grid>
      </div>
    </div>
  );
};

export default GenInfo;
