// material-ui
// third-party
import { Text, View, StyleSheet } from '@react-pdf/renderer';
const textPrimary = '#262626';
const textSecondary = '#8C8C8C';
const border = '#F0F0F0';
// custom Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0
    }
  },
  card: {
    border: `1px solid black`,
    borderRadius: '2px',
    padding: '20px',
    width: '48%'
  },
  title: {
    color:"black",
    fontSize: '12px',
  },
  caption: {
    color: "black",
    fontSize: '10px',
    padding:'2',
  },
  tableTitle: {
    color:"black",
    fontSize: '10px',
    border:'1px solid #d4d4d4',
    padding:'6',
    backgroundColor:'#FFB74D',
    lineHeight:'1',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  subRow: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 0,
    paddingBottom: 20
  },
  column: {
    flexDirection: 'column'
  },
  paragraph: {
    color: '#1F2937',
    fontSize: '12px'
  },
  tableHeader: {
    justifyContent: 'space-between',
    margin: 0,
    paddingLeft: 0
  },

  tableRow: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #F0F0F0',
    paddingBottom: 10,
    paddingTop: 10,
    margin: 0,
    paddingLeft: 10
  },

  tableRow1: {
    alignItems: 'left',
    justifyContent: 'left',
    margin: 0,
  },

  tableCell: {
    color:"#000",
    fontSize: '10px',
    padding:'0',
    lineHeight:'0',
    margin:'0'
  },
  tableContent: {
    color:"black",
    fontSize: '10px',
    border:'1px solid #d4d4d4',
    padding:'10',
    lineHeight:'1',
  },

  bnk_det:{
    flexDirection: 'row',
    display:'flex',
    width:'100%',
  },
  bnk_det_tab1:{
    width:'70%',
  },
  bnk_det_tab2:{
    width:'30%',
  },
  border:{
    border: '1px solid #d4d4d4',
  },
  backgroundColorGrand:{
    backgroundColor:'#FFB74D',
    padding: '5',
  },
  tittleLetter:{
    fontSize: '12px',
    padding: '5',
  },
  padding1:{
    padding:'14px 0px 0px',
  },

  signature:{
    padding: '10px 10px',
    flexDirection: 'row',
    display: 'flex',
  },

  signature1:{
    width:'50%', 
    
  },
  text_right:{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    alignContent: 'flex-end',
  },
  box:{
    border: '1px solid #d4d4d4',
    width: '100',
    height: '40',
  },


  tableflex:{
    flexDirection: 'row',
    display:'flex',
  },

  tab1:{
    border: '1px solid #d4d4d4',
    fontSize: '10',
    padding: '3',
    lineHeight:'1', 
    width:'100px',
  },
  tab2:{
    width:'200px',
  },
  description1:{
    fontSize: '10',
    padding: '2',
  },
  paddingx:{
    paddingHorizontal:'4',     
  },
  paddingy:{
    paddingVertical:'4',     
  },
  bckgrundyellow:{
    backgroundColor:'#FFB74D',
  },
  txtcntr:{
    textAlign:'center',
  },
  
  tableflex1:{
    width:'100%',
  },

  tabwth1:{
    width:'100%',
    border: '1px solid #d4d4d4',
    fontSize: '9',
    padding: '4',
    lineHeight:'1',
  },
  tabwth25:{
    width:'50%',
    border: '1px solid #d4d4d4',
    fontSize: '8',
    padding: '4',
    lineHeight:'1',
  },
  tabwth75:{
    width:'100%',
    border: '1px solid #d4d4d4',
    fontSize: '8',
    padding: '4',
    lineHeight:'1.4',
  },
  fs8:{
    fontSize: '8',
  },
  fs10:{
    fontSize: '10',
  },
  fs12:{
    fontSize: '12',
  },
  fs14:{
    fontSize: '14',
  },
  brdr1:{
    border: '1px solid #d4d4d4',
  },
  signbox:{
    display:'flex',
  },
  signbox1:{
    height:'70px',
    border: '1px solid #d4d4d4',
    textAlign:'center',
    alignSelf: 'flex-end',
  },

  signpt:{
    paddingTop:'50px',
  },
  padding10:{
    padding:' 10px 0px 10px 0px',
  },

  fw5:{
    fontFamily: "Roboto-Bold",
  },

  tableContent1: {
    fontSize: '10px',
    border:'1px solid #d4d4d4',
    padding:'6',
    lineHeight:'1',
  },
  




  amountSection: { margin: 0, paddingRight: 25, paddingTop: 16, justifyContent: 'flex-end' },
  amountRow: { margin: 0, width: '100%', justifyContent: 'space-between',  },
  pb5: { paddingBottom: 5 },
  flex03: { flex: '0.3 0 0px' },
  flex07: { flex: '0.7 0 0px' },
  flex06: { flex: '0.6 0 0px' },
  flex09: { flex: '0.9 0 0px' },
  flex10: { flex: '1.0 0 0px' },
  flex11: { flex: '1.1 0 0px' },
  flex12: { flex: '1.2 0 0px' },
  flex14: { flex: '1.4 0 0px' },
  flex17: { flex: '1.7 0 0px' },
  flex18: { flex: '1.8 0 0px' },
  flex20: { flex: '2 1 0px' },
  flex22: { flex: '2.2 0 0px' },
  flex25: { flex: '2.5 0 0px' },
  flex100: { flex: '10 0 0px' }
});
const Content = () => {

  return (
    <View style={styles.container}>

          <View style={[styles.table]}>

            <View style={[styles.tableflex]}>
              <Text style={[styles.tabwth1,styles.fw5]}>BILLING DETAILS:</Text>
            </View>

            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Rate</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>904762.00</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Tax (%)</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>45238.00 & 5.00</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>IGST</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>0.00</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>CGST</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>22619.00</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>SGST</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>22619.00</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Total Bill Amt</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>950000.00</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Erection Charges</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>0.00</Text>
            </View>
          </View>  

      <View style={[styles.brdr1, styles.table ]}>

        <View style={[styles.tableflex]}>
          <Text style={[styles.tabwth1, styles.fw5]}>PAYMENT DETAILS:</Text>
        </View>

        <View style={[styles.row, styles.tableHeader,]}>
          <Text style={[styles.tableTitle, styles.flex12, styles.fw5]}>Due</Text>
          <Text style={[styles.tableTitle, styles.flex12, styles.fw5]}>Due Amt</Text>
          <Text style={[styles.tableTitle, styles.flex10, styles.fw5]}>Due Date</Text>
          <Text style={[styles.tableTitle, styles.flex10, styles.fw5]}>Status</Text>
          <Text style={[styles.tableTitle, styles.flex14, styles.fw5]}>Expected Due Date</Text>
          <Text style={[styles.tableTitle, styles.flex10, styles.fw5]}>Pay Type</Text>
          <Text style={[styles.tableTitle, styles.flex12, styles.fw5]}>Cheque No</Text>
        </View>

        <View style={[styles.row, styles.tableRow1 ]} >
            <Text style={[styles.tableContent1, styles.flex12]}>1. Advance-1</Text>
            <Text style={[styles.tableContent1, styles.flex12,]}>100000.00</Text>
            <Text style={[styles.tableContent1, styles.flex10,]}>26/05/2022</Text>
            <Text style={[styles.tableContent1, styles.flex10,]}>Received</Text>
            <Text style={[styles.tableContent1, styles.flex14,]}>26/05/2022</Text>
            <Text style={[styles.tableContent1, styles.flex10,]}>NEFT</Text>
            <Text style={[styles.tableContent1, styles.flex12,]}>5465424256</Text>
        </View>

        <View style={[styles.row, styles.tableRow1 ]} >
            <Text style={[styles.tableContent1, styles.flex12]}>2. Before Delivery Machine</Text>
            <Text style={[styles.tableContent1, styles.flex12,]}>850000.00</Text>
            <Text style={[styles.tableContent1, styles.flex10,]}>21/06/2022</Text>
            <Text style={[styles.tableContent1, styles.flex10,]}>Pending</Text>
            <Text style={[styles.tableContent1, styles.flex14,]}>26/05/2022</Text>
            <Text style={[styles.tableContent1, styles.flex10,]}>RTGS</Text>
            <Text style={[styles.tableContent1, styles.flex12,]}>5465424256</Text>
        </View>

        <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex09,styles.tableContent1]}>After Dispatch</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>0.00</Text>
            </View>
        
      </View>

      <View style={[styles.brdr1, styles.table ]}>

        <View style={[styles.tableflex]}>
          <Text style={[styles.tabwth1, styles.fw5]}>DUE PAYMENT TERMS:</Text>
        </View>

        <View style={[styles.row, styles.tableHeader,]}>
          <Text style={[styles.tableTitle, styles.flex12, styles.fw5]}>Due</Text>
          <Text style={[styles.tableTitle, styles.flex12, styles.fw5]}>Due Amt</Text>
          <Text style={[styles.tableTitle, styles.flex10, styles.fw5]}>Due Date</Text>
          <Text style={[styles.tableTitle, styles.flex10, styles.fw5]}>Status</Text>
          <Text style={[styles.tableTitle, styles.flex14, styles.fw5]}>Expected Due Date</Text>
          <Text style={[styles.tableTitle, styles.flex10, styles.fw5]}>Pay Type</Text>
          <Text style={[styles.tableTitle, styles.flex12, styles.fw5]}>Cheque No</Text>
        </View>

        <View style={[styles.row, styles.tableRow1 ]} >
            <Text style={[styles.tableContent1, styles.flex12]}>1. Advance-1</Text>
            <Text style={[styles.tableContent1, styles.flex12,]}>100000.00</Text>
            <Text style={[styles.tableContent1, styles.flex10,]}>26/05/2022</Text>
            <Text style={[styles.tableContent1, styles.flex10,]}>Received</Text>
            <Text style={[styles.tableContent1, styles.flex14,]}>26/05/2022</Text>
            <Text style={[styles.tableContent1, styles.flex10,]}>NEFT</Text>
            <Text style={[styles.tableContent1, styles.flex12,]}>5465424256</Text>
        </View>
        
      </View>     

      <View>

        <View style={[styles.row, styles.signbox]}>
          <Text style={[styles.flex20, styles.signbox1, styles.fs10, styles.fw5, styles.signpt]}>Prepared</Text>
          <Text style={[styles.flex20, styles.signbox1, styles.fs10, styles.fw5, styles.signpt]}>Approved</Text>
          <Text style={[styles.flex20, styles.signbox1, styles.fs10, styles.fw5, styles.signpt]}>Customer Signature</Text>
        </View>

      </View>

      <View>
        <Text style={[styles.fs12, styles.fw7, styles.txtcntr, styles.fw5]}>GSTIN: 33AAGCP3472Q1ZX</Text>
      </View>

    </View>
  );
};

export default Content;