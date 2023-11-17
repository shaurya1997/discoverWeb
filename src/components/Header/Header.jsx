import React from "react";
import "./Header.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const WhiteButton = styled(Button)({
  color: "white",
});
const StyledMenu = styled(Menu)({
  backgroundColor: "",
});
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorLanguage, setAnchorLanguage] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickLanguage = (event) => {
    setAnchorLanguage(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorLanguage(null);
  };
  
  return (
    <div className="header">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcQAAACgCAMAAAClk+zVAAAAY1BMVEUAAAAAn8cAoscAocX///////////////////////////////////////////////////////////////////////////////8An89Ax98+x+NAx+dAw+P///9Az9+A5/986P6BCM6tAAAAIHRSTlMAIP+AYP8g369QoO8Qn3CAz39Av5Awj7AQIP8gQG8QIGKsqzgAAAQNSURBVHgB7MFBFQAABAUw6N9ZCe+fthUAAAAAAAAAAAAAAAAAQF7Pqz32zmRNVSUIwrkgq2iplpY6p+fp/Z/yrlxdUsLhI8pD/Etn/R0iEigtovPrSHYk+02xI73P8mAQu/hhS+J6EtPgc+RiAMHTezRJXFWi7X2W0QCyz5GTJK4s0Z58jgEwcfBZOpPEtSVOPku1JZLPkk0SV5dof3yWiZ9qJBGWWC7LNg8+yx9bCUlEHuV4UaopFImSaBXPNoRUI4kBUETpLSZlUkWUxECijUC2wVINTaIklvmbf7KIv9HPKEmiJMZlcX9mqjGiREmMsk0563l1VImSGAzCn+mpBpcoidEgfMJTzZA2JLHiFDvyUk8wN8Me6ins/zzBI9TETjV8idluTnf5dxuebeipRhIB/oDZpvNZ/kpiAxILlm14qUYSAfbQR2zH25wviQAVyDaJURElEecvIIiTaiQRZ1zcRthxBt+SiFPyQgNMmbQ5XxJxpoUP2jMh1YQWb8rr/UsEsw0/1RBoXyI4CJ9OKe6NjySi2YabaiQRJ8o2QOxpBUmcwu1MB35FlMSrBuG19VQjicAgvOv5g29JvHYQvurm/LeQ4CIYG5EYN4lVU817yMfR4fsFfG5H4l9HySaJJIlAtgH526xESSzZIR6tWYmSaA+OkNNWJQ4dBlUilm0626ZEHK7ENCCppmmJkmijL5IalyiJJQOppm2JkmgTkGoalyiJtgNSTeMSJbEMfoJqbUuURGAQntqWKIlAWRztPiRKYr57iZL4BYy+25YoiemfDzaqGHtJbFwi8NiHIon3P3brJbF1ic++yCSJbUtMvkwuTUvURuHsAGPLErV7xpdD/JXEdiWmwSGqJLYrcecge75EScRuj1AWP0KCi2B8b0ZiyQ7TGx8dUANXREJZlMRbV8Su4mWRjSRGC/ClAS+LXCTxEO7bNja87oIkAhVxHweeanwkEaiIGV+cmIIk4ssK17AsEvgJ2aJEfFnhNARnMxz+hvxsUyK6AN9IKouSiJOWfvRKJpRFSYTAlxWenFEWJRHnAGw1rISyKIkocWxBLlT5EiUR/7OEkVAWJRGlw+yU3EZZlES8Imb0EOJHvkRJfIb3haqEsiiJCAn/fKWhhbIoiXBFTDbDyC+LkohXxM6OINkmMSVKYnIo1Sxkm8qUKIm7M+cwPbMsSiJwA8BtpIFSFiUxJgGpBss2zyyJkrgLU01M5pZFScRTTczkhLIoiSH5oq1LPbMsSiJQEYEbSAOpLEoi/mW6KGNklUVJxFPNIplQFiURvS74KCenlUVJBCqiJwPoCWVREqEvU/zaaSCURUnEUw3EyC6LLP5rD44FAAAAAAb5W89iV/UDAAAAAAAAAAAAAAAAAAJKqDhNFb75kgAAAABJRU5ErkJggg=="
        alt="FTX"
        className="ftx-img"
      />
      <div className="right-item">
        <WhiteButton>Privacy</WhiteButton>
        <WhiteButton>FAQ</WhiteButton>
        <WhiteButton
          endIcon={<KeyboardArrowDownIcon />}
          id="fade-menu-language"
          onClick={handleClickLanguage}
          aria-controls={anchorLanguage ? "fade-menu-language" : undefined}
          aria-haspopup="true"
          aria-expanded={anchorLanguage ? "true" : undefined}
        >
          Language
        </WhiteButton>
        <StyledMenu
          id="fade-menu-language"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorLanguage}
          open={Boolean(anchorLanguage)}
          onClose={handleClose}
        >
          <MenuItem value="en" onClick={handleClose}>English</MenuItem>
          <MenuItem value="es" onClick={handleClose}>Español</MenuItem>
          <MenuItem value="fr" onClick={handleClose}>Français</MenuItem>
        </StyledMenu>
        <WhiteButton
          endIcon={<KeyboardArrowDownIcon />}
          id="fade-menu"
          onClick={handleClick}
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          My Account
        </WhiteButton>
        <StyledMenu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            Name:Qwerty
            <br />
            Occupation:SDE
          </MenuItem>
        </StyledMenu>
      </div>
    </div>
  );
};
export default Header;
