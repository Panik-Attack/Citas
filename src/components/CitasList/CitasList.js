import React from "react";
import { CitasListItem } from "./CitasListItem";
import "./citasList.scss";
export const CitasList = ({ citas, handleDelete, handleToggle }) => {
    return (
        <>
            <ul className="listContainer">
                {citas.map((cita, i) => (
                    //TodoListItem
                    <CitasListItem
                        key={cita.id}
                        cita={cita}
                        index={i}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))}
            </ul>
        </>
    );
};
