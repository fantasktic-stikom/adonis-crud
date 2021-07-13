'use strict'
const Post = use('App/Models/Post')

class PostController {
    async index({req, res, view}) {
        const posts = await Post.all()
        return view.render('posts.index', { posts: posts.rows })
    }
}

module.exports = PostController
