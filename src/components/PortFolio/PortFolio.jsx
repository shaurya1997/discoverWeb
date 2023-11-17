import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import { styled } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Balances from "../Balances/Balances";
import LoadingButton from "@mui/lab/LoadingButton";
import Deposit from "../Deposit/Deposit";
import Withdraw from "../WithDraw/WithDraw";
import FillsData from "../FillsData/FillsData";
import FtxAppEarn from "../FtxAppEarn/FtxAppEarn";
import SportMarginData from "../SpotMarginData/SpotMarginData";
import FundingPayment from "../FundingPayment/FundingPayment";
import P2PTransfers from "../P2PTransfers/P2PTransfers";
import RefferalRebates from "../ReffferalRebates/RefferalRebates";
import BalanceAdjustMent from "../BalanceAdjustMent/BalanceAdjustMent";

const PortFolioGrid = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
});
const SelectMenu = styled(Select)({
  color: "white",
  outline: "none",
  border: "none",
  background: "rgb(55 61 75)",
});

const ButtonWrap = styled(LoadingButton)({
  marginTop: "2rem",
  width: "100%",
  backgroundColor: "rgb(55, 61, 75)",
  "&:hover": {
    backgroundColor: "rgb(55, 61, 75)",
  },
});

const PortFolio = () => {
  const [age, setAge] = useState("My Account");
  const [tab, setTab] = useState("Balances");
  const [download, setDownload] = useState(false);
  const [childTab, setChildTab] = useState("FTX App Earn");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const tabList = [
    { label: "Balances", value: "Balances" },
    { label: "Deposit", value: "Deposit" },
    { label: "Withdraw", value: "Withdraw" },
    { label: "Positions", value: "Positions" },
    { label: "Fills", value: "Fills" },
    { label: "P2P Transfers", value: "P2P Transfers" },
    { label: "Refferal Rebates", value: "Refferal Rebates" },
    { label: "Balance Adjustment", value: "Balance Adjustment" },
    { label: "Other", value: "Other" },
  ];
  const childTabList = [
    { label: "FTX App Earn", value: "FTX App Earn" },
    { label: "Spot Margin Lends", value: "Spot Margin Lends" },
    { label: "Spot Margin Borrows", value: "Spot Margin Borrows" },
    { label: "Funding Payments", value: "Funding Payments" },
  ];
  const handleTabChange = (e, value) => {
    setTab(value);
  };
  const handleDownLoad = () => {
    setDownload(true);
    setTimeout(() => {
      setDownload(false);
    }, 2000);
  };
  const handleChildTabChange = (e, value) => {
    setChildTab(value);
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <PortFolioGrid>
          <Typography sx={{ fontSize: "0.875rem" }}>PortFolio</Typography>
          <LockIcon sx={{ fontSize: "1rem" }} />
        </PortFolioGrid>
        <SelectMenu
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label=""
          onChange={handleChange}
          sx={{ width: "50%" }}
        >
          <MenuItem value="My Account">My Account</MenuItem>
          <MenuItem value="Your Account">Your Account</MenuItem>
        </SelectMenu>
      </Box>
      <ButtonWrap
        variant="contained"
        onClick={handleDownLoad}
        loading={download}
      >
        Download All Core Transactions
      </ButtonWrap>
      <Typography
        variant="body1"
        sx={{ fontSize: "0.75rem", marginTop: "1rem" }}
      >
        Transactions will be downloaded for the User's main account or the
        currently selected subaccount.may not include additional balance
        adjustments.Please download these using the adjustments tab{" "}
      </Typography>
      <TabContext value={tab}>
        <TabList
          onChange={handleTabChange}
          aria-label="lab API tabs example"
          variant="scrollable"
        >
          {tabList.map((item, index) => {
            return (
              <Tab
                label={item.label}
                value={item.value}
                key={index}
                sx={{ color: "white", fontSize: "0.7rem" }}
              />
            );
          })}
        </TabList>
        <TabPanel value="Balances">
          <Balances />
        </TabPanel>
        <TabPanel value="Deposit">
          <Deposit />
        </TabPanel>
        <TabPanel value="Withdraw">
          <Withdraw />
        </TabPanel>
        <TabPanel value="Positions">
          <></>
        </TabPanel>
        <TabPanel value="Fills">
          <FillsData />
        </TabPanel>
        <TabPanel value="P2P Transfers">
          <P2PTransfers/>
        </TabPanel>
        <TabPanel value="Refferal Rebates">
          <RefferalRebates/>
        </TabPanel>
        <TabPanel value="Balance Adjustment">
          <BalanceAdjustMent/>
        </TabPanel>
        <TabPanel value="Other">
          <TabContext value={childTab}>
            <TabList
              onChange={handleChildTabChange}
              aria-label="lab API tabs example"
            >
              {childTabList.map((item, index) => {
                return (
                  <Tab
                    label={item.label}
                    value={item.value}
                    key={index}
                    sx={{ color: "white", fontSize: "0.7rem" }}
                  />
                );
              })}
            </TabList>
            <TabPanel value="FTX App Earn">
              <FtxAppEarn />
            </TabPanel>
            <TabPanel value="Spot Margin Lends">
              <SportMarginData />
            </TabPanel>
            <TabPanel value="Spot Margin Borrows">
              <SportMarginData />
            </TabPanel>
            <TabPanel value="Funding Payments">
              <FundingPayment />
            </TabPanel>
          </TabContext>
        </TabPanel>
      </TabContext>
    </>
  );
};
export default PortFolio;
