import { useState } from 'react';

import VisualizePDF from '../../components/VisualizePDF/VisualizePDF';
import AsignacionesPDF from './PDF/AsignacionesPDF';
import NamesInputs from './components/NamesInputs';
import DateForm from './components/DateForm';

import { getProgrammableDays, daysByMonths, nextMonths } from './PDF/util/schedule';

export default function AsignacionesPage() {

    // Initialize Schedule
    const [dateStart, setDateStart] = useState(null)
    const [weekDay, setWeekDay] = useState(null)
    const [weekendDay, setWeekendDay] = useState(null)

    // Content
    const [schedule, setSchedule] = useState([])
    const [peopleScheduled, setPeopleScheduled] = useState([])

    // PDF generated
    const currentDocument = <AsignacionesPDF schedule={schedule} peopleScheduled={peopleScheduled} />

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

            const daysOnMonths = daysByMonths(programmableDays)
            const correspondingMonths = nextMonths(dateStart, daysByMonths(programmableDays).length)

            const newSchedule = correspondingMonths.map((month, index) => ({
                month: month,
                day: daysOnMonths[index],
            }));

            setSchedule(newSchedule)

        } else {
            alert("Asegurate de llenar todos los campos primero")
        }
    }

    return (
        <div style={{
            backgroundColor: '#0c4ba6',
            color: 'white'
        }}>

            <DateForm
                handleDateStart={handleDateStart}
                handleSelectWeekDay={handleSelectWeekDay}
                handleSelectWeekendDay={handleSelectWeekendDay}
                handleBtnDateStart={handleBtnDateStart} />

            <NamesInputs schedule={schedule} setPeopleScheduled={setPeopleScheduled} />

            <VisualizePDF Document={currentDocument} />
        </div>
    )
}