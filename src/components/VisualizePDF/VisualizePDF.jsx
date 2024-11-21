import { PDFViewer } from "@react-pdf/renderer";

export default function VisualizePDF({ Document: DocumentToDisplay }) {

    return (
        <div
            style={{
                backgroundColor: '#acafb7',
                padding: "10px 0",
                margin: '0 auto 50px'
            }}
        >
            <PDFViewer
                style={{
                    width: '89vw',
                    height: '82vh',
                    display: 'block',
                    margin: 'auto'
                }}>
                {DocumentToDisplay}
            </PDFViewer>
        </div>
    )
}