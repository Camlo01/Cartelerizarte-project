/**
 * Get all the days of the current month and the next one
 * @param {string} start 
 * @param {int} weekDay 
 * @param {int} weekendDay 
 * @returns list of days
 */
export function getProgrammableDays(start, weekendDay) {
    let programmableDays = [];
    const [year, month, day] = start.split("-").map(Number);
    let date = new Date(Date.UTC(year, month - 1, day));

    const monthStart = month - 1;
    while (date.getUTCMonth() === monthStart || date.getUTCMonth() === monthStart + 1) {
        const dayToCompare = date.getUTCDay(); // Day to compare

        // Verify if it's weekDay or weekendDay selected
        if ( dayToCompare == weekendDay) {
            programmableDays.push(date.getUTCDate()); // Guardar el día
        }
        // Forward to next day 
        date.setUTCDate(date.getUTCDate() + 1);
    }
    return programmableDays;
}
