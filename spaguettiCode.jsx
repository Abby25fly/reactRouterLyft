// // TERCER COMPONENTE: VALIDACIÓN FORMULARIO

// constructor() {
//     super()
//     this.state = {
//         value1: '',
//         value2: '',
//         value3: '',
//         value4: ''
//     }
//   }
  
//   render(){
//     <div>
//         <input type="text" value={this.state.value1}/>
//         <input type="text" value={this.state.value2}/>
//         <input type="text" value={this.state.value3}/>
//         <input type="text" value={this.state.value4}/>
//         <button type="submit"/>
//     </div>
//   }
  
//   ///
//   (<form id="registrationForm" className="form-horizontal">
//     <div className="form-group">
//       <i className="fa fa-user-circle-o col-xs-3" aria-hidden="true" />
//       <div className="col-xs-4">
//         <label htmlFor="text">Fisrt Name</label>
//         <input
//           type="text"
//           className="form-control"
//           name="fist name"
//           id="fName"
//           placeholder="First name"
//         />
//       </div>
//       <div className="col-xs-4">
//         <label htmlFor="text">Last Name</label>
//         <input
//           type="text"
//           className="form-control"
//           name="last name"
//           id="lName"
//           placeholder="Last name"
//         />
//       </div>
//     </div>
//     <div className="form-group">
//       <i className="fa fa-envelope col-xs-3 " aria-hidden="true" />
//       <div className="col-xs-4">
//         <label htmlFor="email">Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           name="email"
//           id="eName"
//           placeholder="e-mail"
//         />
//       </div>
//     </div>
//     <div className="form-group">
//       <i className="fa fa-check-circle col-xs-3" aria-hidden="true" />
//       <div className="col-xs-8">
//         <button type="submit" className="btn btn-default">
//           Sign up
//         </button>
//       </div>
//     </div>
//   </form>)
//   //SEGUNDO COMPONENTE: (BANDERITAS) GENERACIÓN DE CÓDIGO Y VALIDACIÓN DE NÚMEROS
  
//   class SingUpNumber extends Component {
   
//     render() {
//       validarSiNumero(numero){
//         if (!/^([0-9])*$/.test(numero))
//           alert("El valor " + numero + " no es un número");
//       }
//       return (
//         <div>
//           <header>
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-1 col-xs-1 text-center">
//                   <a href="index.html">
//                     <i className="fa fa-chevron-left flecha" aria-hidden="true" />
//                   </a>
//                 </div>
//                 <div className="col-md-10 col-xs-10 text-center">
//                   <h1>Sign Up</h1>
//                   <br />
//                   <p>Join now for free ride credit</p>
//                 </div>
//               </div>
//             </div>
//           </header>
//           <section>
//             <div className="container">
//               <div className="row">
//                 <div className="col-xs-10 col-xs-offset-1 text-center">
//                   <form data-toggle="validator" role="form" action="signUp2.html">
//                     <div className="input-group">
//                       <div className="input-group-btn ">
//                         <div className="form-group">
//                           <select className="form-control">
//                             <option>Peru +051</option>
//                             <option>México +052</option>
//                             <option>Chile +056</option>
//                           </select>
//                         </div>
//                       </div>
//                       <input
//                         id="telNumber"
//                         className="form-control"
//                         type="tel"
//                         data-validation="number"
//                         maxLength={9}
//                         placeholder={986171293}
//                         pattern=".{9,}"
//                         title="9 números o menos"
//                         required
//                         onChange="validarSiNumero(this.value)"/>
//                     </div>
//                     <br />
//                     <h5> We´ll send a text to verify your phone</h5>
  
//                   <div className="btn-next">
//                   <a >
//                     <button
//                       type="submit"
//                       id="btnNext"
//                       className="btn btn-lg btn-block next"
//                     >
//                       Next
//                     </button>
//                   </a>
                  
//                 </div>
//                   </form>
//                 </div>
               
                
//               </div>
//             </div>
//           </section>
//         </div>
//       );
//     }
//   }
//   export default Home;
  
//   // Guarda los valores de los inputs 
//   // class App extends Component {
//   //   setField (e) {
//   //     this.setState({[e.target.number]: e.target.value})
//   //     // guarda los valores de los inputs
//   //    }
//       render() {
//         return(
//           <div>
//             <header>
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-1 col-xs-1 text-center">
//                     <a href="index.html">
//                       <i className="fa fa-chevron-left flecha" aria-hidden="true" />
//                     </a>
//                   </div>
//                   <div className="col-md-10 col-xs-10 text-center">
//                     <h1>Sign Up</h1>
//                     <br />
//                     <p>Join now for free ride credit</p>
//                   </div>
//                 </div>
//               </div>
//             </header>
//             <section>
//               <div className="container">
//                 <div className="row">
//                   <div className="col-xs-10 col-xs-offset-1 text-center">
//                     <form data-toggle="validator" role="form" action="signUp2.html">
//                       <div className="input-group">
//                         <div className="input-group-btn ">
//                           <div className="form-group">
//                             <select className="form-control">
//                               <option>Peru +051</option>
//                               <option>México +052</option>
//                               <option>Chile +056</option>
//                             </select>
//                           </div>
//                         </div>
//                         <input
//                         input id="telNumber"
//                           className="form-control"
//                           type="tel" onChange={(e)=>this.setField(e)} name="number"
//                         />
//                       </div>
//                       <br />
//                       <h5> We´ll send a text to verify your phone</h5>
                    
//                     <div className="btn-next">
//                     <a >
//                       <button
//                         type="submit"
//                         id="btnNext"
//                         className="btn btn-lg btn-block next"
//                       >
//                         Next
//                       </button>
//                     </a>
                    
//                   </div>
//                     </form>
//                   </div>
                 
                  
//                 </div>
//               </div>
//             </section>
//           </div>
//         )
         
//       }
//     }
    