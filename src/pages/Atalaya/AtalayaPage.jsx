import { useState } from 'react';

import DateForm from './components/DateForm';
import VisualizePDF from "../../components/VisualizePDF/VisualizePDF";
import AtalayaPDF from "./PDF/AtalayaPDF";
import NamesInputs from './components/NamesInputs';

import { getWeekendDays, getSchedule } from '../../utils/ScheduleUtils';

export default function AtalayaPage() {

    // Initialize Schedule
    const [dateStart, setDateStart] = useState(null)
    const [weekendDay, setWeekendDay] = useState(null)

    // Content
    const [schedule, setSchedule] = useState([])
    const [peopleScheduled, setPeopleScheduled] = useState([])

    // PDF generated
    const [fileName, setFileName] = useState("")
    const currentDocument = <AtalayaPDF schedule={schedule} peopleScheduled={peopleScheduled} setFileName={setFileName} />

    // Behaviors
    const handleDateStart = (e) => {
        setDateStart(e.target.value + '-1');
    }

    const handleSelectWeekendDay = (e) => {
        setWeekendDay(e.target.value);
    }

    const handleBtnDateStart = (e) => {
        e.preventDefault();

        if (dateStart != null && weekendDay != null) {
            const programmableDays = getWeekendDays(dateStart, weekendDay)

            const scheduleCreated = getSchedule(dateStart, programmableDays)

            setSchedule(scheduleCreated)

        } else {
            alert("Asegúrate de llenar todos los campos primero")
        }
    }


    return (
        <div style={{ backgroundColor: '#CA7500', color: 'white' }}>
            {/* <NotYet /> */}

            <DateForm
                handleDateStart={handleDateStart}
                handleSelectWeekendDay={handleSelectWeekendDay}
                handleBtnDateStart={handleBtnDateStart} />

            <NamesInputs schedule={schedule} setPeopleScheduled={setPeopleScheduled} />

            <VisualizePDF Document={currentDocument} fileName={fileName} />
        </div>
    )
}