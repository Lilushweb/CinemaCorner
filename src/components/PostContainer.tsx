// import React, {useEffect, useState} from 'react';
// import PostItem from "./PostItem.tsx";
// import {IPost} from "../models/IPost.ts";
//
// const PostContainer = () => {
//     const [limit, setLimit] = useState(100)
//
//     const { data: posts, error, isLoading , refetch} = postApi.useFetchAllPostsQuery(limit,);
//     const [createPost, {}] = postApi.useCreatePostMutation()
//     const [updatePost, {} ] = postApi.useUpdatePostMutation()
//     const [deletePost, {}] = postApi.useDeletePostMutation()
//
//     //
//     // useEffect(() => {
//     //     setTimeout(() => {
//     //         setLimit(2)
//     //     },2000)
//     // },[])
//
//     const hendelCreate = async () => {
//         const title = prompt()
//         if(title && title !== null) {
//             await createPost({title, body: title} as IPost)
//         }
//     }
//
//     const handelUpdate = (post: IPost) => {
//         updatePost(post)
//     }
//
//     const handelDelete = (post: IPost) => {
//         deletePost(post)
//     }
//
//     return (
//         <div>
//             <div className="post__list">
//                 <button onClick={hendelCreate}>Добавть новый пост</button>
//                 {isLoading && <h1> Идет загрузка...</h1>}
//                 {error && <h1> Ошибка при загрузке </h1>}
//                 {posts && posts.map(post =>
//                     <PostItem remove={handelDelete} update={handelUpdate} post ={post} key={post.id}/>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default PostContainer;