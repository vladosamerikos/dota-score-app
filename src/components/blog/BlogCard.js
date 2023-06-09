import React from "react"
import { Link } from "react-router-dom"

function BlogCard(data){
    let post = data && data.data

    return(
        <div>
           <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={post.thumbnail} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-red-600">
                    <Link to={`/blog/categories/${post.category.id}`} className="hover:underline text-red-600">
                        {post.category.name}
                    </Link>
                    </p>
                    <Link to={`/blog/post/${post.slug}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description.substring(0,120)+'...'}</p>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard