import React , {Component}from 'react';



class App extends Component{
    
    constructor(){
        super();
        this.state={
            title:'',
            description:''
        }
        this.nuevoRegistro= this.nuevoRegistro.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }
    //agrega el nuevo registro del formulario
    nuevoRegistro(e){
        fetch('/api/tasks',
        {
            method:'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=>console.log(res))
        .catch(err=>console.error(err));
        //evita que la pagina se refresque
        e.preventDefault(e);
    }
    handleChange(e){
        const {name, value}=e.target;
        this.setState({
            [name]:value
        });
    }

    render(){
        return (
            <div>
                {/*<nav className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" color="blue" type="search"  placeholder="Buscar" required></input>
                            <label className="label-icon" for="search">
                            <i className="material-icons">search</i>
                            </label>
                            <i className="material-icons" >close</i>
                        </div>
                    </form>
        </nav>*/}
                    <div className="container" >
                        <div className="row">
                            <div className="col s5">
                                <div className="card">
                                    <div className="card-content">
                                        <form onSubmit={this.nuevoRegistro }> 
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input name="title" onChange={this.handleChange} type="text" placeholder="text" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <textarea name="description" onChange={this.handleChange} className="materialize-textarea" placeholder="Descripcion">

                                                    </textarea>
                                                </div>
                                            </div>
                                            <button  className="btn ligth-blue" type="submit" >
                                                Enviar
                                            </button>
                                        </form> 
                                    </div>
                                </div>
                            </div>
                            <div className="col s7">
                                <div className="card">
                                    <div className="card-content">
                                        <form>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="input" placeholder="text" />
                                                </div>
                                            </div>
                                        </form> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        );
    }
}
export default App;