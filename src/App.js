import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import ExportPDFViewThree from './OrderAccecptanceThree/Index';




function App() {
  return (
    <div className='main1'>
      <PDFViewer width='100%' height='100%'>
        
         <ExportPDFViewThree/>

        

      </PDFViewer>
    </div>
  );
}

export default App;
