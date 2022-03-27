import React, { useState } from "react";
import "./feedContent.css";
import { MoreVert } from "@mui/icons-material";
import moment from "moment";

// import { Users } from "../dummydata";

export default function FeedContent({ content, post, setCurrentId }) {
	// const [likes, setLikes] = useState(content.like);
	// const [liked, isLiked] = useState(false);

	// function likeHandler() {
	// 	if (liked) {
	// 		setLikes(likes - 1);
	// 		isLiked(false);
	// 	} else {
	// 		setLikes(likes + 1);
	// 		isLiked(true);
	// 	}
	// }

	// const dispatch = useDispatch();
	return (
		<div className="content">
			<div className="contentWrapper">
				<div className="contentTop">
					<div className="contentTopLeft">
						{/* <img
							className="contentProfileImg"
							src={
								Users.filter((user) => user.id === content.userId)[0]
									.profilePicture
							}
							alt=""
						/> */}
						<span className="contentUsername">{post.creator}</span>
						<span className="postTime">{moment(post.createdAt).fromNow()}</span>
					</div>
					<div className="contentTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="contentCenter">
					<span className="contentText">{post.message}</span>
					<img className="contentImg" src={post.selectedFile} alt="" />
				</div>
				<div className="contentBottom">
					<div className="contentBottomLeft">
						<img
							className="likeIcon"
							src="assets/like.png"
							alt=""
							// onClick={likeHandler}
						/>
						<img
							className="likeIcon"
							src="assets/heart.png"
							alt=""
							// onClick={likeHandler}
						/>
						<span className="contentLikeCounter">$number people like it</span>
					</div>
					<div className="contentBottomRight">
						<span className="contentCommentText">$number comments</span>
					</div>
				</div>
			</div>
		</div>
	);
}