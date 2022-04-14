import React, { useState } from 'react'
import { Data } from './Data'
import PaginationTwo from './PaginationTwo';
function PaginationIndex() {
    const [posts, setPosts] = useState(Data)
    const [showPerPage, setShowPerPage] = useState(4)
    const [paginationIndex, setPaginationIndex] = useState({
        start: 0,
        end: showPerPage,
    })

    const onPaginationChange = (start, end) => {
        setPaginationIndex({ start: start, end: end })
    }
    return (
        <>

            <div className="container py-4">
                <div className="row">
                    {posts.slice(paginationIndex.start, paginationIndex.end).map((post) => (
                        <div className="col-md-3 mb-3" key={post.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5>
                                        #{post.id} {post.title}
                                    </h5>
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <PaginationTwo
                    showPerPage={showPerPage}
                    onPaginationChange={onPaginationChange}
                    total={posts.length}
                />
            </div>
        </>
    )
}

export default PaginationIndex