import { useState } from "react";


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

    const gray1 = '#353634'
    let allInputs = schedule.map((e, i) => (
        <div key={i} style={{ paddingTop: '20px', backgroundColor: "white" }}>
            <h2 style={{ fontSize: '35px', marginLeft: '20px', maxWidth: '780px', margin: '0 auto', paddingLeft: '15px', color: gray1 }}> Mes de {e.month}</h2>
            <div style={{
                margin: '0 auto 10px',
                padding: '30px 20px 30px 40px',

                overflowY: 'auto'
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

    return (
        <>
            <div>
                <h2 style={{
                    display: 'block',
                    margin: '40px auto',
                    width: 'fit-content',
                    fontSize: '32px',
                    fontWeight: 800,
                }}>Ingresa y carga los nombres</h2>


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

    const deepYellowColor = '#CA7500'
    const [inputsActive, setInputsActive] = useState(false)

    const inputGeneralStyle = { padding: "1px 3px", fontSize: '17px', backgroundColor: inputsActive ? '#b2b2b2' : 'white', fontWeight: 600, border: 'none', borderBottom: '2px solid gray', margin: "0 10px", transition: 'all .26s ease' }

    const handleSelectChange = (e) => {
        const val = e.target.value;

        if (val === 'none') {
            setInputsActive(false)
            return
        }
        setInputsActive(true)

        onChange(dayIndex, 'select', val)

    }

    const handleBosquejoChange = (val) => {

        const regexOnlyNumbers = /^[0-9]+$/

        // When is erasing
        if (val === '# ') {
            onChange(dayIndex, 'bosquejo', '')
        }

        // When is typing
        if (val.includes('# ')) {
            const numb = val.split("# ")[1]
            if (regexOnlyNumbers.test(numb) && numb.length <= 3) {
                onChange(dayIndex, 'bosquejo', "# " + numb)
            }
        }

        // When paste a number
        if (val.length <= 3 && regexOnlyNumbers.test(val)) {
            onChange(dayIndex, 'bosquejo', "# " + val)
        }
    }

    const handleContactoChange = (val) => {

        // Remove spaces
        val = val.replace(/\s+/g, '');

        const regexOnlyNumbs = /^[0-9]+$/

        // When is typing
        if (regexOnlyNumbs.test(val) && val.length <= 10 || val.length === 0) {

            if (val.length > 3) {
                const newString = val.slice(0, 3) + ' ' + val.slice(3)
                val = newString
            }
            if (val.length > 7) {
                const newString = val.slice(0, 7) + ' ' + val.slice(7)
                val = newString
            }
            onChange(dayIndex, 'contacto', val)
        }
    }


    return (
        <div style={{
            display: "flex",
            marginRight: '18px', backgroundColor: 'white', margin: '0 auto', paddingTop: '6px', width: 'fit-content'
        }}>
            <h3 style={{ fontSize: '24px', borderBottom: '4px solid ' + deepYellowColor, marginBottom: '6px', marginTop: 8, paddingLeft: 10, color: 'black', width: '96px' }}>Día {day}</h3>

            <div style={{ paddingTop: '15px' }}>

                <div style={{ display: 'flex', alignItems: 'center', marginLeft: "5px", margin: '0 auto', height: '100', }}>

                    <div >
                        <input
                            style={{ ...inputGeneralStyle, width: '175px' }}
                            placeholder="Orador"
                            type="text"
                            value={values['orador' || ""]}
                            onChange={(e) => onChange(dayIndex, 'orador', e.target.value)}
                            disabled={inputsActive}
                        />
                    </div>
                    <div>
                        <input
                            style={{ ...inputGeneralStyle, width: '160px' }}
                            placeholder="Congregación"
                            type="text"
                            value={values['congregacion' || ""]}
                            onChange={(e) => onChange(dayIndex, 'congregacion', e.target.value)}
                            disabled={inputsActive}
                        />
                    </div>
                    <div>
                        <input
                            style={{ ...inputGeneralStyle, width: '85px', textAlign: 'center' }}
                            placeholder="Bosquejo"
                            type="text"
                            value={values['bosquejo' || ""]}
                            onChange={(e) => handleBosquejoChange(e.target.value)}
                            disabled={inputsActive}
                        />
                    </div>
                    <div>
                        <input
                            style={{ ...inputGeneralStyle, width: '350px' }}
                            placeholder="Tema"
                            type="text"
                            value={values['tema' || ""]}
                            onChange={(e) => onChange(dayIndex, 'tema', e.target.value)}
                            disabled={inputsActive}
                        />
                    </div>
                    <div>
                        <input
                            style={{ ...inputGeneralStyle, width: '125px' }}
                            placeholder="Contacto"
                            type="text"
                            value={values['contacto' ?? ""]}
                            onChange={(e) => handleContactoChange(e.target.value)}
                            disabled={inputsActive}
                        />
                    </div>
                    <div>
                        <select name="" id="" style={{ width: "110px" }} onChange={handleSelectChange}>
                            <option value="conferencia">Conferencia</option>
                            <option value="" disabled>- Remplazar conferencista -</option>
                            <option value="asamblea">Día de Asamblea</option>
                            <option value="visita">Visita del Superintendente</option>
                            <option value="conmemoracion">Día de Conmemoración</option>
                        </select>
                    </div>
                </div>

            </div >

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