import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

import {IPost} from "../store/models/IPost.ts";


export const postApi = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit = 2)=>({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post)=>({
                url: '/posts',
                method: 'POST',
                body: post
            })
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post)=>({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            })
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post)=>({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            })
        })
    })
})

export const {useFetchAllPostsQuery} = postApi

