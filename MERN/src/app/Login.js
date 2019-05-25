import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component{
     constructor(){
         super();
         this.state={
            User:'',
            pass:'',
            _id:'',
            arreglo:[]
             
         }
         this.handleChange= this.handleChange.bind(this);
         this.validar= this.validar.bind(this);
     }
    //Metodo para validar el login
    validar(e){
        
        fetch(`/api/tasks/validate/${this.state.User}/${this.state.pass}`)
        .then(res=>res.json())
        .then (data=>{

        });
        
        
        //
        event.preventDefault(event);
    }
    handleChange(e){
        const {name, value}=e.target;
        this.setState({
            [name]:value
        });
    }
    render(){

        
        return(
            <div className="container  " >
                
                        <div className="row">
                            <div className="col s6 offset-s2">
                                <div className="card">
                                <div className="card-action blue darken-3 white-text center-align ">
                                
                            <h4><img src="/imagenes/logo.png" style={{height: '75px'}}></img> Inicio Sesion</h4>
                        </div>
                                    <div className="card-content">
                                    
                                        <form onSubmit={this.validar}> 
                                            <div className="row">
                                                <div className="input-field col s12 ">
                                                <i className="material-icons prefix">account_circle</i>
                                                    <input className="purple-text text-lighten-3" name="User" value={this.state.User} onChange={this.handleChange} type="text" placeholder="Usuario" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <i className="material-icons prefix">lock</i>
                                                    <input name="pass" value={this.state.pass} onChange={this.handleChange} type="password" placeholder="Contrasena" required />
                                                </div>
                                            </div>
                                                                                    
                                            <button  className="waves-effect waves-light btn blue darken-3 col l12"  type="submit" >
                                                Enviar <i className="material-icons">send</i>
                                            </button>
                                        </form> 
                                        <div className="row center-align" > 
                                        <Link to={'./Registro'} className="center-align">
                                            Registrarse
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
            
          
        )
    }
}
export default Login;