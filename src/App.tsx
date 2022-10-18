import React, { FC, useEffect, useState } from "react"
import "./App.css"
import FilterBar from "./components/FilterBar"
import ListOfPosts from "./components/Posts"
import Comments from "./components/Comments"
import EditPost from "./components/EditPost"
import DeletePost from "./components/DeletePost"

interface PostItem {
    userId: number
    id: number
    title: string
    body: string
}
function App() {
    const [value, setValue] = useState("")
    const [targetId, setTargetId] = useState(0)
    const [showComments, setShowComments] = useState(false)
    const [edit, setEdit] = useState(false)
    const [posts, setPosts] = useState<PostItem[]>([])
    const [fDelete, setFDelete] = useState(false)
    const [doFilter, setDoFilter] = useState(false)
    const [loadingPosts, setLoadingPosts] = useState(false)

    const deletePost = () => {
        let newPosts = posts
        delete newPosts[targetId - 1]
        setPosts(newPosts)
        setFDelete(false)
    }

    const saveEdit = (id: number, title: string, body: string) => {
        posts[id - 1].title = title
        posts[id - 1].body = body
        setPosts(posts)
        setEdit(false)
    }

    const getPostsData = async (url: string) => {
        try {
            setLoadingPosts(true)
            const response = await fetch(url)
            const getPosts: any = await response.json()
            setPosts(getPosts)
            setLoadingPosts(false)
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        getPostsData("https://jsonplaceholder.typicode.com/posts")
    }, [])

    return (
        <div className="app">
            <FilterBar
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                }
                change={() => {
                    setDoFilter(!doFilter)
                }}
            />
            <ListOfPosts
                filter={value}
                doFilter={doFilter}
                isLoading={loadingPosts}
                handleDelete={(id: number) => {
                    setFDelete(true)
                    setTargetId(id)
                }}
                handleEdit={(id: number) => {
                    setEdit(true)
                    setTargetId(id)
                }}
                handleClick={(id) => {
                    setShowComments(true)
                    setTargetId(id)
                }}
                posts={posts}
            />
            {showComments && (
                <Comments
                    postId={targetId}
                    show={showComments}
                    hideComments={() => setShowComments(false)}
                />
            )}

            {edit && (
                <EditPost
                    show={edit}
                    post={posts[targetId - 1]}
                    handleSave={saveEdit}
                    handleClose={() => setEdit(false)}
                />
            )}
            {fDelete && (
                <DeletePost
                    show={fDelete}
                    handleYes={deletePost}
                    handleNo={() => setFDelete(false)}
                />
            )}
        </div>
    )
}

export default App
