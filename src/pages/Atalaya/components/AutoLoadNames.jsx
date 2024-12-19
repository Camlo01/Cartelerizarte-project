import { useState, useEffect } from "react";
import { read } from "xlsx";

export default function AutoLoadNames({ schedule, setInputValues, setPeopleScheduled }) {

    const [scheduleGenerated, setScheduleGenerated] = useState([])
    const [size, setSize] = useState(0)


    useEffect(() => {
        if (schedule.length > 0) {
            let totalDates = 0
            schedule.map((month) => totalDates += month.day.length)
            setSize(totalDates)
        }
    }, [schedule])

    useEffect(() => {
        setInputValues(scheduleGenerated)
        setPeopleScheduled(scheduleGenerated)
    }, [scheduleGenerated])

    const handleInputChange = async (e) => {
        const file = e.target.files[0]
        if (!file) return

        try {
            const data = await file.arrayBuffer()
            const workbook = read(data)
            const sheet = workbook.Sheets['Listado'];
            if (!sheet) {
                alert("La hoja 'Listado' no existe en el archivo cargado.")
                return;
            }
            initializeRandomSchedule(sheet, setScheduleGenerated, size)
        } catch (error) {
            console.error('Error al procesar el archivo: ', error)
        }
    }

    return (
        <div style={{ display: 'block', margin: '0 auto', width: 'fit-content', marginBottom: '40px' }}>
            <p style={{ fontSize: ' 20px', paddingBottom: '10px' }}> Generar automáticamente con <a href="/assets/template/Listado Asignaciones Plantilla v1.0.xlsx" about="awd" style={{ color: 'orange' }}>plantilla</a>.</p>
            <input type="file" onChange={handleInputChange}
                style={{
                    display: 'block', margin: '0 auto',
                    padding: '10px',
                    border: '2px solid #007BFF',
                    borderRadius: '5px',
                    backgroundColor: '#f8f9fa',
                    fontSize: '14px',
                    color: '#333',
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e9ecef'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
            />
        </div>
    )
}


function initializeRandomSchedule(sheet, setScheduleGenerated, size) {

    const presidentes = []
    const lectores = []

    // Get values from columns
    for (const cell in sheet) {
        if (!sheet[cell] || !sheet[cell].v) continue
        if (cell.startsWith("A")) presidentes.push(sheet[cell].v)
        if (cell.startsWith("B")) lectores.push(sheet[cell].v)
    }

    // Remove titles
    if (presidentes.length > 0) presidentes.shift();
    if (lectores.length > 0) lectores.shift();


    // Enough data
    if (presidentes.length === 0 || lectores.length === 0) {
        alert("No hay datos suficientes en las columnas 'presidentes' y 'lectores'")
        return
    }

    // Generate schedule
    const schedule = randomSchedule(presidentes, lectores, size)

    setScheduleGenerated(schedule)
}

function randomSchedule(presidentes, lectores, size) {
    const shuffleArray = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    const getFirstElement = (arr) => arr.shift();

    // Genera una fecha con presidente y lector
    const generateDate = () => {
        // Si la lista está vacía, la rellenamos nuevamente con los valores mezclados
        if (availablePresidentes.length === 0) {
            availablePresidentes = shuffleArray([...presidentes]);
        }
        if (availableLectores.length === 0) {
            availableLectores = shuffleArray([...lectores]);
        }

        return {
            presidente: getFirstElement(availablePresidentes),
            lector: getFirstElement(availableLectores),
        };
    };

    // Listas de disponibles, inicialmente vacías
    let availablePresidentes = shuffleArray([...presidentes]);
    let availableLectores = shuffleArray([...lectores]);

    // Genera el cronograma
    let randomSchedule = [];
    for (let i = 0; i < size; i++) {
        randomSchedule.push(generateDate());
    }

    return randomSchedule;
}
