import { useState } from "react";

import DateForm from "./components/DateForm";
import VisualizePDF from "../../components/VisualizePDF/VisualizePDF";
import ConferenciasPDF from "./PDF/ConferenciasPDF";
import NamesInputs from "./components/NamesInputs";

import { getWeekendDays, getSchedule } from "../../utils/ScheduleUtils";

export default function ConferenciasPages() {

    // Initialize Schedule
    const [dateStart, setDateStart] = useState(null)
    const [weekendDay, setWeekendDay] = useState(null)
    const [onlyOneMonth, setOnlyOneMonth] = useState(false)

    // Content
    const [schedule, setSchedule] = useState([])
    const [peopleScheduled, setPeopleScheduled] = useState([])

    // PDF generated
    const [fileName, setFileName] = useState("")
    const currentDocument = <ConferenciasPDF schedule={schedule} peopleScheduled={peopleScheduled} setFileName={setFileName} />

    // Behavior

    const handleDateStart = (e) => {
        setDateStart(e.target.value + '-1');
    }

    const handleSelectWeekendDay = (e) => {
        setWeekendDay(e.target.value);
    }

    const handleCheckBox = (e) => {
        setOnlyOneMonth(e.target.checked)
    }

    const handleBtnDateStart = (e) => {
        e.preventDefault();

        if (dateStart != null && weekendDay != null) {
            const programmableDays = getWeekendDays(dateStart, weekendDay)

            let scheduleCreated = getSchedule(dateStart, programmableDays)

            if (onlyOneMonth) {
                scheduleCreated.pop()
            }

            setSchedule(scheduleCreated)

        } else {
            alert("Asegúrate de llenar todos los campos primero")
        }
    }

    return (
        <div style={{ backgroundColor: '#CA7500', color: 'white' }}>

            <DateForm
                handleDateStart={handleDateStart}
                handleSelectWeekendDay={handleSelectWeekendDay}
                handleCheckBox={handleCheckBox}
                handleBtnDateStart={handleBtnDateStart} />

            <NamesInputs schedule={schedule} setPeopleScheduled={setPeopleScheduled} />

            <VisualizePDF Document={currentDocument} fileName={fileName} />
        </div>
    )
}