import { useLocation } from "react-router-dom"

/**
 * Component for display that a page is not implemented yet
 * @returns Component
 */
export default function NotYet() {

    const location = useLocation()
    
    return (
        <>
            <div style={{
                backgroundColor: '#333740',
                color: '#BFBFBF',
                width: '100%', height: '93vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Montserrat',
                textAlign: 'center'
            }}>
                <div style={{ display: 'block', margin: '0 auto' }}>
                    <h1>La página ' <label style={{ color: '#D9D9D9' }}>{location.pathname}</label> ' no ha sido implementada todavía</h1>
                    <h2>Consulta nuevamente más adelante.</h2>
                </div>
            </div>
        </>
    )
}