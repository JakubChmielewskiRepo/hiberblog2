import React, {Component} from 'react';


class AddArticle extends React.Component {

constructor(props) {
    super(props);
    this.state = {
            title: '',
            text: ''
           
    };
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
     console.log("title "+this.state.title)
     fetch('https://hiberblog-api.herokuapp.com/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: this.state.title,
            text: this.state.text
        })
        })
        
        
};
/* <div class="container wypelniacz">
  
  <div class="mx-auto">
   <div class="jumbotron tlo">
   <h3 class="text-center  mb-5 napis">Zaloguj się by przejść do serwisu:</h3>
           <form>
               <div class="form-group ">
                   <input _ngcontent-c0="" class="form-control form-control-lg tlo2" placeholder="Nazwa użytkownika" type="text">
               </div>
               <div class="form-group tlo2">
                   <input class="form-control form-control-lg tlo2" placeholder="Hasło" type="password">
               </div>
               <div class="form-group">
                   <a role="button" aria-pressed="true" class="btn btn-danger btn-lg btn-block sprzycisk" href="index.html.html">Zaloguj się </a>
            
           </form>
           </div> */


render() {
return (

    
    //  <div class="container wypelniacz">
    <div class="jumbotron wypelniacz tlo">
    <div class="mx-auto">
     
      <form onSubmit={this.handleSubmit}>

      <div class="form-group ">
          <h1>Add your article:</h1>
      </div>
      <div class="form-group ">
                <label for="inputText">Title:</label>
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
                <label for="inputText">Text:</label>
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
            <button  type="submit" className="addButton" style={{marginLeft: "20px"}} onClick={this.validate}>
                    Add article
            </button>
           </div>
        </form>
         
         </div>
         </div>
        //   </div>
        
);
}
}
export default AddArticle;