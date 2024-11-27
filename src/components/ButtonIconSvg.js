import { Box, Typography } from "@mui/material";
import SVGicon from "./SVGicon";
import { useNavigate  } from 'react-router-dom'

const ButtonIconSvg = ( props ) => {
    const history = useNavigate()

    const handle = () => {
        history( 'category/' + props.id)
    }

    return (
        <Box onClick={handle} className="iconBoxBtn" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <SVGicon
                name={props.name} 
                size={props.size}
                color={props.color}
            />
            <Typography>{props.title}</Typography>
        </Box>
    )
};

export default ButtonIconSvg;