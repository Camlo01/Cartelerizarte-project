import { useState } from 'react';

import DateForm from './components/DateForm';
import VisualizePDF from "../../components/VisualizePDF/VisualizePDF";
import AtalayaPDF from "./PDF/AtalayaPDF";
import NamesInputs from './components/NamesInputs';

import { getProgrammableDays } from './PDF/util/schedule';
import { daysByMonths, nextMonths } from '../Asignaciones/PDF/util/schedule';

export default function AtalayaPage() {

    // Initialize Schedule
    const [dateStart, setDateStart] = useState(null)
    const [weekendDay, setWeekendDay] = useState(null)

    // Content
    const [schedule, setSchedule] = useState([])
    const [peopleScheduled, setPeopleScheduled] = useState([])

    // PDF generated
    const currentDocument = <AtalayaPDF schedule={schedule} peopleScheduled={peopleScheduled} />

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
            const programmableDays = getProgrammableDays(dateStart, weekendDay)

            const daysOnMonths = daysByMonths(programmableDays)
            const correspondingMonths = nextMonths(dateStart, daysByMonths(programmableDays).length)

            const newSchedule = correspondingMonths.map((month, index) => ({
                month: month,
                day: daysOnMonths[index],
            }));

            setSchedule(newSchedule)

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

            <VisualizePDF Document={currentDocument} />
        </div>
    )
}