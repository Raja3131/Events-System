import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "50%",
        width: "50%",
        backgroundColor: "#e4e8ef",
        
    },
    button: {
        margin: theme.spacing(1),


    }
}))

export default useStyles