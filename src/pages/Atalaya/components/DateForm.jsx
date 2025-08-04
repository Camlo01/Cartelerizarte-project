import ActionButtonComponent from "../../../components/ActionButtonComponent"

export default function DateForm({ handleDateStart, handleSelectWeekendDay, handleBtnDateStart }) {

    return (
        <div style={{ display: 'block', margin: 'auto', paddingTop: '40px', width: '65vw', }}>
            <form>
                <h1 style={{ fontSize: '36px', width: 'fit-content', margin: 'auto auto 20px auto' }}>Presidente & Lector</h1>
                <div style={{ width: 'fit-content', fontSize: '1.6rem', margin: 'auto', marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }} htmlFor="date-start">Mes de incio </label>
                    <input style={{ fontSize: '18px' }} type="month" id='date-start' onChange={handleDateStart} /> {/* Cambiar a type="month" */}
                </div>
                <div style={{ margin: 'auto auto 20px auto', width: 'fit-content' }}>
                    <div style={{ width: 'fit-content', margin: 'auto', fontSize: '1.6rem' }} >
                        <label style={{ marginRight: '20px ' }} htmlFor="fin-semana">Día fin de semana</label>
                        <select style={{ fontSize: '1.3rem' }} name="select" id="fin-semana" onChange={handleSelectWeekendDay} autoFocus>
                            <option value="">- Seleccionar -</option>
                            <option value="6">Sábado</option>
                            <option value="0">Domingo</option>
                        </select>
                    </div>
                </div>
                <ActionButtonComponent event={handleBtnDateStart} text={'Generar Campos'} />
            </form>
        </div>

    )
}