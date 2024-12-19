import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import './VisualizePDF.css'

export default function VisualizePDF({ Document, fileName }) {

    return (
        <div className="PDFViewerContainer" style={{ display: 'flex', flexDirection: 'column' }}>
            <PDFDownloadLink
                style={{ maxWidth: '320px', margin: '20px auto', padding: " 10px 60px", backgroundColor: 'white', color: 'black' }}
                document={Document} fileName={fileName || "file"}>
                {({ blob, url, loading, error }) =>
                    loading ? 'Cargando...' : 'Descargar'
                }
            </PDFDownloadLink>
            <PDFViewer className="PDFViewerElement">
                {Document}
            </PDFViewer>
        </div>
    )
}