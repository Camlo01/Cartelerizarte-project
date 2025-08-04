import { useState } from "react";
import AutoLoadNames from "./AutoLoadNames";
import ActionButtonComponent from "../../../components/ActionButtonComponent";

export default function NamesInputs({ schedule, setPeopleScheduled }) {
    const [inputValues, setInputValues] = useState([]);

    if (schedule.length === 0) { return <NoDateSelected /> }

    // Maneja el cambio de cada input
    const handleInputChange = (dayIndex, field, value) => {
        setInputValues(prevValues => {
            // Actualiza el valor de un campo dentro de un objeto en el array
            const updatedValues = [...prevValues];
            const dayObj = updatedValues[dayIndex] || {}; // Si no existe, crea uno vacío

            updatedValues[dayIndex] = {
                ...dayObj,
                [field]: value // Actualiza el valor específico del campo dentro de este objeto
            };

            return updatedValues;
        });
    };

    let indexCounter = 0;

    let allInputs = schedule.map((e, i) => (
        <div key={i} style={{ backgroundColor: '#353634', paddingTop: '20px' }}>
            <h2 style={{ fontSize: '35px', color: 'white', marginLeft: '20px', maxWidth: '780px', margin: '0 auto', paddingLeft: '15px' }}> Mes de {e.month}</h2>
            <div style={{
                margin: '0 auto 10px',
                padding: '30px 20px 30px 40px',
            }}>
                {
                    e.day.map((day) => {
                        indexCounter++;
                        return (
                            <AgendaOfDay
                                key={indexCounter}
                                day={day}
                                dayIndex={indexCounter - 1} // Ajustamos el índice para empezar desde 0
                                values={inputValues[indexCounter - 1] || {}} // Valor inicial vacío o el valor guardado
                                onChange={handleInputChange} // Manejador de cambio
                            />
                        );
                    })
                }
            </div>
        </div >
    ));

    const handleButtonClick = () => {
        setPeopleScheduled(inputValues); // Guardamos el array de objetos
    };

    const setPS = (val) => {
        setPeopleScheduled(val)
    }

    return (
        <>
            <div>
                <h2 style={{
                    display: 'block',
                    margin: '40px auto',
                    width: 'fit-content',
                    fontSize: '32px',
                    fontWeight: 800
                }}>Ingresa y carga los nombres</h2>

                <AutoLoadNames
                    schedule={schedule}
                    setInputValues={setInputValues}
                    setPeopleScheduled={setPS}
                />

                {allInputs}

                <ActionButtonComponent event={handleButtonClick} text={'Cargar Nombres'}/>

            </div>
        </>
    );
}

function AgendaOfDay({ day, dayIndex, values, onChange }) {

    const deepYellowColor = '#CA7500'

    return (
        <div style={{ marginRight: '18px', border: '3px solid ' + deepYellowColor, paddingBottom: '10px', backgroundColor: 'white', minWidth: '421px', maxWidth: '610px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '24px', borderBottom: '4px solid ' + deepYellowColor, width: 'fit-content', marginBottom: '8px', marginTop: 8, paddingLeft: 10, color: 'black' }}>Programación día {day}</h3>

            {/* Audio y video */}
            {/* #353634 */}
            <div style={{ backgroundColor: '#686868', paddingBottom: '15px' }}>
                <h4 style={{ fontSize: '18px', color: 'white', paddingTop: '6px', marginLeft: "5px", paddingBottom: '4px' }}>Presidente y lector de la Atalaya</h4>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "5px", maxWidth: '480px' }}>

                    <input
                        style={{ padding: "2px 3px", fontSize: '16px', width: '100%', backgroundColor: '#D9D9D9', fontWeight: 600 }}
                        placeholder="Presidente"
                        type="text"
                        value={values[`presidente`] || ""}
                        onChange={(e) => onChange(dayIndex, `presidente`, e.target.value)}
                    />

                    <input
                        style={{ padding: "2px 3px", fontSize: '16px', width: '100%', backgroundColor: '#D9D9D9', fontWeight: 600 }}
                        placeholder="Lector"
                        type="text"
                        value={values[`lector`] || ""}
                        onChange={(e) => onChange(dayIndex, `lector`, e.target.value)}
                    />
                </div>

            </div>

        </div >
    );
}

function NoDateSelected() {
    return (
        <div style={{
            display: 'flex',
            padding: '30px 0',
            margin: '30px 0',
            height: 220,
            backgroundColor: "white",
            boxShadow: 'inset 3px 6px 14px 6px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ margin: 'auto', fontSize: '28px', fontWeight: 800, color: 'black' }}>Selecciona fecha de inicio y día de reunión</h2>
        </div >
    );
}