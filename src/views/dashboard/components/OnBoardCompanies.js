import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import DashboardCard from "../../../components/shared/DashboardCard";
import Dropdown from "./DropDown";
import SearchAppBar from "../../../layouts/full/header/SearchBar";

const CompanyData = [
  {
    id: "1",
    name: "Sunil Joshi",
    onboardingDate: "2023-10-10",
    goLiveDate: "2023-10-15",
    totalUserBase: 1500,
    lastBilling: "$2000",
    status: "Active",
  },
  {
    id: "2",
    name: "Andrew McDownland",
    onboardingDate: "2023-10-12",
    goLiveDate: "2023-10-17",
    totalUserBase: 2000,
    lastBilling: "$3500",
    status: "Inactive",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    onboardingDate: "2023-10-08",
    goLiveDate: "2023-10-20",
    totalUserBase: 1800,
    lastBilling: "$2800",
    status: "Active",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    onboardingDate: "2023-10-11",
    goLiveDate: "2023-10-18",
    totalUserBase: 2200,
    lastBilling: "$4000",
    status: "Active",
  },
];

const OnBoardCompanies = () => {
  return (
    <DashboardCard title="Onboarded Companies">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Dropdown />
        </Box>
        <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
          <SearchAppBar />
        </Box>
      </Box>
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Company Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Onboarding date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Go-Live Date
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Total User base
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Last Billing
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Status
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {CompanyData.map((company) => (
              <TableRow key={company.id}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {company.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {company.name}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {company.post}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    {company.onboardingDate}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    {company.goLiveDate}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{company.totalUserBase}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{company.lastBilling}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Chip
                    sx={{
                      backgroundColor:
                        company.status === "Active"
                          ? "success.main"
                          : "error.main",
                      color: "#fff",
                    }}
                    size="small"
                    label={company.status}
                  ></Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default OnBoardCompanies;
