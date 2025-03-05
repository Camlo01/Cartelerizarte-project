import { useState } from 'react';

import VisualizePDF from '../../components/VisualizePDF/VisualizePDF';
import AsignacionesPDF from './PDF/AsignacionesPDF';
import NamesInputs from './components/NamesInputs';
import DateForm from './components/DateForm';

import { getProgrammableDays, getSchedule } from '../../utils/ScheduleUtils';

export default function AsignacionesPage() {

    // Initialize Schedule
    const [dateStart, setDateStart] = useState(null)
    const [weekDay, setWeekDay] = useState(null)
    const [weekendDay, setWeekendDay] = useState(null)

    // Content
    const [schedule, setSchedule] = useState([])
    const [peopleScheduled, setPeopleScheduled] = useState([])

    // PDF generated
    const [fileName, setFileName] = useState("")
    const currentDocument = <AsignacionesPDF schedule={schedule} peopleScheduled={peopleScheduled} setFileName={setFileName} />

    // Behaviors
    const handleDateStart = (e) => {
        setDateStart(e.target.value + '-1');
    };
    const handleSelectWeekDay = (e) => {
        setWeekDay(e.target.value)
    }
    const handleSelectWeekendDay = (e) => {
        setWeekendDay(e.target.value)
    }
    const handleBtnDateStart = (e) => {
        e.preventDefault();

        // Validate theres no empty field
        if (dateStart != null && weekDay != null && weekendDay != null) {
            const programmableDays = getProgrammableDays(dateStart, weekDay, weekendDay)

            const scheduleCreated = getSchedule(dateStart, programmableDays)

            setSchedule(scheduleCreated)

        } else {
            alert("Asegurate de llenar todos los campos primero")
        }
    }

    return (
        <div style={{
            backgroundColor: 'rgb(157, 18, 37)',
            color: 'white'
        }}>

            <DateForm
                handleDateStart={handleDateStart}
                handleSelectWeekDay={handleSelectWeekDay}
                handleSelectWeekendDay={handleSelectWeekendDay}
                handleBtnDateStart={handleBtnDateStart} />

            <NamesInputs schedule={schedule} setPeopleScheduled={setPeopleScheduled} />

            <VisualizePDF Document={currentDocument} fileName={fileName} />
        </div>
    )
}