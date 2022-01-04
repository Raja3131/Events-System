import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    background: {
        paper: '#fff',
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#e4e8ef',
        height:'100%',
        width:'100%',
        // boxShadow:,
        boxShadow: '0px 15px 10px -15px #111'
    },
    ml: {
        marginLeft: '1%'
    }
}));
export default useStyles;