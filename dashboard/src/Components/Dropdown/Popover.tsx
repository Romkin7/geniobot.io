import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { AppContext } from '../../store/appContext';
import { resetModal } from '../../utils';

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
	},
}));

export default function SimplePopover() {
	const { popover, setPopoverAction } = useContext(AppContext);
	const { anchorEl, content, id } = popover;
	const classes = useStyles();

	/* const handleClick = (event: any) => {
		setPopoverAction(event.currentTarget);
	}; */

	const handleClose = () => {
		setPopoverAction(null);
	};

	const open = Boolean(anchorEl);
	/* const id = open ? 'simple-popover' : undefined; */

	return (
		<div>
			{/* <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
				Open Popover
			</Button> */}
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<Typography className={classes.typography}>{content}</Typography>
			</Popover>
		</div>
	);
}
