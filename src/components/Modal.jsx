import {useState, useEffect} from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "/src/assets/img/cerrar.svg";

export default function Modal({
   setModal,
   animarModal,
   setAnimarModal,
   guardarGasto,
   gastoEditar,
   setGastoEditar,
}) {
   const [nombre, setNombre] = useState("");
   const [cantidad, setCantidad] = useState("");
   const [categoria, setCategoria] = useState("");
   const [fecha, setFecha] = useState("");

   const [mensaje, setMensaje] = useState("");
   const [id, setId] = useState("");
   useEffect(() => {
      if (Object.keys(gastoEditar).length > 0) {
         setNombre(gastoEditar.nombre);
         setCantidad(gastoEditar.cantidad);
         setCategoria(gastoEditar.categoria);
         setId(gastoEditar.id);
         setFecha(gastoEditar.fecha);
      }
   }, [gastoEditar]);
   const ocultarModal = () => {
      setAnimarModal(false);
      setGastoEditar({});
      setTimeout(() => {
         setModal(false);
      }, 500);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if ([nombre, cantidad, categoria].includes("")) {
         setMensaje("Todos los campos son obligatorios");
         return;
      }

      guardarGasto({nombre, cantidad, categoria, id, fecha});
   };
   return (
      <div className="modal">
         <div className="cerrar-modal">
            <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
         </div>
         <form
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? "animar" : "cerrar"} `}>
            <legend>
               {" "}
               {gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}
            </legend>
            {mensaje && <Mensaje tipo="error">{mensaje} </Mensaje>}
            <div className="campo">
               <label htmlFor="nombre">Nombre Gasto</label>

               <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  placeholder="Añade el Nombre del Gasto"
                  onChange={(e) => setNombre(e.target.value)}
               />
            </div>
            <div className="campo">
               <label htmlFor="categoria">Cantidad</label>
               <input
                  id="cantidad"
                  type="number"
                  value={cantidad}
                  placeholder="Añade la Cantidad del Gasto"
                  onChange={(e) => setCantidad(Number(e.target.value))}
               />
            </div>
            <div className="campo">
               <label htmlFor="categoria">Categoria</label>
               <select
                  name=""
                  id="categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}>
                  <option value="" disabled="disabled">
                     -- Seleccione --
                  </option>
                  <option value="ahorro">Ahorro</option>
                  <option value="comida">Comida</option>
                  <option value="casa">Casa</option>
                  <option value="gastos">Gastos Vario</option>
                  <option value="ocio">Ocio</option>
                  <option value="salud">Salud</option>
                  <option value="subscripciones">Subscripciones</option>
               </select>
            </div>
            <input
               type="submit"
               value={gastoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"}
            />
         </form>
      </div>
   );
}
