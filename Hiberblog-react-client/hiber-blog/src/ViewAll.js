import React, { Component }  from 'react';
import Article from "./Article";
import Natura1 from './natura1.jpg';
import Natura2 from './natura1.jpg';
import Natura3 from './natura1.jpg';
import Natura4 from './natura1.jpg';
import Natura5 from './natura1.jpg';
import Natura6 from './natura1.jpg';
import{StyleSheet,Text,View,ImageBackground} from 'react'

class ViewAll extends Component {
    state =
    {
articles: []
    }
    
    componentDidMount() {
        fetch('http://hiberblogapi3-route-labproj19.apps.cp4apps.cloudpak.site/all')
            .then(response => response.json())
            .then(articles => {
                console.log(articles)
                this.setState({ articles })
            }
                
    
   
);

}
    


    render() {
        return (
            <div>
            {/* <div class="jumbotron wypelniacz2 tlo"> */}
<div class=" img1">
<div class=" img2">
<div class=" img3">
<div class="img4">
<div class="img5">
<div class=" img6">

<div>
    {/* <img src={Natura1} className="tlo"/> */}
    {/* <ImageBackground source={require('./natura1.jpg')} style={StyleSheet.container}> </ImageBackground> */}
                {this.state.articles.map(article => < Article info={article} />)}
                
            </div>
            </div></div></div></div></div>
               </div>
                
                
             </div> 
        );
    }
}  

// const styles=StyleSheet.create({
// container:{
//     flex: 1,
//     width:'100%',
//     height:'100%',
// }

// });

export default ViewAll;
