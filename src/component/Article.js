import React, {Component} from 'react'

class Article extends Component {
    state = {
        comments: [],
        isShowComments: false,
        isOpen: this.props.defaultOpen
    };

    render() {
        const {article} = this.props;
        const {comments} = this.state || [];
        const body = this.state.isOpen && <section className="card-text">{article.text}
            <br/>
            <button className="btn btn-secondary float-right" onClick={this.showComments}>
                {this.state.isShowComments ? "hide comments" : "show comments"}
            </button>
        </section>;

        let commentsBody = '';
        if (this.state.isShowComments) {
            if (comments) {
                commentsBody = comments.map((comment) =>
                    <div className="card-body" key={comment.id}>
                        <div className="card-title">{comment.user}</div>
                        <div className="card-text text-justify">{comment.text}</div>
                    </div>
                );
            } else {
                commentsBody = <div className="card-body">
                    <div className="card-title">Comments not found</div>
                </div>
            }


        }

        return (
            <div className="card mx-auto">
                <div className="card-header">
                    <h2 onClick={this.handleClick}>
                        {article.title}
                        <button type="button" className="btn btn-primary float-right">
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
                {commentsBody}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    showComments = () => {
        const {comments} = this.props.article;
        this.setState({
            isShowComments: !this.state.isShowComments,
            comments: comments
        })
    }
}

export default Article