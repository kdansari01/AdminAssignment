import React from "react";
import { Grid, Box, Container } from "@mui/material";

import PerfoIndicator from "./components/PerfoIndicator";
import CompanyStatus from "./components/CompanyStatus";
import ActiveUser from "./components/ActiveUser";
import RegionalMetrics from "./components/RegionalMetrics";
import OnBoardCompanies from "./components/OnBoardCompanies";
import PageContainer from "../../components/container/PageContainer";

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="This is Dashboard">
      <Container>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <PerfoIndicator />
          <CompanyStatus />
          <ActiveUser />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <OnBoardCompanies />
          </Grid>
          <Grid item xs={12} md={4}>
            <RegionalMetrics />
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default Dashboard;
