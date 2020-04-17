import React, { Component } from 'react';

const sorts = {
    'alphabetical' : (a,b) => a.name.localeCompare(b.name),
    'newest' : (a,b) => new Date(b.created_at) - new Date(a.created_at),
    'oldest' : (a,b) => new Date(a.created_at) - new Date(b.created_at),
}

// t.created_at.strftime("%Y-%m-%d")

class SortDropDown extends Component {
    // props: array, getSortedArray
    state = {
        value: ''
    }

    handleChange = event => {
        this.setState({
          value : event.target.value  
        })
        console.log("SortDropDown: recipes prop",this.props.recipes)
        const recipeArray = [...this.props.recipes]
        recipeArray.sort(sorts[event.target.value])
        this.props.sortedRecipes(recipeArray)
    }

    // sortArray = () => {
    //     return this.props.array.sort(sorts[this.state.value])
    // }

    render() {
        return (
            <div>
                <select className='dropdown' onChange={this.handleChange}>
                    <option value='alphabetical'>Alphabetical</option>
                    <option value='newest'>Newest</option>
                    <option value='oldest'>Oldest</option>
                </select>
            </div>
        )
    }
}

export default SortDropDown;