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
                src="https://link-up-1.vercel.app/assets/info4.jpeg"
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