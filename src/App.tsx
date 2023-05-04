import "./App.css";
import { Paper,styled,Container,Grid, Button } from "@mui/material";
import { GridOperationButton } from "./griddigitOp";
import React,{useState} from "react";
import { GridDigitButton } from "./griddigitbutton";
//  import Muitypography from "./components/MuiTypography";
// // import { MuiButton } from "./MuiButton";
// import { Button } from "@mui/material";
//  import { Settings, Add } from "@mui/icons-material";
    //  <div>
//             {/* <h1>hello world</h1>
//             <Muitypography />
//             <MuiButton /> */}
{/* //             <Button 
//                 variant="text" */}
//                 color="primary"
//                 size="small"
//             >
//             TEXT
//             </Button>
//             <Button
//                 startIcon={<Settings />}
//                 variant="contained"
//                 color="secondary"
//                 size="small"
//             >
//                 Settings
//             </Button>
//             <Button
//                 startIcon={<Add />}
//                 variant="contained"
//                 color="success"
//                 size="small"
//             >
//                 Add new Post
//             </Button>
//             <Button variant="outlined" disabled>
//                 Outlined
//             </Button>
//             <Button variant="contained"  disabled sx={{
//                 backgroundColor: "skyblue",
//                 color: "#888",
//                 margin: 5,
//                 "&:hover": {
//                     backgroundColor: "  Lightblue",
//                 },
//                 "&:disabled": {
//                     backgroundColor: "  gray",
//                     color: "white",
//                 }
//             }} >
//                 My Unique Button

//             </Button>
        
//         </div>
//     );
// }
// export default App;
// // import React, { FC,createContext} from 'react';
// // import './App.css';
// // import { Person, HairColor } from './components/Person';
// // interface AppContextInterface { 
// //     name: string;
// //     Age: number;
// //     country:string
// // }
// // // const getName = (name: string): number => {
// // //     if (name === "Pedro") {
// // //         return 20
// // //     } else {
// // //         return 0;
// // //     }
// // // }
// // const AppContext = createContext<AppContextInterface| null>(null);
// // //  createContext<AppContextInterface>({ name: "", Age: 0, country: "" });
// //  const App: FC = () => {
// //     const contextValue: AppContextInterface = {
// //         name: "Pedro",
// //         Age: 20,
// //         country: "Brazil",
// //     };
// //     return (
// //         <AppContext.Provider value={contextValue}>
// //             <div className="App">
// //                 <Person
// //                     name="larissa"
// //                     Age={56}
// //                     email="pedro@email.com"
// //                     hairColor={HairColor.Blonde}
// //                 />
// //             </div>
// //             country: {contextValue.country}
// //             name: {contextValue.name}
// //         </AppContext.Provider>
const OutputContainer = styled('div')(({ theme }) => ({
    width: "100 %",
    textAlign: "right",
    height: " 3em",
    padding: theme.spacing(1),
    fontSize: "1.5em",
    overflow: "hidden",

    

}))    
const CalculatorBase = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    borderRadius:20,
}))


function App() {
    const [currentValue, setCurrentValue] = useState("0");
    const [operation, setOperation] = useState("");  
    const [prevValue, setPrevValue] = useState("")
    const [overwrite, setOverwrite] = useState(true)
    const calculate = () => {
        if (!prevValue || !operation) return currentValue
        const curr = parseFloat(currentValue);
        const prev = parseFloat(prevValue);
        let result;
        switch (operation) {
            case "+":
                result = prev + curr;
                break;
            case "-":
                result = prev - curr;
                break;
            case "*":
                result = prev * curr;
                break;
            case "/":
                result = prev / curr;
                break;
        }
        return result;
    }
    const equals = () => {
        const val = calculate()
        setCurrentValue(`${val}`)
        setPrevValue("")
        selectOperation("")
        setOverwrite(true)

    }
    const clear = () => {
        setPrevValue("");
        setOperation("");
        setCurrentValue("0");
        setOverwrite(true);
    };
    const del = () => {
        if (currentValue !== "0") {  
            setCurrentValue(prev => {
                if (prev.length <= 1) {
                    setOverwrite(true)
                    return "0"
                } else {
                    let temp = prev.split("")
                    temp.pop()
                    return temp.join("")   
                }
            })
        }
      
    }
    const percent = () => {
        const curr = parseFloat(currentValue)
       setCurrentValue ((curr/100).toString())
    }

    const selectOperation = (operation: string) => {
        if (prevValue) {
            const val = calculate()
            setCurrentValue(`${val}`)
            setPrevValue(`${val}`);
        } else {
     
            setPrevValue(currentValue)
        
        }
        setOperation(operation)
            setOverwrite(true);
    }
    const setDigit = (  digit: string) => {
        if (currentValue.includes(".") && digit == ".") return;
        if (currentValue[0] === "0" && digit === "0") return;
        if (overwrite && digit !== ".") {
            setCurrentValue(digit);
        } else {
            setCurrentValue(`${currentValue}${digit}`)
        }
        setOverwrite(false);
    }
    return (
        <Container maxWidth="sm">
            <CalculatorBase elevation={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <OutputContainer>{currentValue}</OutputContainer>
                    </Grid>
                    <Grid item container columnSpacing={1}>
                        <GridOperationButton
                            operation={"AC"}
                            selectOperation={clear}
                            selectedOperation={operation}
                        />
                        <GridOperationButton
                            operation={"C"}
                            selectOperation={del}
                            selectedOperation={operation}
                        />
                        <GridOperationButton
                            operation={"%"}
                            selectOperation={percent}
                            selectedOperation={operation}
                        />
                        <GridOperationButton
                            operation={"/"}
                            selectOperation={selectOperation}
                            selectedOperation={operation}
                        />
                    </Grid>
                    <Grid item container columnSpacing={1}>
                        <GridDigitButton digit={"7"} enterdigit={setDigit} />
                        <GridDigitButton digit={"8"} enterdigit={setDigit} />
                        <GridDigitButton digit={"9"} enterdigit={setDigit} />
                        <GridOperationButton
                            operation={"*"}
                            selectOperation={selectOperation}
                            selectedOperation={operation}
                        />
                    </Grid>
                    <Grid item container columnSpacing={1}>
                        <GridDigitButton digit={"4"} enterdigit={setDigit} />
                        <GridDigitButton digit={"5"} enterdigit={setDigit} />
                        <GridDigitButton digit={"6"} enterdigit={setDigit} />
                        <GridOperationButton
                            operation={"-"}
                            selectOperation={selectOperation}
                            selectedOperation={operation}
                        />
                    </Grid>
                    <Grid item container columnSpacing={1}>
                        <GridDigitButton digit={"1"} enterdigit={setDigit} />
                        <GridDigitButton digit={"2"} enterdigit={setDigit} />
                        <GridDigitButton digit={"3"} enterdigit={setDigit} />
                        <GridOperationButton
                            operation={"+"}
                            selectOperation={selectOperation}
                            selectedOperation={operation}
                        />
                    </Grid>
                    <Grid item container columnSpacing={1}>
                        <GridDigitButton
                            digit={"0"}
                            enterdigit={setDigit}
                            xs={6}
                        />
                        <GridDigitButton digit={"."} enterdigit={setDigit} />
                        <Grid item xs={3}>
                            <Button fullWidth variant="contained" onClick={equals}>
                                =
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CalculatorBase>
        </Container>
    );
    
    
    
 }

export default App;
