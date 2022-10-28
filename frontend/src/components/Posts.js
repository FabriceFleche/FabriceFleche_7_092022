import postsImport from "./PostsImport"

function Posts() {
    const posts = postsImport.data;
    console.log(posts)
    return (
        <ul>
            {/* {postsImport.map((post) => (
                <li>{post}</li>
            ))} */}
            <li>'coucouc'</li>
        </ul>
    )
}

export default Posts
