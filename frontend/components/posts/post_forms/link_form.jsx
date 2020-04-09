import React from "react";

class QuoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){ 
        return (e) => {
            this.setState({
                [type]: e.target.value 
            });
        };
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.processPost(this.state)
            .then(() => this.props.closeModal());
    }
    
    render(){
        let togglePost;
        if (this.state.link === ""){
            togglePost = <label className = "submit-post-hidden">{this.props.formType}</label> 
        } else{
            togglePost = <input type = "submit" className = "submit-post" value = {this.props.formType}/>

        }
 
        return(
            <div className="content-container">
                <section className = "author-username">
                    {this.props.currentUser.username}
                </section>
                <form className = "link-form" onSubmit={this.handleSubmit}>
                    <input
                        className = "link-input"
                        type = "text" 
                        value = {this.state.title} 
                        onChange = {this.handleInput("title")} 
                        placeholder = "Type or Paste a URL"
                    />
                    <textarea
                        className = "body-input"
                        type = "text"
                        value = {this.state.body}
                        onChange = {this.handleInput("body")}
                        placeholder = "Add a description, if you like"
                    ></textarea>
                    <input 
                        className = "tags-input"
                        type = "text"
                        value = {this.state.tags}
                        onChange = {this.handleInput("tags")}
                        placeholder = "seperate #tags with spaces"
                    />
                    <section className = "controls-container">
                        <a onClick = {this.props.closeModal} className = "close-modal">Close</a>
                        {togglePost}
                    </section>
                </form>
        </div>
        )
    }
}

export default QuoteForm;