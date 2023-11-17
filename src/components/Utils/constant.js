import AdjustIcon from "@mui/icons-material/Adjust";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LockResetIcon from "@mui/icons-material/LockReset";
export const demoData = [
  {
    id: 1,
    title: "Step1",
    heading: "Initiate Account Owner Authentication",
    description: "",
    icon: <CheckCircleIcon />,
  },
  {
    id: 2,
    title: "Step2",
    heading: "Verify Identity of the Original FTX Account Owner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis.",
    icon: <CheckCircleIcon />,
  },
  {
    id: 3,
    title: "Step3",
    heading: "KYC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis.",
    icon: <CheckCircleIcon />,
  },
  {
    id: 4,
    title: "Step4",
    heading: "Verify Identity of the Original FTX Account Owner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis.",
    icon: <AdjustIcon />,
  },
  {
    id: 5,
    title: "Step5",
    heading: "Verify Identity of the Original FTX Account Owner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis.",
    icon: <AdjustIcon />,
  },
  {
    id: 6,
    title: "Step6",
    heading: "Standby for Next steps",
    description: "",
    icon: <LockResetIcon />,
  },
];
export const tableDataBalances = [
  {
    coin: "USD Tether(USD)",
    allBalances: "0.00",
    subAccountBalances: "0.00",
  },
  {
    coin: "Bitcoin(BTC)",
    allBalances: "0.45638",
    subAccountBalances: "0.3343",
  },
  {
    coin: "Binance coin(BNB)",
    allBalances: "1.02323",
    subAccountBalances: "1.08322",
  },
  {
    coin: "TRON(TRX)",
    allBalances: "1",
    subAccountBalances: "1",
  },
];
export const balanceTableColumns = [
  { id: "coin", label: "Coin" },
  { id: "allBalances", label: "All SubAccount Balance" },
  { id: "subAccountBalances", label: "Subaccount Balance" },
];
export const withDrawTableColums = [
  { id: "time", label: "Time" },
  { id: "amount", label: "Amount" },
  { id: "coin", label: "Coin" },
  { id: "destination", label: "Destination" },
];
export const tableDataWithDraw = [
  {
    time: "USD Tether(USD)",
    coin: "TRON(TRX)",
    amount: "0.00",
    destination: "akjdfkajdskajdsajsdfkjkasjfkajdfjsalsjajasd",
  },
  {
    time: "USD Tether(USD)",
    coin: "TRON(TRX)",
    amount: "0.00",
    destination: "asdjfklajkfsadlkjfsakjasdjflsaljsdlljalkfdas",
  },
];
export const fillsTableColums = [
  { id: "time", label: "Time" },
  { id: "market", label: "Market" },
  { id: "orderType", label: "Order Type" },
  { id: "size", label: "Size" },
  { id: "price", label: "Price" },
  { id: "total", label: "Total" },
];
export const ftxTableColums = [
  { id: "time", label: "Time", sortable: true },
  { id: "currency", label: "Currency" },
  { id: "size", label: "Size" },
  { id: "size(usd)", label: "Size(USD)" },
];
export const fixTableData = [
  {
    time: "11/10/2022, 8:30:00 AM",
    currency: "BTC",
    size: "0.342362 BTC",
    "size(usd)": "0.02323 USD",
  },
  {
    time: "11/10/2022, 8:30:00 AM",
    currency: "BTC",
    size: "0.342362 BTC",
    "size(usd)": "0.02323 USD",
  },
  {
    time: "11/10/2022, 8:30:00 AM",
    currency: "BTC",
    size: "0.342362 BTC",
    "size(usd)": "0.02323 USD",
  },
  {
    time: "11/10/2022, 8:30:00 AM",
    currency: "BTC",
    size: "0.342362 BTC",
    "size(usd)": "0.02323 USD",
  },
  {
    time: "11/10/2022, 8:30:00 AM",
    currency: "BTC",
    size: "0.342362 BTC",
    "size(usd)": "0.02323 USD",
  },
  {
    time: "11/10/2022, 8:30:00 AM",
    currency: "BTC",
    size: "0.342362 BTC",
    "size(usd)": "0.02323 USD",
  },
  {
    time: "11/10/2022, 8:30:00 AM",
    currency: "BTC",
    size: "0.342362 BTC",
    "size(usd)": "0.02323 USD",
  },
  {
    time: "11/10/2022, 8:30:00 AM",
    currency: "BTC",
    size: "0.342362 BTC",
    "size(usd)": "0.02323 USD",
  },
];
export const sportMarginColumns = [
  { id: "time", label: "Time", sortable: true },
  { id: "currency", label: "Currency" },
  { id: "borrowSize", label: "Borrow Size" },
  { id: "borrowCost", label: "Borrow Cost" },
  { id: "costInUsd", label: "Cost in USD" },
];
export const fundingPaymentsColumns = [
  { id: "time", label: "Time" },
  { id: "price", label: "Price" },
];
export const p2pTransfersColumns = [
  { id: "time", label: "Time" },
  { id: "name", label: "Name" },
  { id: "amount", label: "Amount" },
  { id: "message", label: "Message" },
  { id: "status", label: "Status" },
];
export const refferalDebatesColumns = [
  { id: "time", label: "Time" },
  { id: "amount", label: "Amount" },
];
export const balanceAdjustMentColums = [
  { id: "time", label: "Time" },
  { id: "currency", label: "Currency" },
  { id: "size", label: "Size" },
  { id: "description", label: "Description" },
];
