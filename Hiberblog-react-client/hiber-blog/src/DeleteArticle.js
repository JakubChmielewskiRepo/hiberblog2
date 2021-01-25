import React, {Component} from 'react';



class DeleteArticle extends React.Component {

constructor(props) {
    super(props);
    this.state = {
            articleId:'',
            
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
     console.log("title "+this.state.title)
     fetch('http://hiberblogapi3-route-labproj19.apps.cp4apps.cloudpak.site/delete', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
             articleId: this.state.articleId,
           
        })
        })
        
        
};


render() {
return (
  <div class="jumbotron wypelniacz tlo3">
  <div class="mx-auto">
   
    <form onSubmit={this.handleSubmit}>

    <div class="form-group ">
        <h1 style={{color:'white'}}>Delete your article:</h1>
    </div>
    <div class="form-group ">
        <hr/>
    </div>
    
    <div class="form-group ">
              <label for="placeholderId" style={{marginLeft: "50px", color:'white'}}>Id:</label>
                  </div>
    <div class="form-group ">
    <input 
              type="text" 
              id="placeholderId"
              style={{marginLeft: "50px"}}
              maxLength="255"
              value={this.state.articleId}
              onChange={event => this.setState({ articleId: event.target.value })}
              required/>
             
              </div>
              
   
       <div class="form-group ">
          <button  type="submit" className="deleteButton" style={{marginLeft: "60px"}} onClick={this.validate}>
                  Delete article
          </button>
         </div>
      </form>
       
       </div>
       </div>
);
}
}
export default DeleteArticle;