
import ActionButtonComponent from "../../../components/ActionButtonComponent"

export default function DateForm({
    handleDateStart,
    handleSelectWeekDay,
    handleSelectWeekendDay,
    handleGroups,
    groups,
    handleStartGroup,
    handleCheckBox,
    handleBtnDateStart }) {

    return (
        <div style={{ display: 'block', margin: 'auto', paddingTop: '40px', paddingBottom: '40px', width: '65vw', }}>
            <form>
                <h1 style={{ fontSize: '36px', width: 'fit-content', margin: 'auto auto 20px auto' }}>Limpieza</h1>
                <div style={{ width: 'fit-content', fontSize: '1.6rem', margin: 'auto', marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }} htmlFor="date-start">Fecha de inicio </label>
                    <input style={{ fontSize: '18px' }} type="date" id='date-start' onChange={handleDateStart} />
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

                    <div style={{ width: 'fit-content', fontSize: '1.6rem', margin: 'auto', marginTop: '5px', marginBottom: '10px' }}>
                        <label style={{ marginRight: '10px' }} htmlFor="date-start">Cantidad de grupos </label>
                        <input style={{ fontSize: '18px', width: 60 }} type="number" min={1} id='groups' onChange={handleGroups} placeholder="#" />
                    </div>

                    <div style={{ margin: 'auto auto 20px auto', width: 'fit-content', color: '#42679a'}}>   
                        <hr style={{ margin: '20px auto' }} />
                        <div style={{ width: 'fit-content', fontSize: '1.6rem', margin: 'auto', marginTop: '5px', marginBottom: '10px' }}>
                            <label style={{ marginRight: '10px' }} htmlFor="date-start">Grupo que inicia (Opcional) </label>
                            <input style={{ fontSize: '18px', width: 60 }} type="number" min={1} id='groups' max={groups} onChange={handleStartGroup} placeholder="?" />
                        </div>

                        <div style={{ width: 'fit-content', fontSize: '1.6rem', margin: 'auto', marginTop: '5px', marginBottom: '10px' }}>
                            <label style={{ marginRight: '10px' }} htmlFor="date-start">Semanal (Opcional)</label>
                            <input style={{ fontSize: '18px', width: 15, height: 15 }} type="checkbox" id='is-weekly' onChange={handleCheckBox} />
                        </div>
                    </div>
                </div>

                <ActionButtonComponent event={handleBtnDateStart} text={'Generar Campos'} />

            </form>
        </div>
    )
}