import React from "react";
import "./CommonCard.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

function CommonCard() {
  return (
    <>
      <div className="w-100 main p-4 justify-content-center d-flex">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                ducimus rerum a eveniet suscipit aut unde perferendis architecto
                animi cupiditate?
              </p>
            </Grid>
            <Divider />
            <Grid item xs={12}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                minima expedita, velit enim fuga magnam beatae atque voluptatum
                ducimus iusto! Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quidem voluptatem dolores praesentium tenetur
                provident dolor fugiat rem deleniti officia optio debitis
                laborum repellat nobis voluptate, voluptatibus fuga distinctio
                voluptas mollitia recusandae quos minima hic similique
                consectetur eum! Praesentium dolorem nulla perferendis eum
                molestiae consequuntur at, quod repudiandae saepe debitis
                dolorum.
              </p>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default CommonCard;
