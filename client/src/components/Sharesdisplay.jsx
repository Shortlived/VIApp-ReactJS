import React, { useState, useEffect } from "react";
import AccordionApp from "./AccordionApp";

import "../styles.css";

function Sharesdisplay(props) {
  const [userData, setUserData] = useState({});

  const stockUrl = "http://localhost:9000/api/" + props.Symbol;
  
  useEffect(() => {
    
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    
    const response = await fetch(stockUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };
  
  //ASX 100
  
  //"AAPL,MSFT,AMZN,FB,GOOGL,GOOG,BRK.B,JNJ,PG,V,NVDA,MA,HD,JPM,UNH,VZ,ADBE,DIS,CRM,PYPL,MRK,INTC,NFLX,CMCSA,T,PFE,WMT,KO,PEP,ABT,BAC,TMO,MCD,CSCO,NKE,COST,ABBV,XOM,AVGO,AMGN,ACN,MDT,NEE,CVX,UNP,BMY,DHR,QCOM,TXN,LIN,LOW,PM,LLY,ORCL,UPS,HON,IBM,AMT,SBUX,WFC,LMT,,CHTR,FIS,AMD,C,NOW,RTX,SPGI,,MDLZ,CAT,GILD,BA,ISRG,TGT,BLK,ZTS,CVS,MO,PLD,VRTX,DE,BKNG,GS,CCI,EQIX,SYK,CL,TMUS,D,BDX,APD,TJX,ANTM,AX"P,ATVI,DUK,CI,FDX,CSX,CME,REGN,MMC,ADP,SHW,SO,MS,ITW,ICE,MU,NSC,FISV,PGR,BSX,AMAT,GE,GPN,CB,HUM,DG,NOC,KMB,NEM,ADSK,ECL,TFC,USB,EL,LRCX,EW,AON,MCO,PNC,WM,BIIB,ILMN,ADI,ROP,DD,BAX","ETN,SCHW,AEP,EMR,LHX,DLR,EA,DXCM,GM,CTSH,COP,GIS,XEL,SBAC,CMG,DOW,EBAY,TWTR,EXC,SRE,ORLY,PSA,GD,CNC,SYY,IDXX,COF,TEL,ROST,HCA,APH,JCI,SNPS,CMI,STZ,A,WEC,MSCI,VRSK,MNST,KLAC,INFO,CDNS,TT,ALL,IQV,PCAR,TROW,PPG,CTAS,MET,YUM,TRV,ZBH,ES,PEG,BK,CLX,AZO,BLL,KR,TDG,ANSS,F,MSI,WLTW,AWK,ADM,WBA,FAST,SWK,OTIS,PH,ROK,HPQ,ALXN,MCHP,ED,FTV,MAR,PRU,CARR,XLNX,PAYX,WMB,RMD,BBY,DHI,KMI,AFL,MCK,GLW,PSX,MTD,HLT,MKC,SLB,AIG,APTV,SWKS,CHD,ALGN,FCX,VFC,AME,LUV,WELL,DTE,LEN,EOG,DLTR,CPRT,CTVA,CERN,AVB,VRSN,HSY,STT,O,PPL,WY,FLT,AJG,WST,RSG,SPG,EIX,ETR,KHC,AEE,MPC,DAL,ARE,VLO,EFX,TTWO,KEYS,LYB,AKAM,MXIM,ODFL,KSU,AMP,FRC,EQR,LH,MKTX,VMC,CMS,TSN,CAG,AMCR,CTXS,VIAC,TSCO,HOLX,DFS,COO,DPZ,CDW,INCY,NTRS,VAR,K,DOV,FTNT,KMX,GWW,IP,CBRE,FE,EXPD,TFX,LVS,VTR,XYL,BR,QRVO,DGX,MAS,PXD,STE,PEAK,FITB,NDAQ,ABC,MLM,CHRW,GPC,NVR,BF.B,ETSY,ZBRA,NUE,FMC,EXR,HRL,CAH,PAYC,GRMN,SYF,TYL,CTLT,IEX,IR,DRE,PKI,ESS,CE,HIG,MAA,EXPE,DRI,TER,SJM,TIF,IFF,ULTA,NLOK,URI,JKHY,LNT,PHM,AES,HPE,WAT,ABMD,J,LDOS,SIVB,CINF,MTB,FBHS,BXP,TDY,KEY,EVRG,JBHT,ATO,HAL,WAB,WHR,WDC,IT,ETFC,,HES,ANET,RCL,OMC,BIO,STX,EMN,RF,CFG,CNP,AAP,CBOE,PFG,PKG,AVY,LUMN,HAS,UAL,NTAP,CPB,XRAY,UDR,FOXA,LW,WU,HBAN,ALLE,OXY,ALB,CXO,MGM,WRB,BKR,RJF,HSIC,WRK,UHS,PNW,L,RE,NI,TXT,GL,SNA,COG,LKQ,BWA,IRM,PNR,ROL,NRG,AOS,HST,PWR,DISH,MYL,LYV,AIZ,CCL,FFIV,JNPR,WYNN,CF,LB,DVA,MOS,HWM,NWL,IPG,TAP,PRGO,DISCK,RHI,AAL,REG,SEE,IPGP,HII,MHK,HBI,LNC,BEN,LEG,CMA,NWSA,VNO,FRT,AIV,FANG,ZION,NLSN,FLIR,PVH,KIM,TPR,PBCT,ALK,FOX,DXC,NBL,APA,IVZ,NOV,NCLH,RL,GPS,DVN,MRO,FLS,UNM,DISCA,XRX,SLG,HFC,FTI,UAA,UA,NWS
  //"CLZ.AX","XTC.AX","CAD.AX","MRQ.AX","ARO.AX","PMY.AX","TEG.AX","ANL.AX","SI6.AX","EM1.AX","TLS.AX","ARE.AX","S32.AX","MML.AX","CLB.AX","AHQ.AX","WCN.AX","ADS.AX","PFT.AX","SPT.AX","HTG.AX","ANN.AX","HLA.AX","RNO.AX","AER.AX","QVE.AX","AZJ.AX","ASP.AX","IDX.AX","ST1.AX","GPR.AX","GEV.AX","BAP.AX","GGE.AX","LSF.AX","SUL.AX","EXL.AX","ABV.AX","MNB.AX","LKE.AX","LRS.AX","CRO.AX","GLA.AX","DDD.AX","CDM.AX","MEC.AX","TWD.AX","SXA.AX","EOL.AX","RFG.AX","M7T.AX","SXY.AX","GTN.AX","NHF.AX","SIG.AX","OCA.AX","TYM.AX","TIE.AX","EGN.AX","MSV.AX","EQE.AX","CZR.AX","NTO.AX","FFL.AX","APD.AX","IME.AX","CIE.AX","MEI.AX","OAR.AX","ICI.AX","BRN.AX","SBR.AX","AUZ.AX","IXR.AX","BAF.AX","ERD.AX","KMD.AX","NHC.AX","ECF.AX","MEL.AX","HVN.AX","SKT.AX","FYI.AX","MCR.AX","WFL.AX","DGO.AX","SPZ.AX","CUP.AX","IRE.AX","MYS.AX","CM8.AX","TFL.AX","RYD.AX","DEG.AX","CWL.AX","AJQ.AX","AKG.AX","CVV.AX","CYG.AX","BFG.AX","IFL.AX","AVC.AX","WTC.AX","BWR.AX","KIN.AX","EXR.AX","IGO.AX","SVW.AX","SNZ.AX","RMY.AX","CCG.AX","EYE.AX","LOM.AX","1AG.AX","MTO.AX","GWR.AX","BSE.AX","GMG.AX","SUP.AX","AVH.AX","BGT.AX","CBY.AX""];


  return (
    
      <div className="App">
        
        <div className="user-container">
        <AccordionApp 
          tracker={props.Symbol} 
          name={userData.longName} 
          currency={userData.currency} 
          industry={userData.industry} 
          sector={userData.sector} 
          description={userData.longBusinessSummary} 
          />

        </div>
      </div>
    
  );
}

export default Sharesdisplay;