import { useState } from "react";

import VisualizePDF from "../../components/VisualizePDF/VisualizePDF";
import LimpiezaPDF from "./PDF/LimpiezaPDF";
import DateForm from "./components/DateForm";

import { getDatesForGroups } from "../../utils/ScheduleUtils";

export default function LimpiezaPage() {

    // Generate programation
    const [dateStart, setDateStart] = useState(null)
    const [weekDay, setWeekDay] = useState(null)
    const [weekendDay, setWeekendDay] = useState(null)
    const [groups, setGroups] = useState(1)
    const [startGroup, setStartGroup] = useState(0)
    const [isWeekly, setIsWeekly] = useState(false)

    // Content
    const [schedule, setSchedule] = useState([])

    // PDF generated
    const [fileName, setFileName] = useState("")
    const currentDocument = <LimpiezaPDF schedule={schedule} setFileName={setFileName} />

    // Behaviors

    const handleDateStart = (e) => {
        setDateStart(e.target.value)
    }

    const handleSelectWeekDay = (e) => {
        setWeekDay(e.target.value)
    }

    const handleSelectWeekendDay = (e) => {
        setWeekendDay(e.target.value)
    }

    const handleGroups = (e) => {
        const val = e.target.value

        if (groups < startGroup) {
            setGroups(val)
            setStartGroup(val)
        }
        else setGroups(val)

    }

    const handleStartGroup = (e) => {
        const val = e.target.value
        if (val <= groups) { setStartGroup(val) }
    }

    const handleCheckBox = (e) => {
        setIsWeekly(e.target.checked)
    }

    const handleBtnDateStart = (e) => {
        e.preventDefault()

        if (dateStart != null && weekDay != null && weekendDay != null && ( groups != null && groups > 1)) {
            setSchedule(getDatesForGroups(dateStart, weekDay, weekendDay, groups, startGroup, isWeekly))
        }
        else alert("Debes llenar los campos necesarios")
    }

    return (
        <div style={{ backgroundColor: '#7D9FCE', color: 'white' }}>

            <DateForm
                handleDateStart={handleDateStart}
                handleSelectWeekDay={handleSelectWeekDay}
                handleSelectWeekendDay={handleSelectWeekendDay}
                handleGroups={handleGroups}
                groups={groups}
                handleStartGroup={handleStartGroup}
                handleCheckBox={handleCheckBox}
                handleBtnDateStart={handleBtnDateStart}
            />

            <VisualizePDF Document={currentDocument} fileName={fileName} />

        </div>
    )
}