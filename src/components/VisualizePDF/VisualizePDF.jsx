import { PDFViewer} from "@react-pdf/renderer";

import './VisualizePDF.css'

export default function VisualizePDF({ Document: DocumentToDisplay }) {

    return (
        <div className="PDFViewerContainer">
            <PDFViewer className="PDFViewerElement">
                {DocumentToDisplay}
            </PDFViewer>
        </div>
    )
}