import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Stack, Typography, Avatar } from "@mui/material";
import { IconArrowDownRight } from "@tabler/icons";
import { Chart as ChartJS } from "chart.js/auto";
import DashboardCard from "../../../components/shared/DashboardCard";

const RegionalMetrics = () => {
  <ChartJS />;

  const data = {
    labels: ["Red", "Blue", "Green", "Yellow"],
    datasets: [
      {
        data: [25, 20, 40, 15],
        backgroundColor: ["#FF0000", "#0000FF", "#008000", "#FFFF00"],
      },
    ],
  };

  const options = {
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <DashboardCard title="Regional Metrics">
      <>
        <div style={{ width: "100%", overflow: "auto" }}>
          <Doughnut data={data} options={options} height={200} />
        </div>
        <Stack direction="row" spacing={1} my={1} alignItems="center">
          <Avatar sx={{ bgcolor: "#FD7269", width: 27, height: 27 }}>
            <IconArrowDownRight width={20} color="#FA896B" />
          </Avatar>
          <Typography variant="subtitle2" fontWeight="600">
            +9%
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            last year
          </Typography>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default RegionalMetrics;
