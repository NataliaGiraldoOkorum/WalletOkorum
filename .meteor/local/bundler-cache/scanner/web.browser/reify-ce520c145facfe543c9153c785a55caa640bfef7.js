module.export({default:()=>makeStyles});let _formatMuiErrorMessage;module.link("@mui/utils",{formatMuiErrorMessage(v){_formatMuiErrorMessage=v}},0);
function makeStyles() {
  throw new Error(process.env.NODE_ENV !== "production" ? `MUI: makeStyles is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : _formatMuiErrorMessage(14));
}