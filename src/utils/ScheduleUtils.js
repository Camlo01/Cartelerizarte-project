
/**
 * Gets all the programmable days for the current and next month based on selected days of week (weekdays and weekends).
 * 
 * @param {string} start - The starting date in 'YYYY-MM-DD' format.
 * @param {number} weekDay - The selected weekday (0 for Sunday, 1 for Monday, ..., 6 for Saturday).
 * @param {number} weekendDay - An additional selected day (optional, same format as weekDay).
 * @returns {Array<number>} - A list of days that match the given weekdays, e.g., [1, 4, 8, 2, 5, 9].
 */
export function getProgrammableDays(start, weekDay, weekendDay) {
    let programmableDays = [];
    const [year, month, day] = start.split("-").map(Number);
    let date = new Date(Date.UTC(year, month - 1, day));

    const monthStart = month - 1;
    while (date.getUTCMonth() === monthStart || date.getUTCMonth() === monthStart + 1) {
        const dayToCompare = date.getUTCDay(); // Day to compare

        // Verify if it's weekDay or weekendDay selected
        if (dayToCompare == weekDay || dayToCompare == weekendDay) {
            programmableDays.push(date.getUTCDate()); // Guardar el día
        }
        // Forward to next day 
        date.setUTCDate(date.getUTCDate() + 1);
    }
    return programmableDays;
}

/**
 * Get all the weekend days ignoring week days 
 * @param {String} start  - The starting date in 'YYYY-MM-DD'. format. '2025-02-01'
 * @param {int} weekendDay - The selected weekendDay (0 for Sunday or 6 for Saturday).
 * @returns {list } - list of days [ 1, 8, 5, 12 ]
 */
export function getWeekendDays(start, weekendDay) {
    return getProgrammableDays(start, 'IGNORE', weekendDay)
}

/**
 * Generates a schedule object mapping programmable days to corresponding months.
 * @param {String} dateStart - The starting date in 'YYYY-MM-DD'. format. '2025-02-01'
 * @param {list} programmableDays - List of days to be scheduled. [ 1, 4, 8, 11, ...]
 * @returns  {Aray<Object>} -  Array of objects containing month and scheduled day. [ { month: 'febrero', day: [1, 4, 8, 11, ...] }, {...} ] 
 */
export function getSchedule(dateStart, programmableDays) {

    let schedule

    const daysOnMonths = daysByMonths(programmableDays)
    const correspondingMonths = getMonths(dateStart, daysOnMonths.length)

    schedule = correspondingMonths.map((month, index) => ({
        month: month,
        day: daysOnMonths[index],
    }))

    return schedule
}

/**
 * Formats a file name based on a given name and a schedule
 * @param {*} name - Base file name
 * @param {*} schedule - List of objects containing month information, where each object has a `month` property as a string.
 * @returns {string} - Formatted name with abbreviated months or a default message if the schedule is empty.
 */
export function fileNameFormatted(name, schedule) {

    if (schedule.length > 0) {
        const monthsArr = schedule.map((month) =>
            month.month.slice(0, 3).charAt(0).toUpperCase() + month.month.slice(1, 3)
        );
        const monthsAbbr = monthsArr.join("-")

        return name + ' ' + monthsAbbr

    }
    else return "Listado sin generar"
}

// Internal Functions (Not Exported)

/**
 * Groups a list of days into sublists, separating them when a smaller number appears.
 * @param {Array<number>} list -  a sorted list of days.  [ 1, 8, ..., 2, 9, ... ]
 * @returns {Array<list>} - An array of sublists, where each sublist contains 
 *                                   consecutive increasing numbers.{ [ 1, 8, ... ] [ 2, 9, ... ]}
 */
function daysByMonths(list) {
    let result = [];
    let currentList = [list[0]]

    for (let i = 1; i < list.length; i++) {
        // If the actual number is grater than the previous, is added to the actual list
        if (list[i] > list[i - 1]) {
            currentList.push(list[i])
        } else {
            // if the actual number is lowers than the previous, addas it in a new list
            result.push(currentList)
            currentList = [list[i]]
        }
    }

    result.push(currentList)

    return result
}

/**
 * Gets the corresponding month names based on a starting date.
 * 
 * @param {String} date - The starting date in 'YYYY-MM-DD' format.
 * @param {number} months - The number of months to generate.
 * @returns {Array<String>} - An array of month names in Spanish, e.g., ['enero', 'febrero'].
 */
function getMonths(date, months) {
    const [day, month, year] = date.split('-').map(Number)
    const startDate = new Date(year, month - 1, 1)
    const monthNames = []

    for (let i = 0; i < months; i++) {
        // get the month name in spanish and adds it 
        const monthName = startDate.toLocaleString('es-ES', { month: 'long' })
        monthNames.push(monthName)

        // Move forward to next month
        startDate.setMonth(startDate.getMonth() + 1)
    }
    return monthNames
}
