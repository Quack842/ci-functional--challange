import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }
    handleChange = (e) => {
        const userInput = e.target.value.toLowerCase();
        const filterPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(userInput);
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
                        <PostItem savedPosts={this.state.posts} />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content