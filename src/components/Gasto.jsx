import React from "react";
import {
   LeadingActions,
   SwipeableList,
   SwipeableListItem,
   SwipeAction,
   TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import {formatearFecha} from "../helpers";

import IconoAhorro from "/src/assets/img/icono_ahorro.svg";
import IconoCasa from "/src/assets/img/icono_casa.svg";
import IconoComida from "/src/assets/img/icono_comida.svg";
import IconoGastos from "/src/assets/img/icono_gastos.svg";
import IconoOcio from "/src/assets/img/icono_ocio.svg";
import IconoSalud from "/src/assets/img/icono_salud.svg";
import IconoSuscripciones from "/src/assets/img/icono_suscripciones.svg";

const diccionariosIconos = {
   ahorro: IconoAhorro,
   comida: IconoComida,
   casa: IconoCasa,
   gastos: IconoGastos,
   ocio: IconoOcio,
   salud: IconoSalud,
   subscripciones: IconoSuscripciones,
};

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
   const {categoria, nombre, cantidad, id, fecha} = gasto;
   const leadingActions = () => (
      <LeadingActions>
         <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
      </LeadingActions>
   );
   const trailingActions = () => (
      <TrailingActions>
         <SwipeAction onClick={() => eliminarGasto(id)} destructive={true}>
            Eliminar
         </SwipeAction>
      </TrailingActions>
   );
   return (
      <SwipeableList>
         <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}>
            <div className="gasto sombra">
               <div className="contenido-gasto">
                  <img src={diccionariosIconos[categoria]} alt="icono gasto" />
                  <div className="descripcion-gasto">
                     <p className="categoria">{categoria}</p>
                     <p className="nombre-gasto">{nombre}</p>
                     <p className="fecha-gasto">
                        Agregado el {""} <span>{formatearFecha(fecha)}</span>
                     </p>
                  </div>
               </div>
               <div className="cantidad-gasto">${cantidad}</div>
            </div>
         </SwipeableListItem>
      </SwipeableList>
   );
};

export default Gasto;
