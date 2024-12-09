export default function DateForm({ handleDateStart, handleSelectWeekDay, handleSelectWeekendDay, handleBtnDateStart }) {

    return (
        <div style={{ display: 'block', margin: 'auto', paddingTop: '40px', width: '65vw' }}>
            <form>
                <h1 style={{ fontSize: '36px', width: 'fit-content', margin: 'auto auto 20px auto' }}>Asignaciones</h1>
                <div style={{ width: 'fit-content', fontSize: '1.6rem', margin: 'auto', marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }} htmlFor="date-start">Mes de incio </label>
                    <input style={{ fontSize: '18px' }} type="month" id='date-start' onChange={handleDateStart} /> {/* Cambiar a type="month" */}
                </div>
                <div style={{ margin: 'auto auto 20px auto', width: 'fit-content' }}>
                    <div style={{ width: 'fit-content', margin: 'auto auto 10px auto', fontSize: '1.6rem' }} >
                        <label style={{ marginRight: '20px ' }} htmlFor="en-semana">Día entre semana</label>
                        <select style={{ fontSize: '1.3rem' }} name="select" id='en-semana' onChange={handleSelectWeekDay}>
                            <option value="">- Seleccionar -</option>
                            <option value="1">Lunes</option>
                            <option value="2">Martes</option>
                            <option value="3">Miércoles</option>
                            <option value="4">Jueves</option>
                            <option value="5">Viernes</option>
                        </select>
                    </div>
                    <div style={{ width: 'fit-content', margin: 'auto', fontSize: '1.6rem' }} >
                        <label style={{ marginRight: '20px ' }} htmlFor="fin-semana">Día fin de semana</label>
                        <select style={{ fontSize: '1.3rem' }} name="select" id="fin-semana" onChange={handleSelectWeekendDay} autoFocus>
                            <option value="">- Seleccionar -</option>
                            <option value="6">Sábado</option>
                            <option value="0">Domingo</option>
                        </select>
                    </div>
                </div>
                <button style={{
                    display: 'block',
                    margin: 'auto',
                    padding: '10px 20px',
                    fontSize: '18px'
                }} onClick={handleBtnDateStart}>Generar Campos</button>
            </form>
        </div>

    )
}