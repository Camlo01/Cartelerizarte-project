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
            const data = await file.arrayBuffer();
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


/**
 * Function on charge of obtain the names fron the sheet for
 * generate the schedule
 * @param {Object} sheet 
 * @param {function} setScheduleGenerated 
 */
function initializeRandomSchedule(sheet, setScheduleGenerated, size) {


    const nombres = []
    const audioyvideo = []

    // get values from columns
    for (const cell in sheet) {
        if (!sheet[cell] || !sheet[cell].v) continue
        if (cell.startsWith("A")) nombres.push(sheet[cell].v)
        if (cell.startsWith("B")) audioyvideo.push(sheet[cell].v)
    }

    // remove titles
    if (nombres.length > 0) nombres.shift();
    if (audioyvideo.length > 0) audioyvideo.shift();

    // enough data
    if (nombres.length === 0 || audioyvideo.length === 0) {
        alert("No hay datos suficientes en las columnas de nombres y audio & video")
        return
    }

    // generate schedule
    const schedule = randomSchedule(nombres, audioyvideo, size)

    setScheduleGenerated(schedule)
}

function randomSchedule(nombres, audioyvideo, size) {
    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

    let previousAudioyvideo = []; // Nombres asignados a audio y video en la última fecha

    const generateDate = () => {
        let date = {
            acomodadores1: null,
            acomodadores2: null,
            seguridad: null,
            microfonos1: null,
            microfonos2: null,
            plataforma: null,
            audioVideo1: null,
            audioVideo2: null
        };

        // Copias de listas para evitar mutaciones
        let availableNames = [...nombres];
        let availableAudioVideo = [...audioyvideo];

        // Filtrar nombres de audio y video que no se asignaron en la última fecha
        availableAudioVideo = availableAudioVideo.filter(name => !previousAudioyvideo.includes(name));

        // Asignar audioVideo1 y audioVideo2 desde la lista exclusiva de audioysonido
        if (availableAudioVideo.length >= 2) {
            date.audioVideo1 = getRandomElement(availableAudioVideo);
            availableAudioVideo = availableAudioVideo.filter(name => name !== date.audioVideo1);

            date.audioVideo2 = getRandomElement(availableAudioVideo);
            availableAudioVideo = availableAudioVideo.filter(name => name !== date.audioVideo2);
        } else {
            // Asignar nombres si no hay suficientes disponibles en audioysonido
            if (availableAudioVideo.length > 0) {
                date.audioVideo1 = getRandomElement(availableAudioVideo);
                availableAudioVideo = availableAudioVideo.filter(name => name !== date.audioVideo1);
            }
            if (availableAudioVideo.length > 0) {
                date.audioVideo2 = getRandomElement(availableAudioVideo);
                availableAudioVideo = availableAudioVideo.filter(name => name !== date.audioVideo2);
            }
        }

        // Guardar nombres de audio y video para la siguiente iteración
        previousAudioyvideo = [date.audioVideo1, date.audioVideo2].filter(name => name);

        // Combinar nombres restantes disponibles para los otros puestos
        let availableForOtherAssignments = [...availableNames, ...availableAudioVideo];

        // Asignar puestos que no sean de audio y video
        let assignments = Object.keys(date).filter(key => date[key] === null);

        assignments.forEach(assignment => {
            if (availableForOtherAssignments.length > 0) {
                date[assignment] = getRandomElement(availableForOtherAssignments);
                availableForOtherAssignments = availableForOtherAssignments.filter(name => name !== date[assignment]);
            }
        });

        return date;
    };

    let randomSchedule = [];

    // Generar tantas fechas como el tamaño solicitado
    for (let i = 0; i < size; i++) {
        randomSchedule.push(generateDate());
    }

    return randomSchedule;
}