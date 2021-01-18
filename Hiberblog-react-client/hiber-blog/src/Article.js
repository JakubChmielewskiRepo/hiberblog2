import React, { Component }  from 'react';

class Article extends Component {
   
    
    
                
    
/* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */
    


    render() {
        return (
            <div class="card" style={{width: '18rem'}}>
                <div class="card-body">
                
                
            
                 {/* <p> --------------------</p> */}
                 <h5> {this.props.info.title}</h5>
                 <h6 class="card-subtitle mb-2 text-muted"> <p> {this.props.info.articleId}</p></h6>
                <p class="card-text"> {this.props.info.text}</p>
                <a href="#" class="card-link">Read article</a>
                {/* <p> {this.props.info.articleId}</p>  */}
                {/* <p>{this.props.info.text} </p> */}
                
               
                
                
            </div>
            </div>
        );
    }
 


}
export default Article;
