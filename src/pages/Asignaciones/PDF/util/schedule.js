/**
 * Get all the days of the current month and the next one
 * @param {string} start 
 * @param {int} weekDay 
 * @param {int} weekendDay 
 * @returns list of days
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

export function daysByMonths(list) {
    let result = [];
    let currentList = [list[0]];  // Empezamos con el primer número en la lista

    for (let i = 1; i < list.length; i++) {
        // Si el número actual es mayor o igual al anterior, lo agregamos a la lista actual
        if (list[i] > list[i - 1]) {
            currentList.push(list[i]);
        } else {
            // Si el número actual es menor que el anterior, separamos y creamos una nueva lista
            result.push(currentList);
            currentList = [list[i]];  // Comenzamos una nueva lista con el número actual
        }
    }

    // Agregar la última lista que se quedó sin agregar
    result.push(currentList);

    return result;
}


export function nextMonths(date, months) {
    const [day, month, year] = date.split("-").map(Number);
    const startDate = new Date(year, month - 1, 1); // Establecemos el primer día del mes
    const monthNames = [];

    for (let i = 0; i < months; i++) {
        // Obtenemos el nombre del mes en español y lo agregamos al listado
        const monthName = startDate.toLocaleString('es-ES', { month: 'long' });
        monthNames.push(monthName);

        // Avanzamos al siguiente mes
        startDate.setMonth(startDate.getMonth() + 1);
    }

    return monthNames;
}
