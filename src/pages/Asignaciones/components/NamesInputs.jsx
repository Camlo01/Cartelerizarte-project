import { useState } from "react";
import AutoLoadNames from "./AutoLoadNames";

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
        <div key={i} style={{ backgroundColor: '#09397D', paddingTop: '20px' }}>
            <h2 style={{ fontSize: '35px', color: 'white', marginLeft: '20px' }}> Mes de {e.month}</h2>
            <div style={{
                display: 'flex',
                margin: '0 auto 10px',
                padding: '30px 20px 30px 40px',
                overflowX: 'scroll',
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
                    setPeopleScheduled={setPS} />
                {allInputs}

                <button style={{
                    display: 'block', width: '230px', height: '60px', fontSize: '1.2rem', fontWeight: 800, backgroundColor: 'white',
                    margin: '40px auto 50px',
                    color: '#a7212d',
                    border: '2px solid #a7212d'
                }}
                    onClick={handleButtonClick}
                >
                    Cargar Nombres
                </button>

            </div>
        </>
    );
}

function AgendaOfDay({ day, dayIndex, values, onChange }) {

    const [disabledInputs, setDisabledInputs] = useState(false)

    const handleSelectChange = (e) => {
        const val = e.target.value

        if (val == 'reunion') {
            setDisabledInputs(false)
        }
        else setDisabledInputs(true)

        onChange(dayIndex, 'select', val)
    }

    return (
        <div style={{ position: 'relative', marginRight: '18px', border: '3px solid #B63035', paddingBottom: '10px', backgroundColor: 'white', minWidth: '421px' }}>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: '24px', borderBottom: '4px solid #B63035', width: 'fit-content', marginBottom: '8px', marginTop: 8, paddingLeft: 10, color: 'black' }}>Programación día {day}</h3>
                <select name="" id="" style={{ height: '20px', marginLeft: 'auto', marginRight: '15px', width: '100px' }} onChange={handleSelectChange}>
                    <option value="reunion">Reunión</option>
                    <option value="" disabled>...</option>
                    <option value="asamblea">Asamblea</option>
                    <option value="conmemoracion">Día de Conmemoración</option>
                </select>
            </div>
            {/* Acomodadores & Seguridad */}
            <div style={{ backgroundColor: '#535653', paddingBottom: '15px' }}>
                <h4 style={{ fontSize: '18px', color: 'white', paddingTop: '3px', marginLeft: "5px", }}>Acomodadores</h4>
                <div style={{ display: 'flex', width: '95%', justifyContent: 'space-between', marginLeft: "5px" }}>
                    <input
                        style={{ padding: "2px 3px", fontSize: '16px', width: '100%', backgroundColor: '#D9D9D9', fontWeight: 600 }}
                        placeholder="Nombre"
                        type="text"
                        value={values[`acomodadores1`] || ""}
                        onChange={(e) => onChange(dayIndex, `acomodadores1`, e.target.value)}
                        disabled={disabledInputs}
                    />
                    <input
                        style={{ padding: "2px 3px", fontSize: '16px', width: '100%', backgroundColor: '#D9D9D9', fontWeight: 600 }}
                        placeholder="Nombre"
                        type="text"
                        value={values[`acomodadores2`] || ""}
                        onChange={(e) => onChange(dayIndex, `acomodadores2`, e.target.value)}
                        disabled={disabledInputs}
                    />
                </div>

                <div style={{ backgroundColor: '#B63035', marginTop: '10px', padding: '10px 0 10px 0', width: '75%', borderRadius: '0 10px 10px 0' }}>
                    <h4 style={{ marginLeft: '5px', fontSize: '18px', color: 'white' }}>Seguridad</h4>
                    <input
                        style={{ padding: "2px 3px", fontSize: '16px', marginLeft: 5, width: '70%', backgroundColor: '#D9D9D9', fontWeight: 600 }}
                        placeholder="Nombre"
                        type="text"
                        value={values[`seguridad`] || ""}
                        onChange={(e) => onChange(dayIndex, `seguridad`, e.target.value)}
                        disabled={disabledInputs}
                    />
                </div>
            </div>

            {/* Micrófonos & Plataforma */}
            <div style={{ backgroundColor: '#434542', paddingBottom: '15px' }}>
                <h4 style={{ fontSize: '18px', color: 'white', paddingTop: '3px', marginLeft: "5px", }}>Micrófonos</h4>
                <div style={{ display: 'flex', width: '95%', justifyContent: 'space-between', marginLeft: "5px" }}>
                    <input
                        style={{ padding: "2px 3px", fontSize: '16px', width: '100%', backgroundColor: '#D9D9D9', fontWeight: 600 }}
                        placeholder="Nombre"
                        type="text"
                        value={values[`microfonos1`] || ""}
                        onChange={(e) => onChange(dayIndex, `microfonos1`, e.target.value)}
                        disabled={disabledInputs}
                    />
                    <input
                        style={{ padding: "2px 3px", fontSize: '16px', width: '100%', backgroundColor: '#D9D9D9', fontWeight: 600 }}
                        placeholder="Nombre"
                        type="text"
                        value={values[`microfonos2`] || ""}
                        onChange={(e) => onChange(dayIndex, `microfonos2`, e.target.value)}
                        disabled={disabledInputs}
                    />
                </div>

                <div style={{ backgroundColor: '#901014', marginTop: '10px', padding: '10px 0 10px 0', width: '75%', borderRadius: '0 10px 10px 0' }}>
                    <h4 style={{ marginLeft: '5px', fontSize: '18px', color: 'white' }}>Plataforma</h4>
                    <input
                        style={{ padding: "2px 3px", fontSize: '16px', marginLeft: 5, width: '70%', backgroundColor: '#D9D9D9', fontWeight: 600 }}
                        placeholder="Nombre"
                        type="text"
                        value={values[`plataforma`] || ""}
                        onChange={(e) => onChange(dayIndex, `plataforma`, e.target.value)}
                        disabled={disabledInputs}
                    />
                </div>
            </div>

            {/* Audio y video */}
            <div style={{ backgroundColor: '#353634', paddingBottom: '15px' }}>
                <h4 style={{ fontSize: '18px', color: 'white', paddingTop: '3px', marginLeft: "5px", }}>Audio Y Video</h4>
                <div style={{ display: 'flex', width: '95%', justifyContent: 'space-between', marginLeft: "5px" }}>
                    <input
                        style={{ padding: "2px 3px", fontSize: '16px', width: '100%', backgroundColor: '#D9D9D9', fontWeight: 600 }}
                        placeholder="Nombre"
                        type="text"
                        value={values[`audioVideo1`] || ""}
                        onChange={(e) => onChange(dayIndex, `audioVideo1`, e.target.value)}
                        disabled={disabledInputs}
                    />
                    <input
                        style={{ padding: "2px 3px", fontSize: '16px', width: '100%', backgroundColor: '#D9D9D9', fontWeight: 600 }}
                        placeholder="Nombre"
                        type="text"
                        value={values[`audioVideo2`] || ""}
                        onChange={(e) => onChange(dayIndex, `audioVideo2`, e.target.value)}
                        disabled={disabledInputs}
                    />
                </div>

            </div>

            {/* Div to disable inputs */}
            <div
                style={{
                    position: "absolute",
                    top: '12%',
                    left: 0,
                    width: "100%",
                    height: "88%",

                    backgroundColor: "rgba(54, 54, 54, 0.76)",
                    opacity: disabledInputs ? 1 : 0,  // Transición suave de opacidad
                    visibility: disabledInputs ? "visible" : "hidden", // Evita clics cuando está oculto
                    transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
                }} />

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
            <h2 style={{ margin: 'auto', fontSize: '28px', fontWeight: 800, color: 'black' }}>Selecciona fecha de inicio y días de reunión</h2>
        </div >
    );
}