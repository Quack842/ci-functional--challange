import React, { Component } from 'react'
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

export class ContentAPI extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: [],
        }
    }
    componentDidMount() {
        this.fetchImages();
    }
    // Use this website as reference : https://pixabay.com/api/docs/ 
    // Always put await axios.get.. before link.
    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;

        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
        })
    }
    handleChange = (e) => {
        const userInput = e.target.value.toLowerCase();
        const filterPosts = this.state.savedPosts.filter((post)=>{
            return post.user.toLowerCase().includes(userInput);
        }) 
        
        this.setState({
            posts: filterPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                    <form>
                        <label htmlFor='searchInput'>Search: </label>
                        <input 
                            type='search' 
                            id='searchInput'
                            placeholder='By Author'
                            onChange={(event) => this.handleChange(event)} />
                        <h4>Post Found: {this.state.posts.length}</h4>
                    </form> 
                </div>
                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ? 
                        <PostItemAPI savedPosts={this.state.posts} />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default ContentAPI