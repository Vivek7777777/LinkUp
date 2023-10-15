import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
    return (
        <Box width={size} height={size}>
            {/* {console.log(image)} */}
            <img
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width={size}
                height={size}
                alt="user"
                src={`https://images.unsplash.com/photo-1697081544011-e472e6a19cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80`}
                // src={`http://localhost:3001/assets/${image}`}
            />
        </Box>
    );
};
export default UserImage;
