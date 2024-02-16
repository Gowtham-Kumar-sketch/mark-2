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
    fontSize: '10px',
    fontFamily: "Roboto-Bold",
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
    border: '1px solid #F0F0F0',
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
    fontSize: '10px',
    border:'1px solid #d4d4d4',
    padding:'10',
    lineHeight:'1.4',
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
  padding6:{
    padding:' 6px 0px 6px 0px',
  },
  fw5:{
    fontFamily: "Roboto-Bold",
  },

  tableContent1: {
    fontSize: '9px',
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


          <View style={[styles.head2, styles.border, styles.paddingx, styles.bckgrundyellow ]}>

            <View style={[styles.head2_con1]}>
              <Text style={[styles.title, styles.paddingy, styles.txtcntr, styles.padding6 ]}> ORDER ACCECPTANCE </Text>
            </View>

          </View> 

          <View style={[styles.table]}>

            <View style={[styles.tableflex]}>
              <Text style={[styles.tabwth1, styles.fw5,]}>CUSTOMER DETAILS & MACHINE MODELS:</Text>
            </View>

            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Order No. & Date </Text>
                <Text style={[styles.flex20,styles.tableContent1,]}>p/DEL/22-23/000042 & 21/06/2022</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Executive Name & Ph.No.</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>ILAYARAJA.B & 8489935205</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Customer Name</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>SANKA DHALL MILL</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>State</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>TAMILNADU</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>GSTIN</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>33AAFFS4878M1ZL</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Contact Person</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>MR.SENTHIL NARAYANAN</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Designation</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>PROP</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Registered Contact No</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>9442612677</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Email ID</Text>
                <Text style={[styles.flex20,styles.tableContent1]}></Text>
            </View>

          </View>  

      <View style={[styles.brdr1]}>

        <View style={[styles.row, styles.tableHeader,]}>
          <Text style={[styles.tableTitle, styles.flex20,styles.fw5]}>Machine Modal</Text>
          <Text style={[styles.tableTitle, styles.flex07, styles.txtcntr,styles.fw5]}>Camara</Text>
          <Text style={[styles.tableTitle, styles.flex14, styles.txtcntr,styles.fw5]}>Frame</Text>
          <Text style={[styles.tableTitle, styles.flex14, styles.txtcntr,styles.fw5]}>Channel/Ejectores</Text>
          <Text style={[styles.tableTitle, styles.flex14, styles.txtcntr,styles.fw5]}>Rate</Text>
        </View>

        <View style={[styles.row, styles.tableRow1 ]} >
            <Text style={[styles.tableContent1, styles.flex20]}>Trendz T20-2 Chute </Text>
            <Text style={[styles.tableContent1, styles.flex07, styles.txtcntr]}>4 Nos. (2 front side, 2 rear side)</Text>
            <Text style={[styles.tableContent1, styles.flex14, styles.txtcntr]}>1+1</Text>
            <Text style={[styles.tableContent1, styles.flex14, styles.txtcntr]}>126/126</Text>
            <Text style={[styles.tableContent1, styles.flex14, styles.txtcntr]}>700000.00</Text>
        </View>

        <View style={[styles.row, styles.tableRow1 ]} >
            <Text style={[styles.tableContent1, styles.flex20]}>Trendz T20-2 Chute </Text>
            <Text style={[styles.tableContent1, styles.flex07, styles.txtcntr]}>4 Nos. (2 front side, 2 rear side)</Text>
            <Text style={[styles.tableContent1, styles.flex14, styles.txtcntr]}>1+1</Text>
            <Text style={[styles.tableContent1, styles.flex14, styles.txtcntr]}>126/126</Text>
            <Text style={[styles.tableContent1, styles.flex14, styles.txtcntr]}>700000.00</Text>
        </View>

        <View style={[styles.row, styles.tableRow1 ]} >
            <Text style={[styles.tableContent1, styles.flex20]}>Trendz T20-2 Chute </Text>
            <Text style={[styles.tableContent1, styles.flex07, styles.txtcntr]}>4 Nos. (2 front side, 2 rear side)</Text>
            <Text style={[styles.tableContent1, styles.flex14, styles.txtcntr]}>1+1</Text>
            <Text style={[styles.tableContent1, styles.flex14, styles.txtcntr]}>126/126</Text>
            <Text style={[styles.tableContent1, styles.flex14, styles.txtcntr]}>700000.00</Text>
        </View>
        
      </View>

      <View style={[styles.table]}>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Tax</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>45238.00</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Packing and Forwarding</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>0.00</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Chute Distribution</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>Primary 63, Secondary 63</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Special Features</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>.OLD MACHINE EXCHANGE MARK TRENDZ M SERIES 2 CHUTE</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Commodity</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>Dall</Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>CAPACITY:</Text>
                <Text style={[styles.flex20,styles.tableContent1]}></Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Output Tonnage</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>1.0 TON </Text>
            </View>
            <View style={[styles.tableflex, styles.tableflex1 ]}>
                <Text style={[styles.flex10,styles.tableContent1,styles.fw5]}>Input Contamination Ratio</Text>
                <Text style={[styles.flex20,styles.tableContent1]}>1 TO 2% If the contamination percentage increased, the processing capacity will be decreased.</Text>
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
        <Text style={[styles.fs12, styles.fw7, styles.txtcntr,styles.fw5,]}>GSTIN: 33AAGCP3472Q1ZX</Text>
      </View>

 



      {/* <View style={[styles.row, { alignItems: 'flex-start', marginTop: 20, width: '95%' }]}>
        <Text style={styles.caption}>Notes </Text>
        <Text style={styles.tableCell}>
          {' '}
          It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!
        </Text>
      </View> */}

    </View>
  );
};

export default Content;