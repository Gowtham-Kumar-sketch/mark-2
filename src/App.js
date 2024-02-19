import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import ExportPDFView from './OrderAccecptance/Index';




function App() {
  return (
    <div className='main1'>
      <PDFViewer width='100%' height='100%'>
        
         <ExportPDFView/>

        

      </PDFViewer>
    </div>
  );
}

export default App;
