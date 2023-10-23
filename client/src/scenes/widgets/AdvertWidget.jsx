import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";


export default function AdvertWidget(){
    const {palette} = useTheme();
    const dark = palette.neutral.dark,
    medium = palette.neutral.medium,
    main = palette.neutral.main;


    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight={"500"}>
                    Sponsored
                </Typography>
                <Typography color={medium} >
                    Create Ad
                </Typography>
            </FlexBetween>
            <img 
                width={"100%"}
                height= "auto"
                alt="advert image"
                // src="http://localhost:3001/assets/info4.jpeg"
                src="https://images.unsplash.com/photo-1697081544011-e472e6a19cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
                style={{
                    borderRadius: ".75rem",
                    margin: ".75rem 0"
                }}
            />
            <FlexBetween>
                <Typography color={main}>
                    Mikacosmetics
                </Typography>
                <Typography color={medium}>
                    mikacosmetics.com
                </Typography>
            </FlexBetween>
            <Typography
                color={medium}
                m=".5rem 0"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio iure neque qui facere illum. Architecto atque est nostrum ullam.
            </Typography>
        </WidgetWrapper>
    )


}


// export default AdvertWidget;