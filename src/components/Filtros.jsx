import {useState, useEffect} from "react";

export default function Filtros({filtro, setFiltro}) {
   return (
      <div className="filtros sombra contenedor">
         <form action="">
            <label htmlFor="">Filtrar Gastos</label>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
               <option value="">-- Todas las categorías --</option>
               <option value="ahorro">Ahorro</option>
               <option value="comida">Comida</option>
               <option value="casa">Casa</option>
               <option value="gastos">Gastos Vario</option>
               <option value="ocio">Ocio</option>
               <option value="salud">Salud</option>
               <option value="subscripciones">Subscripciones</option>
            </select>
         </form>
      </div>
   );
}
