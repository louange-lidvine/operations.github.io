import {Button, Grid} from "@mui/material"
interface GridDigitButtonProps{
    digit: string;
    enterdigit: (digit: string) => void;
     xs?: number;     
}


export const GridDigitButton: React.FC<GridDigitButtonProps> = ({
    digit,
    enterdigit,
    xs=3,
}) => {
    return (
        <Grid item xs={xs}>
            <Button fullWidth variant="outlined" onClick={() => {
                enterdigit(digit)
            }}>{digit}</Button>
        </Grid>
    )
    
}
