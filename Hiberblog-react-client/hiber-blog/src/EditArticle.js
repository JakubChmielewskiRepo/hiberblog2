import React, {Component} from 'react';



class EditArticle extends React.Component {

constructor(props) {
    super(props);
    this.state = {
            articleId:'',
            title: '',
            text: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
     console.log("title "+this.state.title)
     fetch('https://hiberblog-api.herokuapp.com/update', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
             articleId: this.state.articleId,
            title: this.state.title,
            text: this.state.text
        })
        })
        
        
};


render() {
return (
    <div class="jumbotron wypelniacz tlo2">
    <div class="mx-auto">
     
      <form onSubmit={this.handleSubmit}>

      <div class="form-group ">
          <h1 style={{color:'white'}}>Modify your article:</h1>
      </div>
      <div class="form-group ">
                <label for="placeholderId" style={{color:'white'}}>Id:</label>
                    </div>
      <div class="form-group ">
      <input 
                type="text" 
                id="placeholderId"
                maxLength="255"
                value={this.state.articleId}
                onChange={event => this.setState({ articleId: event.target.value })}
                required/>
               
                </div>
                <div class="form-group ">
                <label for="inputTitle" style={{color:'white'}}>Title:</label>
                    </div>
      <div class="form-group ">
      
            <textarea
            rows="3"
                type="text" 
                className="inputTitle"
                id="inputTitle"
                maxLength="255"
                value={this.state.title}
                onChange={event => this.setState({ title: event.target.value })}
                required/>
                </div>
                <div class="form-group ">
                <label for="inputText" style={{color:'white'}}>Text:</label>
                </div>
                <div class="form-group ">
                
            <textarea 
            rows="10"
                type="text" 
                className="inputText"
                id="inputText"
                maxLength="5000"
                // style={{marginLeft: "20px"}} 
                value={this.state.text}
                onChange={event => this.setState({ text: event.target.value })}
                required />
         
         </div>
         <div class="form-group ">
            <button  type="submit" className="modButton" style={{marginLeft: "20px"}} onClick={this.validate}>
                    Modify article
            </button>
           </div>
        </form>
         
         </div>
         </div>
//   <div>
//       <form onSubmit={this.handleSubmit}>
//       <input 
//                 type="text" 
//                 placeholder="id"
//                 maxLength="255"
//                 value={this.state.articleId}
//                 onChange={event => this.setState({ articleId: event.target.value })}
//                 required/>

//             <input 
//                 type="text" 
//                 placeholder="title"
//                 maxLength="255"
//                 style={{marginLeft: "20px"}}
//                 value={this.state.title}
//                 onChange={event => this.setState({ title: event.target.value })}
//                 required/>
//             <input 
//                 type="text" 
//                 placeholder="text" 
//                 maxLength="5000"
//                 style={{marginLeft: "20px"}} 
//                 value={this.state.text}
//                 onChange={event => this.setState({ text: event.target.value })}
//                 required />
         
            
           
//             <button  type="submit" className="modButton" style={{marginLeft: "10px"}} onClick={this.validate}>
//                     Edit article
//             </button>
           
//         </form>
         
//          </div>
);
}
}
export default EditArticle;