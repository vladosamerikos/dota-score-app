import Loader from "components/loaders/Loader"
import SmallSetPagination from "components/paginacion/SmallSetPagination"
import { useEffect } from "react"
import { connect } from "react-redux"
import BlogCard from "./BlogCard"
import React from "react"

function BlogList({
    blog_list,
    get_blog_list_page,
    count,
}){
    
    return(

        
        <div>
            {
                blog_list ?
                <>
                <div className="relative pt-5 bg-transparent pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-transparent h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                        
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                            {
                                blog_list.map(post=>(
                                    <BlogCard data={post}/>
                                ))
                            }
                        </div>
                        <SmallSetPagination 
                            get_blog_list_page={get_blog_list_page} 
                            blog_list={blog_list} 
                            count={count}
                        />
                    </div>
                </div>
                </>
                :
                <Loader/>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    
    count: state.blog.count
})

export default connect(mapStateToProps,{
})(BlogList)