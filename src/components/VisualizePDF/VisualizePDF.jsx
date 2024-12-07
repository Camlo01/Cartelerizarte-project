import { PDFViewer } from "@react-pdf/renderer";

import './VisualizePDF.css'

export default function VisualizePDF({ Document: DocumentToDisplay }) {

    return (
        <div className="PDFViewerContainer" style={styles.containerViewer}>
            <PDFViewer className="PDFViewerElement" style={styles.viewerElement}>
                {DocumentToDisplay}
            </PDFViewer>
        </div>
    )
}