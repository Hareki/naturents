import Grow from '@mui/material/Grow';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const DefaultToolTip = styled(
  ({ tooltip, className, ...props }) => (
    <Tooltip
      enterDelay={100}
      TransitionComponent={Grow}
      title={tooltip}
      placement='top'
      {...props}
      classes={{ popper: className }}
    />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.grey[500],
    fontSize: 12,
    fontWeight: 400
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.grey[500]
  }
}));
