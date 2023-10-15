import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined
} from "@mui/icons-material";
import {
    Box,
    Divider,
    IconButton,
    Typography,
    useTheme
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";



const PostWidget = ({
    postId,
    postUserId,
    name,
    description,
    location,
    picturePath,
    userPicturePath,
    likes,
    comments
}) => {
    const [isComments, setIsComments] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);
    const isLiked = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;

    const { palette } = useTheme();
    const primary = palette.primary.main,
        main = palette.neutral.main;

    const patchLike = async () => {
        const response = await fetch(
            `http://localhost:3001/posts/${postId}/like`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId: loggedInUserId })
            }
        )
        const updatedPost = await response.json();
        dispatch(setPost({ post: updatedPost }));
        console.log(response);
    }


    return (
        <WidgetWrapper m="2rem 0">
            <Friend
                frinedId={postUserId}
                name={name}
                subtitle={location}
                userPicturePath={userPicturePath}
            />
            <Typography
                color={main}
                sx={{
                    mt: "1rem"
                }}
            >
                {description}
            </Typography>
            {picturePath && (
                <img
                    width="100%"
                    height="auto"
                    style={{
                        borderRadius: ".75rem",
                        marginTop: ".75rem"
                    }}
                    src={`https://images.unsplash.com/photo-1697081544011-e472e6a19cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80`}
                    // src={`http://localhost:3001/assets/${picturePath}`}
                    alt="posts image"
                />
            )}
            {console.log(picturePath)}
            <FlexBetween mt=".25rem">
                <FlexBetween gap="1rem">
                    <FlexBetween gap=".3rem">
                        <IconButton
                            onClick={patchLike}
                        >
                            {isLiked ? (
                                <FavoriteOutlined sx={{ color: primary }} />
                            ) : (
                                <FavoriteBorderOutlined />
                            )}
                        </IconButton>
                        <Typography>
                            {likeCount}
                        </Typography>
                    </FlexBetween>

                    <FlexBetween gap=".3rem">
                        <IconButton
                            onClick={() => setIsComments(!isComments)}
                        >
                            <ChatBubbleOutlineOutlined />
                        </IconButton>
                        <Typography>
                            {comments.length}
                        </Typography>
                    </FlexBetween>
                </FlexBetween>
                <IconButton>
                    <ShareOutlined />
                </IconButton>
            </FlexBetween>

            {isComments && (
                <Box
                    mt=".5rem"
                >
                    {comments.map((comment, i) => {
                        <Box key={`${name}-${i}`}>
                            <Divider />
                            <Typography
                                sx={{
                                    color: main,
                                    m: ".5rem 0",
                                    pl: "1rem"
                                }}
                            >
                                {comment}
                            </Typography>
                        </Box>
                    })}
                    <Divider />
                </Box>
            )}

        </WidgetWrapper>
    );
};



export default PostWidget;