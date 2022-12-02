class VisibilityToggle extends React.Component{
     constructor(props){
          super(props);
          this.handleToggleVisibility = this.handleToggleVisibility.bind(this); 
          this.state = {
               visibility: false
          }
     }

     handleToggleVisibility(){
          this.setState((prevState) => {
               return {
                    visibility: !prevState.visibility
               };
          });
     }

     render(){
          return(
                  <div>
                     <h1> Visibility Toggle </h1>
                     <button onClick={this.handleToggleVisibility}> 
                            { this.state.visibility ? 'Hide details' : 'Show details' } 
                     </button>
                     { this.state.visibility && <p> В чащах юга жил-был цитрусъ! -Да, но фальшивый экземпляръ! </p> }
                  </div>
          )
     }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

//const appRoot = document.getElementById('app');
//
//let isVisible = false;
//
//const toggleVisibility = () => {
//     isVisible = !isVisible
//     render();
//     console.log(`is Visible ${isVisible}`);
//}
//
//const render = () => {
//     const template =  (
//          <div>
//             <h1> Visibility Toggle </h1>
//             <button onClick={toggleVisibility}> 
//                    { isVisible ? 'Hide details' : 'Show details' } 
//             </button>
//             { isVisible && <p> В чащах юга жил-был цитрусъ! -Да, но фальшивый экземпляръ! </p> }
//          </div>
//     );
//
//    ReactDOM.render(template, appRoot);
//}
//
//render();
//
