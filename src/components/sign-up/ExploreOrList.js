import { useState, useContext } from "react"
import { GlobalStylesContext } from "../../context/GlobalStyles"
import { Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import TouchAppIcon from '@mui/icons-material/TouchApp';

function ExploreOrList() {
    const {colors, fonts, background} = useContext(GlobalStylesContext)
    return (
        <div style={{textAlign: "center"}}>
            <h1 style={{...colors.black, ...fonts.montFont}}>What is your <span style={{...colors.mediumBlue}}>goal?</span></h1>
     
        <div
              style={{
                display: 'flex',
                flexDirection: 'column', // Stack the buttons vertically
                gap: '10px', // Optional: adds space between the buttons
                alignItems: 'center', // Optional: centers the buttons horizontally
              }}
        >
            <Button 
            style={{
                width: "350px", 
                height: "70px", 
                ...colors.black, 
                ...fonts.montFont, 
                padding: '10px 20px', 
                borderRadius: '50px',
                border: '0.5px solid #6EB2CC',
                borderColor: "#6EB2CC",

                display: 'flex', // Use flexbox to align the icon and text
                alignItems: 'center', // Vertically center the content
                justifyContent: 'flex-start', // Align content to the left
                gap: '10px' // Optional: Adds space between the icon and the text
                }}>
                 <SearchIcon style={{...colors.mediumBlue}} fontSize="large"/> <span style={{fontWeight: "bold"}}>Explore Amenities</span> 
            </Button>
         
            <Button 
            style={{
                width: "350px", 
                height: "70px", 
                ...colors.black, 
                ...fonts.montFont, 
                padding: '10px 20px', 
                borderRadius: '50px',
                border: '0.5px solid #6EB2CC',
                borderColor: "black",

                display: 'flex', // Use flexbox to align the icon and text
                alignItems: 'center', // Vertically center the content
                justifyContent: 'flex-start', // Align content to the left
                gap: '10px' // Optional: Adds space between the icon and the text
                }}>
                 <TouchAppIcon style={{...colors.black}} fontSize="large"/> 
                 <span style={{fontWeight: "bold"}}>List Amenities</span> 
            </Button>
                
            </div>
            <Button style={{
                marginTop: "10px",
                width: "350px",
                height: "60px", 
                ...background.mediumBlueBackground, 
                ...colors.white,
                padding: '10px 20px', 
                borderRadius: '50px',
                }}>
                Signup
            </Button>
        </div>
    )
}
export default ExploreOrList