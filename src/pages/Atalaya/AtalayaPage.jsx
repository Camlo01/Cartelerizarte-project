import NotYet from "../../components/NotYet";

export default function AtalayaPage() {

    function getWeekendDays(start) {
        let scheduledDays = [];
        const [year, month, day] = start.split("-").map(Number);
        let date = new Date(Date.UTC(year, month - 1, day)); // Mes es 0-indexado
        const dayOfWeek = date.getUTCDay(); // Día de la semana inicial

        while (date.getUTCMonth() === month - 1) {
            if (date.getUTCDay() === dayOfWeek) {
                scheduledDays.push(date.getUTCDate()); // Obtener el día en UTC
            }
            date.setUTCDate(date.getUTCDate() + 7); // Avanzar 7 días en UTC
        }

        return scheduledDays;
    }

    return (
        <div>
            <NotYet />
        </div>
    )
}