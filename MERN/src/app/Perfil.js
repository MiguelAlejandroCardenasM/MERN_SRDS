import React , {Component}from 'react';



class Perfil extends Component{
constructor(props){
  super(props);
}

render(){
  const imgstyles={
    height: '72px'
  }
  
    return(
        <div>

          {/* Barra de Navegacion */}
    <div className="navbar-fixed">
    <nav>
        <div className="nav-wrapper">
          <a href="index.html" className="brand-logo"><img src="/imagenes/logo.png" style={ imgstyles} alt="Logo"/></a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="index.html">Cerrar Sesión</a></li>
            
            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
            
          </ul>
          <ul className="sidenav" id="mobile-demo">
              <li><a href="badges.html">Components</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="container" style={{marginTop: '25px'}}>
    
    <div className="row">

        <div className="col s4">
          <hr></hr>
            <div className="card">
                      <div className="card-image">
                          <img src="/imagenes/burrito.png" alt="Mi imagen" />
                      </div>
                      <div className="card-content center-text">
                          <span className="card-title">{this.props.Name}</span>
                          <p>Edad: {this.props.Avalores[1]} {this.props.Age}</p>
                      </div>
            </div>
        
          <div className="collection">
              <a href="#!" className="collection-item">Alvin</a>
              <a href="#!" className="collection-item active">Alvin</a>
              <a href="#!" className="collection-item">Alvin</a>
              <a href="#!" className="collection-item">Alvin</a>
            </div>
          
            <div className="card-panel cyan darken-2">
                <span className="white-text">
                  <p style={{color: 'gold'}}>Grado de estudios:</p><p>Doctorado en Computación</p>
                </span>
            </div>
        </div>
  
        <div className="col s8">
         
          <div className="card-panel">
              <h4>Experiencia</h4>
              
              <div className="row">
                  <div className="col s12 m5">
                      <div className="card">
                        <div className="col s12 cyan darken-2">
                          <span className="card-title white-text"><center>Programador Web</center></span>
                        </div>
                        <br/>
                        <div className="card-content">
                          <p>Trabaje como front-end en la empresa en NorthWare, donde utilize HTML 5, CSS y JavaScript.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m5">
                      <div className="card">
                        <div className="col s12 cyan darken-2">
                          <span className="card-title white-text"><center>Programador Junior</center></span>
                        </div>
                        <br/>
                        <div className="card-content">
                          <p>Trabaje como programador Junior en Grupo Tress donde implemente un sistema de información de Nominas.</p>
                        </div>
                      </div>
                    </div>
            </div>  
            <h4>Habilidades</h4>
            
            <div className="row">
                <div className="col s12 m5">
                    <div className="card">
                      <div className="col s12 cyan darken-2">
                        <span className="card-title white-text"><center>Español</center></span>
                      </div>
                      <br/>
                      <div className="card-content">
                        <p>Manejo el idioma español al 100%</p>
                      </div>
                    </div>
                  </div>
                <div className="col s12 m5">
                    <div className="card">
                      <div className="col s12 cyan darken-2">
                        <span className="card-title white-text"><center>Ingles</center></span>
                      </div>
                      <br/>
                      <div className="card-content">
                        <p>Manejo el idioma español al 80%</p>
                      </div>
                    </div>
                </div>
                <div className="col s12 m5">
                  <div className="card">
                    <div className="col s12 cyan darken-2">
                      <span className="card-title white-text"><center>C#</center></span>
                    </div>
                    <br/>
                    <div className="card-content">
                      <p>Trabaje utilizando el lenguaje C# tres años en Grupo Tress.</p>
                    </div>
                  </div>
              </div>
              <div className="col s12 m5">
                <div className="card">
                  <div className="col s12 cyan darken-2">
                    <span className="card-title white-text"><center>Phyton</center></span>
                  </div>
                  <br/>
                  <div className="card-content">
                    <p>Trabaje utilizando el lenguaje Phyton durante mi fomración académiaca</p>
                  </div>
                </div>
            </div>
            </div>  
              <div className="row">
      
                </div>
                <h4>Educación</h4>
                
                <div className="row">
                    <div className="col s12 m5">
                        <div className="card">
                          <div className="col s12 cyan darken-2">
                            <span className="card-title white-text"><center>Universidad</center></span>
                          </div>
                          
                          <div className="card-content">
                            <p>Estudie en el Instituto Tecnoogico de Tijuana</p>
                          </div>
                        </div>
                      </div>
                      <div className="col s12 m5">
                          <div className="card">
                            <div className="col s12 cyan darken-2">
                              <span className="card-title white-text"><center>Doctorado</center></span>
                            </div>
                            
                            <div className="card-content">
                              <p>Estudie un doctorado en CICESE</p>
                            </div>
                          </div>
                        </div>
                </div>  
                <h4>Publicaciones</h4>
                
                <div className="row">
                    <div className="col s12 m5">
                        <div className="card">
                          <div className="col s12 cyan darken-2">
                            <span className="card-title white-text"><center>Internet de las cosas</center></span>
                          </div>
                          
                          <div className="card-content">
                            <p>Tipo de investigación: Cientifica</p>
                            <p>Publique el libro Internet de las Cosas</p>
                          </div>
                        </div>
                      </div>
                </div> 
                <table className="striped">
                    <thead>
                      <tr>
                          <th>CLAVE</th>
                          <th>MATERIA</th>
                          <th>HORARIO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>AEF-1031 IF5A</td>
                        <td>FUNDAMENTOS DE BASES DE DATOS</td>
                        <td>10:00 A 11:00</td>
                      </tr>
                      <tr>
                        <td>IFM-1017 IF6A</td>
                        <td>INTERCONECTIVIDAD DE REDES</td>
                        <td>17:00 A 19:00</td>
                      </tr>
                      <tr>
                        <td>IFF-1012 IF8A</td>
                        <td>ESTRATEGIAS DE GESTIÓN DE SERVICIOS</td>
                        <td>13:00 a 14:00</td>
                      </tr>
                    </tbody>
                  </table>
          </div>
        </div>
      </div>
    </div>



    </div>
    )
}

}

export default Perfil;