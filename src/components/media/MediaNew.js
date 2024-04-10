import React, {useState, useEffect } from "react"
import {obtenerDirector} from '../../services/directoreService';
import {obtenerGeneros} from '../../services/generoService';
import {obtenerProductoras} from '../../services/productoraService';
import {obtenerTipos} from '../../services/tipoService';
import {crearMedia} from '../../services/mediaService'
import Swal from  'sweetalert2';

 

export const MediaNew = ({ handleOpenModal, listarMedia }) => {

const [Tipos, setTipos] = useState([]);
const [Generos, setGeneros]= useState([]);
const [Productoras, setProductoras] = useState([]);
const [Directores, setDirectores] = useState([]);
const [valoresForm,setvaloresForm] =  useState([]);
const {serial='',titulo='',sinopsis='',url='',foto='',anoestreno='',genero
,director,productora,tipo}= valoresForm;

const listarGeneros = async ()=>{
  try {
   const {data} = await obtenerGeneros(); 
   setGeneros(data)
   console.log(data);
}catch(error) {
  console.log(error);
}

}

useEffect(()=>{
    listarGeneros();
},[])

const listarProductoras = async ()=>{
  try {
   const {data} = await obtenerProductoras(); 
   setProductoras(data)
   console.log(data);
}catch(error) {
  console.log(error);
}

}

useEffect(()=>{
    listarProductoras();
},[])

const listarDirector = async ()=>{
  try {
   const {data} = await obtenerDirector(); 
   setDirectores(data)
   console.log(data);
}catch(error) {
  console.log(error);
}

}

useEffect(()=>{
    listarDirector();
},[])

const listarTipos = async ()=>{
  try {
   const {data} = await obtenerTipos(); 
   setTipos(data)
   console.log(data);
}catch(error) {
  console.log(error);
}

}

useEffect(()=>{
    listarTipos();
},[])

const handleOnChange = ({target}) => {
  const  {name, value} = target;
  setvaloresForm ({ ...valoresForm , [name]:value});
}
  
const handleOnSubmit = async (e)=>{
  e.preventDefault();
  const media={
    serial,titulo,sinopsis,url,foto,anoestreno,
    genero: {
      _id: genero
    },
    director:{
      _id:director
    },
    productora:{
      _id:productora
    },
    tipo:{
     _id:tipo
    }
  }
  console.log(media);
  try {
    Swal.fire({
        allowOutsideClick: false,
        text:'Cargando...',
    });
    Swal.showLoading();
    const {data}=await crearMedia(media)
    handleOpenModal();
    listarMedia();
    Swal.close();
  } catch (error){
    console.log(error)
    Swal.close();
  }
    
  
}

return (
    <div className="sidebar">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="sidebar-header">
              <h3>Nueva Media</h3>
              <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <hr />
    
            </div>
          </div>
          
          <form  onSubmit={(e)=> handleOnSubmit(e)}>
            <div className="row">
              <div className="col">
              <div className="mb-3">
                  <label className="form-label">Serial</label>
                  <input type="text" name="serial" 
                  value={serial}
                 onChange={(e) => handleOnChange(e)} 
                 required
                 className="form-control"
                  />
              </div>
            </div>
              
              <div className="col">
              <div className="mb-3">
                  <label className="form-label">Titulo</label>
                  <input type="text" name="titulo"
                  value={titulo}
                  onChange={(e)=>handleOnChange(e) }
                  required
                  className="form-control"
                  />
              </div>
            </div>
              
              <div className="col">
              <div className="mb-3">
                  <label className="form-label">Sinopsis</label>
                  <input type="text" name="sinopsis" 
                  value={sinopsis}
                  onChange={(e)=>handleOnChange(e)}
                  required
                  className="form-control"
                  />
              </div>
            </div>
              
              <div className="col">
              <div className="mb-3">
                  <label className="form-label">URL</label>
                  <input type="text" name="url" 
                  value={url}
                  onChange={(e) => handleOnChange(e)} 
                  required
                  className="form-control"
                  />
              </div>
              
            </div>
            
            </div>
            <div className="row">
              <div className="col">
              <div className="mb-3">
                  <label className="form-label">Foto</label>
                  <input type="url" name="foto" 
                 value={foto}
                 onChange={(e) => handleOnChange(e)}
                  required
                  className="form-control"
                  />
              </div>
            </div>
              
              <div className="col">
              <div className="mb-3">
                  <label className="form-label">Año Estreno</label>
                  <input type="number" name="anoestreno" 
                  value={anoestreno}
                  onChange={(e) => handleOnChange(e)}
                  required
                  className="form-control" min="1800" 
                  max="2045" 
                  />
              </div>
            </div>
              
              <div className="col">
              <div className="mb-3">
                  <label className="form-label">Genero</label>
                <select className="form-select"
                name="genero"
                value={genero}
                required
                onChange={(e) => handleOnChange(e)}>
                <option value="">---SELECCIONE---</option>
                {
                  Generos.map(({_id, nombre})=>{
                    return <option key={_id} value={_id}>{nombre}</option>;
                  })
                }
                
                </select>
              </div>
            </div>
              
              <div className="col">
              <div className="mb-3">
                  <label className="form-label">Director Principal</label>
                  <select className="form-select"
                  name="director"
                 value={director}
                 required
                  onChange={(e) => handleOnChange(e)}>
                <option value="">---SELECCIONE---</option>
                {
                  Directores.map(({_id, nombre})=>{
                    return <option key={_id} value={_id}>{nombre}</option>;
                  })
                }
                </select>
              </div>
            </div>
            
            </div>
            <div className="row">
              <div className="col">
              <div className="mb-3">
                  <label className="form-label">Productora</label>
                  <select className="form-select"
                  name="productora"
                  value={productora}
                  required
                  onChange={(e) => handleOnChange(e)}>
                <option value="">---SELECCIONE---</option>
                {
                  Productoras.map(({_id, nombre})=>{
                    return <option key={_id} value={_id}>{nombre}</option>;
                  })
                }
                </select>
              </div>
            </div>
              
              <div className="col">
              <div className="mb-3">
                  <label className="form-label">Tipo</label>
                  <select className="form-select"
                  name="tipo"
                  value={tipo}
                  required
                  onChange={(e) => handleOnChange(e)}>
                <option value="">---SELECCIONE---</option>
                {
                  Tipos.map(({_id, nombre})=>{
                    return <option key={_id} value={_id}>{nombre}</option>;
                  })
                }
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
            <button className="btn btn-primary">Actualizar</button>
          </div>

          </div>
        </form>
      </div>
    </div>
  </div>
  );
};
