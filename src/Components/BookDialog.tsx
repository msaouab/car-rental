import {
	Fragment,
	ReactElement,
	Ref,
	forwardRef,
	useEffect,
	useState,
} from "react";
import { DialogStyle } from "../Styled/DialogStyle";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import Button from "@mui/material/Button/Button";
import Slide from "@mui/material/Slide/Slide";
import { TransitionProps } from "@mui/material/transitions/transition";
import { IoClose } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { Theme, useTheme } from "@mui/material";

interface BookDialogProps {
	OpenDialog: boolean;
}

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: ReactElement;
	},
	ref: Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export const BookDialog = (props: BookDialogProps) => {
	const { OpenDialog } = props;
	const [visible, setVisible] = useState<boolean>(false);
	const theme: Theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

	useEffect(() => {
		if (OpenDialog) {
			// If OpenDialog is true, open the dialog
			setVisible(true);
		}
	}, [OpenDialog]);

	// const handleClickOpen = () => {
	// 	setVisible(true);
	// };

	const handleClose = () => {
		setVisible(false);
	};

	return (
		<DialogStyle>
			<Fragment>
				<Dialog
					open={visible}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleClose}
					aria-describedby="alert-dialog-slide-description"
					fullScreen={fullScreen}
					PaperProps={{
						style: {
							backgroundColor: "var(--white-color)",
							width: "100%",
							boxShadow: "none",
						},
					}}
				>
					<DialogTitle
						id="alert-dialog-slide-title"
						style={{
							textAlign: "center",
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							backgroundColor: "var(--secondary-color)",
							color: "var(--white-color)",
							fontWeight: "bold",
						}}
					>
						<h1
							style={{
								margin: "0",
								padding: "0",
								fontSize: "1.5rem",
							}}
						>
							COMPLETE RESERVATION
						</h1>
						<IoClose
							onClick={handleClose}
							style={{
								cursor: "pointer",
								fontSize: "2rem",
							}}
						/>
					</DialogTitle>
					<DialogContent style={{ padding: "0" }}>
						<DialogContentText
							id="alert-dialog-slide-description"
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "start",
								justifyContent: "center",
								gap: "1rem",
								color: "var(--secondary-color)",
								fontSize: "0.7rem",
								backgroundColor: "#ffeae6",
								padding: "1rem",
								fontFamily: "var(--title-font)",
							}}
						>
							<h1 style={{ display: "flex", gap: "0.5rem" }}>
								<RiErrorWarningLine
									style={{
										fontSize: "2rem",
										fontWeight: "bold",
									}}
								/>
								Upon completing this reservation enquiry, you
								will receive:
							</h1>
							<div>
								<p
									style={{
										fontSize: "1rem",
										fontFamily: "var(--text-font)",
									}}
								>
									Your rental voucher to produce on arrival at
									the rental desk and a toll-free customer
									support number.
								</p>
							</div>
						</DialogContentText>
						{/* <DialogContentText
							id="alert-dialog-slide-description"
							style={{
								display: "flex",
								alignItems: "start",
								justifyContent: "center",
								gap: "1rem",
								color: "var(--secondary-color)",
								fontSize: "0.7rem",
								backgroundColor: "#ffeae6",
								padding: "1rem",
							}}
						>
							<RiErrorWarningLine
								style={{
									fontSize: "2rem",
									fontWeight: "bold",
								}}
							/>
							<h1>
								You will be contacted within 24 hours of
								completion of this reservation enquiry to
								confirm your reservation details.
							</h1>
						</DialogContentText> */}
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Disagree</Button>
						<Button onClick={handleClose}>Agree</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		</DialogStyle>
	);
};
