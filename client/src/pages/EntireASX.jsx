import React, { useState } from "react";
import ShareSort from "../components/SharesSort";

import "../styles.css";

export default function ASX100() {
    const [sortBy, setSortBy] = useState('none');
    const [shares, setShares] = useState(<div className="spinner">Select an indicator above...  </div>)
    
    const Symbols = [
    "CAT.AX","GXY.AX","HUO.AX","APZ.AX","CAJ.AX","BWX.AX","HUB.AX","COE.AX","DNA.AX","APX.AX","IGO.AX","ICQ.AX","FNP.AX","CDD.AX","GTN.AX","IGL.AX","CLV.AX","CDA.AX","AGG.AX","A2M.AX","ALL.AX","AVG.AX","AQZ.AX","EGH.AX","AGI.AX","IDX.AX","ELD.AX","CWY.AX","IEL.AX","ALU.AX","HSN.AX","CGC.AX","IFM.AX","HTA.AX","HLO.AX","CL1.AX","BPT.AX","DHG.AX","ALQ.AX","CWP.AX","DMP.AX","CSL.AX","AMI.AX","CAA.AX","BRG.AX","FPH.AX","APA.AX","GUD.AX","DTL.AX","BGA.AX","AX1.AX","BKL.AX","BAP.AX","ATL.AX","CPU.AX","GDI.AX","EQT.AX","COH.AX","FWD.AX","EVN.AX","CAR.AX","AIA.AX","CCP.AX","BLX.AX","ASB.AX","ARB.AX","CGF.AX","EHE.AX","AFG.AX","BLD.AX","GMG.AX","ACR.AX","FLT.AX","ANZ.AX","GEM.AX","ADH.AX","IFL.AX","AMC.AX","CWN.AX","GNE.AX","CKF.AX","ANN.AX","EGG.AX","BHP.AX","CHC.AX","APE.AX","API.AX","EVT.AX","CBA.AX","CVW.AX","GRR.AX","BCI.AX","IAG.AX","HT1.AX","BXB.AX","AVN.AX","CNI.AX","CLH.AX","CDP.AX","HLS.AX","AAC.AX","CIM.AX","GPT.AX","ASX.AX","DXS.AX","AWC.AX","ABC.AX","ABA.AX","BBN.AX","GOZ.AX","AOF.AX","BEN.AX","CQR.AX","AGL.AX","DOW.AX","ALK.AX","ABP.AX","BWP.AX","BSL.AX","HVN.AX","AUB.AX","CCL.AX","CMW.AX","FBU.AX","CIP.AX","CTD.AX","FUN.AX","ADR.AX","BFC.AX","ASH.AX","AMA.AX","CM8.AX","AJQ.AX","EAX.AX","DME.AX","ARF.AX","BSA.AX","HCH.AX","CMP.AX","BNL.AX","IBG.AX","DTI.AX","DCC.AX","BSE.AX","AJX.AX","HGO.AX","HFR.AX","GOR.AX","GNG.AX","FTZ.AX","FSA.AX","FLN.AX","FID.AX",
    "FDV.AX","ERA.AX","EML.AX","DNK.AX","DCN.AX","CUE.AX","CGS.AX","CCV.AX","CAF.AX","BYE.AX","BNO.AX","BLG.AX","BKY.AX","AVH.AX","ATU.AX","ANR.AX","AHF.AX","AEE.AX","AHX.AX","AJM.AX","DVL.AX","CCA.AX","APD.AX","BVS.AX","FFI.AX","HRN.AX","EPD.AX","CLX.AX","DDR.AX","GCY.AX","CLW.AX","ENN.AX","BGL.AX","ERF.AX","CYP.AX","FRM.AX","ASG.AX","FTT.AX","GWA.AX","BOQ.AX","GDF.AX","ECX.AX","ANG.AX","AIZ.AX","AZJ.AX","AVJ.AX","AST.AX","HZN.AX","AHY.AX","HIL.AX","FMG.AX","GNC.AX","BKW.AX","CNU.AX","GMA.AX","CSR.AX","AMP.AX","DCG.AX","ALX.AX","EHL.AX","BLY.AX","IGN.AX","IGE.AX","IEC.AX","IDZ.AX","IDA.AX","IDT.AX","ICT.AX","ICN.AX","IBC.AX","HYD.AX","HXG.AX","HWK.AX","HSC.AX","HRR.AX","HRL.AX","HPR.AX","HMX.AX","HLA.AX","HIT.AX","HHM.AX","HGM.AX","HE8.AX","HAW.AX","HAS.AX","HAV.AX","GUL.AX","GTG.AX","GRV.AX","GOW.AX","GNX.AX","GMR.AX","GME.AX","GLL.AX","GLA.AX","GIB.AX","GGG.AX","GFL.AX","GDG.AX","GCR.AX","GBE.AX","GAP.AX","GAL.AX","G1A.AX","FZO.AX","FSG.AX","FRI.AX","FPL.AX","FOD.AX","FMS.AX","FML.AX","FLC.AX","FGX.AX","FGR.AX","FGO.AX","FEX.AX","FDM.AX","FCT.AX","FAR.AX","EXR.AX","EXP.AX","EXL.AX","EWC.AX","EVZ.AX","EVS.AX","EVE.AX","ERM.AX","EQX.AX","ENR.AX","EMR.AX","EMP.AX","EM1.AX","EGN.AX","EEG.AX","EDE.AX","ECT.AX","EAS.AX","DYL.AX","DXN.AX","DUI.AX","DW8.AX","DVN.AX","DTZ.AX","DTM.AX","DRX.AX","DKM.AX","DGH.AX","DEV.AX","D2O.AX","CZN.AX","CYG.AX","CYC.AX","CXX.AX",
    //"CXO.AX","CXL.AX","CVV.AX","CVN.AX","CV1.AX","CUV.AX","CUP.AX","CUL.AX","CTP.AX","CTM.AX","CT1.AX","CSS.AX","CSE.AX","CRN.AX","CRL.AX","CQE.AX","CPH.AX","COY.AX","COS.AX","COL.AX","COI.AX","COG.AX","COF.AX","CNW.AX","CNL.AX","CNB.AX","CMM.AX","CMD.AX","CLT.AX","CLQ.AX","CLF.AX","CLA.AX","CL8.AX","CKA.AX","CIO.AX","CIN.AX","CIA.AX","CHZ.AX","CHN.AX","CGO.AX","CGM.AX","CGA.AX","CG1.AX","CEL.AX","CE1.AX","CDY.AX","CDX.AX","CDM.AX","CCX.AX","CCG.AX","CAZ.AX","CAY.AX","CAN.AX","CAI.AX","CAG.AX","CAD.AX","BUY.AX","BUX.AX","BUB.AX","BTH.AX","BSR.AX","BSM.AX","BRU.AX","BRN.AX","BRL.AX","BRK.AX","BRI.AX","BOL.AX","BOE.AX","BMN.AX","BMG.AX","BLZ.AX","BKI.AX","BIT.AX","BIS.AX","BIN.AX","BID.AX","BFG.AX","BD1.AX","BCT.AX","BCK.AX","BCC.AX","BAT.AX","BAS.AX","BAR.AX","AZY.AX","AZS.AX","AZI.AX","AYS.AX","AWN.AX","AVE.AX","AV1.AX","AUT.AX","AUL.AX","AUI.AX","AUH.AX","AUC.AX","ATX.AX","ATR.AX","ATS.AX","ATP.AX","ASP.AX","ARU.AX","ARV.AX","ARG.AX","ARE.AX","ARD.AX","AQX.AX","AQD.AX","AQC.AX","APT.AX","APC.AX","ANP.AX","ANO.AX","ANL.AX","AMX.AX","AML.AX","AMH.AX","ALY.AX","ALT.AX","ALG.AX","AKN.AX","AKM.AX","AJL.AX","AIY.AX","AIS.AX","3DP.AX","AEV.AX","AEF.AX","AAP.AX","AC8.AX","AD8.AX","AHN.AX","AGY.AX","ADO.AX","AGS.AX","ADN.AX","AAR.AX","AEI.AX","A4N.AX","AGE.AX","AGR.AX","ADX.AX","AFR.AX","ABV.AX","ADY.AX","ADD.AX","ADA.AX","ACU.AX","ACF.AX","A2B.AX","EOS.AX","ILU.AX",
    //"IMA.AX","IMC.AX","IMD.AX","IME.AX","IMM.AX","IMPQ.AX","IMR.AX","IMS.AX","IMU.AX","INA.AX","INCM.AX","INES.AX","INF.AX","ING.AX","INIF.AX","INP.AX","INR.AX","INV.AX","IOD.AX","IOO.AX","IOZ.AX","IP1.AX","IPB.AX","IPC.AX","IPD.AX","IPH.AX","IPL.AX","IPT.AX","IQ3.AX","IRD.AX","IRE.AX","IRI.AX","IS3.AX","ISD.AX","ISEC.AX","ISO.AX","ISU.AX","ISX.AX","ITG.AX","IVC.AX","IVE.AX","IVO.AX","IVQ.AX","IVR.AX","IVT.AX","IVV.AX","IVX.AX","IVZ.AX","IWLD.AX","IXC.AX","IXI.AX","IXJ.AX","IXR.AX","IXU.AX","IZZ.AX",
    //"JAL.AX","JAN.AX","JAT.AX","JAY.AX","JBH.AX","JCI.AX","JCS.AX","JDR.AX","JHC.AX","JHG.AX","JHL.AX","JHX.AX","JIN.AX","JIP.AX","JJF.AX","JKA.AX","JLG.AX","JMS.AX","JPR.AX","JRL.AX","JRV.AX","JXT.AX","JYC.AX",
    //"K2F.AX","KAI.AX","KAM.AX","KAR.AX","KAS.AX","KAT.AX","KAU.AX","KBC.AX","KCN.AX","KEY.AX","KFE.AX","KGD.AX","KGL.AX","KGM.AX","KGN.AX","KIN.AX","KIS.AX","KKC.AX","KKL.AX","KKO.AX","KLA.AX","KLL.AX","KLO.AX","KLR.AX","KMD.AX","KME.AX","KMT.AX","KNH.AX","KNM.AX","KNO.AX","KOR.AX","KOV.AX","KP2.AX","KPC.AX","KPE.AX","KPG.AX","KPO.AX","KPT.AX","KRM.AX","KRR.AX","KRS.AX","KSC.AX","KSL.AX","KSM.AX","KSN.AX","KSS.AX","KTA.AX","KTD.AX","KTE.AX","KTG.AX","KWR.AX","KYK.AX","KZA.AX","KZR.AX",
    //"LAA.AX","LAM.AX","LAU.AX","LAW.AX","LBL.AX","LBT.AX","LCD.AX","LCE.AX","LCK.AX","LCL.AX","LCM.AX","LCT.AX","LCY.AX","LEG.AX","LEP.AX","LER.AX","LEX.AX","LGP.AX","LGR.AX","LHB.AX","LHM.AX","LI3.AX","LIC.AX","LIN.AX","LIO.AX","LIT.AX","LKE.AX","LKO.AX","LLC.AX","LLO.AX","LME.AX","LMG.AX","LML.AX","LNG.AX","LNK.AX","LNU.AX","LNY.AX","LOM.AX","LON.AX","LOT.AX","LOV.AX","LPD.AX","LPDRC.AX","LPE.AX","LPI.AX","LRM.AX","LRS.AX","LRT.AX","LSA.AX","LSF.AX","LSH.AX","LSR.AX","LSX.AX","LTR.AX","LVE.AX","LVH.AX","LVT.AX","LYC.AX","LYL.AX",
    //"M7T.AX","M8S.AX","MA1.AX","MAD.AX","MAG.AX","MAH.AX","MAI.AX","MAM.AX","MAN.AX","MAQ.AX","MAT.AX","MAU.AX","MAUCA.AX","MAX.AX","MAY.AX","MBK.AX","MBM.AX","MCA.AX","MCB.AX","MCE.AX","MCM.AX","MCP.AX","MCR.AX","MCT.AX","MCX.AX","MCY.AX","MDC.AX","MDI.AX","MDR.AX","MDX.AX","MEA.AX","MEB.AX","MEC.AX","MEI.AX","MEL.AX","MEM.AX","MEP.AX","MEQ.AX","MEU.AX","MEY.AX","MEZ.AX","MFD.AX","MFF.AX","MFG.AX","MGC.AX","MGE.AX","MGG.AX","MGL.AX","MGR.AX","MGT.AX","MGU.AX","MGV.AX","MGX.AX","MGZ.AX","MHC.AX","MHD.AX","MHG.AX","MHH.AX","MHI.AX","MHJ.AX","MICH.AX","MIH.AX","MIL.AX","MIN.AX","MIO.AX","MIR.AX","MJC.AX","MKG.AX","MLD.AX","MLL.AX","MLM.AX","MLS.AX","MLT.AX","MLX.AX","MME.AX","MMI.AX","MMJ.AX","MML.AX","MMM.AX","MMR.AX","MMS.AX","MNB.AX","MND.AX","MNF.AX","MNRS.AX","MNS.AX","MNW.AX","MNY.AX","MOAT.AX","MOB.AX","MOC.AX","MOE.AX","MOGL.AX","MOH.AX","MONY.AX","MOQ.AX","MOT.AX","MOY.AX","MOZ.AX","MP1.AX","MPH.AX","MPL.AX","MPO.AX","MPP.AX","MPR.AX","MPW.AX","MPX.AX","MQG.AX","MQR.AX","MRC.AX","MRD.AX","MRG.AX","MRL.AX","MRM.AX","MRQ.AX","MRR.AX","MRV.AX","MRZ.AX","MSB.AX","MSE.AX","MSG.AX","MSI.AX","MSM.AX","MSR.AX","MSTR.AX","MSV.AX","MTB.AX","MTC.AX","MTH.AX","MTL.AX","MTO.AX","MTS.AX","MVA.AX","MVB.AX","MVE.AX","MVF.AX","MVOL.AX","MVP.AX","MVR.AX","MVS.AX","MVW.AX","MWR.AX","MWY.AX","MX1.AX","MXC.AX","MXI.AX","MXR.AX","MXT.AX","MYE.AX","MYL.AX","MYQ.AX","MYR.AX","MYS.AX","MYX.AX","MZI.AX","MZZ.AX",
    //"N1H.AX","NAB.AX","NAC.AX","NAE.AX","NAG.AX","NAM.AX","NAN.AX","NBI.AX","NC6.AX","NCC.AX","NCK.AX","NCL.AX","NCM.AX","NCR.AX","NCZ.AX","NDIA.AX","NDQ.AX","NEA.AX","NEC.AX","NES.AX","NET.AX","NEU.AX","NEW.AX","NGE.AX","NGI.AX","NGY.AX","NHC.AX","NHF.AX","NIC.AX","NIU.AX","NME.AX","NML.AX","NMT.AX","NNT.AX","NOR.AX","NOV.AX","NOX.AX","NSB.AX","NSC.AX","NSE.AX","NSR.AX","NST.AX","NSX.AX","NTD.AX","NTI.AX","NTL.AX","NTM.AX","NTO.AX","NTU.AX","NUC.AX","NUF.AX","NUH.AX","NUS.AX","NVA.AX","NVO.AX","NVU.AX","NVX.AX","NWC.AX","NWE.AX","NWF.AX","NWH.AX","NWL.AX","NWM.AX","NWS.AX","NWSLV.AX","NXE.AX","NXM.AX","NXS.AX","NXT.AX","NYR.AX","NZK.AX","NZM.AX","NZS.AX",
    //"OAR.AX","OAU.AX","OBJ.AX","OBL.AX","OBM.AX","OCA.AX","OCC.AX","OCL.AX","ODA.AX","ODM.AX","ODY.AX","OEC.AX","OEL.AX","OEQ.AX","OEX.AX","OFX.AX","OGA.AX","OGC.AX","OGX.AX","OIL.AX","OKJ.AX","OKR.AX","OKU.AX","OLH.AX","OLI.AX","OLL.AX","OLV.AX","OMH.AX","OML.AX","ONE.AX","ONT.AX","ONX.AX","OOK.AX","OOO.AX","OPC.AX","OPH.AX","OPL.AX","OPT.AX","OPY.AX","ORA.AX","ORE.AX","ORG.AX","ORI.AX","ORM.AX","ORN.AX","ORR.AX","OSH.AX","OSL.AX","OSP.AX","OSX.AX","OTW.AX","OVH.AX","OVN.AX","OVT.AX","OXX.AX","OZF.AX","OZG.AX","OZL.AX","OZR.AX","P2P.AX","PAA.AX","PAB.AX","PAC.AX","PAF.AX","PAI.AX","PAK.AX","PAL.AX","PAN.AX","PAR.AX","PAXX.AX","PBH.AX","PBP.AX","PBX.AX","PCG.AX","PCH.AX","PCI.AX","PCK.AX","PCL.AX","PDI.AX","PDL.AX","PDN.AX","PDZ.AX","PE1.AX","PEC.AX","PEK.AX","PEL.AX","PEN.AX","PET.AX","PEX.AX","PFG.AX","PFP.AX","PG1.AX","PGC.AX","PGF.AX","PGG.AX","PGH.AX","PGI.AX","PGL.AX","PGM.AX","PGR.AX","PGX.AX","PGY.AX","PIA.AX","PIC.AX","PIL.AX","PIN.AX","PIO.AX","PIQ.AX","PIXX.AX","PKD.AX","PKO.AX","PKS.AX","PL8.AX","PLC.AX","PLL.AX","PLS.AX","PLUS.AX","PLX.AX","PM1.AX","PM8.AX","PMC.AX","PME.AX","PMGOLD.AX","PMV.AX","PMY.AX","PNC.AX","PNI.AX","PNL.AX","PNN.AX","PNR.AX","PNV.AX","PNW.AX","PNX.AX","PO3.AX","POD.AX","POS.AX","POU.AX","POW.AX","PPC.AX","PPE.AX","PPG.AX","PPH.AX","PPK.AX","PPL.AX","PPS.AX","PPT.AX","PPY.AX","PRM.AX","PRN.AX","PRO.AX","PRT.AX","PRU.AX",
    //"PRX.AX","PRZ.AX","PSA.AX","PSC.AX","PSI.AX","PSL.AX","PSQ.AX","PSZ.AX","PTB.AX","PTL.AX","PTM.AX","PTR.AX","PTX.AX","PUA.AX","PUR.AX","PVE.AX","PVL.AX","PVS.AX","PWG.AX","PWH.AX","PWL.AX","PWN.AX","PWNCA.AX","PXS.AX","PXX.AX","PYC.AX","PYG.AX","QAG.AX","QAN.AX","QAU.AX","QBE.AX","QCB.AX","QEM.AX","QFE.AX","QFN.AX","QFY.AX","QGL.AX","QHAL.AX","QHL.AX","QIP.AX","QLTY.AX","QMIX.AX","QOZ.AX","QPON.AX","QPR.AX","QRE.AX","QRI.AX","QSS.AX","QTG.AX","QTM.AX","QUAL.AX","QUB.AX","QUE.AX","QUS.AX","QVE.AX","R3D.AX","RAC.AX","RAG.AX","RAN.AX","RAP.AX","RARI.AX","RBD.AX","RBL.AX","RBR.AX","RBTZ.AX","RBX.AX","RCB.AX","RCE.AX","RCL.AX","RCP.AX","RCT.AX","RCW.AX","RD1.AX","RDC.AX","RDF.AX","RDG.AX","RDH.AX","RDM.AX","RDN.AX","RDS.AX","RDV.AX","RDY.AX","RE1.AX","REA.AX","RED.AX","REE.AX","REF.AX","REG.AX","REH.AX","REIT.AX","RENT.AX","RES.AX","REV.AX","REX.AX","REY.AX","REZ.AX","RF1.AX","RFF.AX","RFG.AX","RFN.AX","RFR.AX","RFT.AX","RFX.AX","RGB.AX","RGI.AX","RGL.AX","RGS.AX","RHC.AX","RHI.AX","RHP.AX","RHT.AX","RHY.AX","RIC.AX","RIE.AX","RIM.AX","RINC.AX","RIO.AX","RKN.AX","RLC.AX","RLE.AX","RLG.AX","RLT.AX","RMC.AX","RMD.AX","RMG.AX","RMI.AX","RML.AX","RMP.AX","RMS.AX","RMT.AX","RMX.AX","RMY.AX","RND.AX","RNE.AX","RNO.AX","RNT.AX","RNU.AX","RNX.AX","RNY.AX","ROBO.AX","ROG.AX","ROO.AX","RPG.AX","RPM.AX","RRL.AX","RSG.AX","RSH.AX","RSM.AX","RTE.AX","RTG.AX","RTR.AX",
    //"RUL.AX","RVR.AX","RVS.AX","RWC.AX","RWD.AX","RXH.AX","RXL.AX","RXM.AX","RXP.AX","RYD.AX","RZI.AX","S2R.AX","S32.AX","S66.AX","SAM.AX","SAN.AX","SAR.AX","SAS.AX","SAU.AX","SAVE.AX","SBI.AX","SBM.AX","SBR.AX","SBU.AX","SBW.AX","SCG.AX","SCI.AX","SCL.AX","SCN.AX","SCP.AX","SCT.AX","SCU.AX","SDA.AX","SDF.AX","SDG.AX","SDI.AX","SDL.AX","SDV.AX","SDX.AX","SE1.AX","SEC.AX","SEI.AX","SEK.AX","SELF.AX","SEN.AX","SEQ.AX","SER.AX","SES.AX","SF1.AX","SFC.AX","SFG.AX","SFM.AX","SFR.AX","SFX.AX","SFY.AX","SGC.AX","SGF.AX","SGH.AX","SGI.AX","SGLLV.AX","SGM.AX","SGO.AX","SGP.AX","SGQ.AX","SGR.AX","SHE.AX","SHH.AX","SHJ.AX","SHK.AX","SHL.AX","SHM.AX","SHO.AX","SHV.AX","SI6.AX","SIG.AX","SIH.AX","SIL.AX","SIO.AX","SIQ.AX","SIS.AX","SIT.AX","SIV.AX","SIX.AX","SKC.AX","SKF.AX","SKI.AX","SKN.AX","SKO.AX","SKT.AX","SKY.AX","SL1.AX","SLC.AX","SLF.AX","SLK.AX","SLM.AX","SLR.AX","SLX.AX","SLZ.AX","SM1.AX","SMC.AX","SMG.AX","SMI.AX","SMLL.AX","SMN.AX","SMP.AX","SMR.AX","SMX.AX","SNC.AX","SND.AX","SNL.AX","SNS.AX","SNZ.AX","SO4.AX","SOL.AX","SOM.AX","SOP.AX","SOR.AX","SP3.AX","SPK.AX","SPL.AX","SPQ.AX","SPT.AX","SPX.AX","SPY.AX","SPZ.AX","SRG.AX","SRH.AX","SRI.AX","SRK.AX","SRN.AX","SRV.AX","SRY.AX","SRZ.AX","SSG.AX","SSL.AX","SSLPA.AX","SSM.AX","SSO.AX","SST.AX","ST1.AX","STA.AX","STC.AX","STG.AX","STM.AX","STN.AX","STO.AX","STW.AX","STX.AX","SUBD.AX","SUD.AX","SUH.AX","SUL.AX",
    "SUN.AX","SUP.AX","SVA.AX","SVD.AX","SVH.AX","SVL.AX","SVM.AX","SVS.AX","SVW.AX","SVY.AX","SW1.AX","SWF.AX","SWK.AX","SWM.AX","SWTZ.AX","SXA.AX","SXE.AX","SXL.AX","SXX.AX","SXY.AX","SYA.AX","SYD.AX","SYI.AX","SYR.AX","SYS.AX","SYT.AX","SZL.AX","T3D.AX","TAH.AX","TAM.AX","TAO.AX","TAP.AX","TAR.AX","TAS.AX","TBL.AX","TBR.AX","TCL.AX","TCN.AX","TCO.AX","TD1.AX","TDI.AX","TDL.AX","TDO.AX","TDY.AX","TECH.AX","TEG.AX","TEK.AX","TER.AX","TFL.AX","TGA.AX","TGF.AX","TGG.AX","TGH.AX","TGM.AX","TGN.AX","TGO.AX","TGP.AX","TGR.AX","THC.AX","THD.AX","THR.AX","TIA.AX","TIE.AX","TIG.AX","TIN.AX","TIP.AX","TKF.AX","TKL.AX","TKM.AX","TLG.AX","TLM.AX","TLS.AX","TLT.AX","TLX.AX","TMG.AX","TMK.AX","TML.AX","TMR.AX","TMT.AX","TMX.AX","TMZ.AX","TNE.AX","TNG.AX","TNK.AX","TNP.AX","TNR.AX","TNT.AX","TNY.AX","TOE.AX","TOM.AX","TON.AX","TOP.AX","TOT.AX","TOU.AX","TPC.AX","TPD.AX","TPM.AX","TPO.AX","TPP.AX","TPS.AX","TPW.AX","TRA.AX","TRL.AX","TRM.AX","TRS.AX","TRT.AX","TRY.AX","TSC.AX","TSL.AX","TSO.AX","TTA.AX","TTB.AX","TTI.AX","TTL.AX","TTM.AX","TTT.AX","TV2.AX","TWD.AX","TWE.AX","TWR.AX","TYM.AX","TYR.AX","TYX.AX","TZL.AX","TZN.AX","UBA.AX","UBE.AX","UBI.AX","UBJ.AX","UBN.AX","UBP.AX","UBU.AX","UBW.AX","UCM.AX","UCW.AX","UMAX.AX","UMG.AX","UNL.AX","UNV.AX","UOS.AX","URF.AX","URW.AX","USD.AX","UTR.AX","UUL.AX","UUV.AX","UWL.AX","VACF.AX","VAE.AX","VAF.AX","VAH.AX","VAL.AX",
    "VAN.AX","VAP.AX","VAR.AX","VAS.AX","VBLD.AX","VBND.AX","VBS.AX","VCF.AX","VCX.AX","VDBA.AX","VDCO.AX","VDGR.AX","VDHG.AX","VEA.AX","VEC.AX","VEE.AX","VEFI.AX","VEN.AX","VEQ.AX","VESG.AX","VEU.AX","VG1.AX","VG8.AX","VGAD.AX","VGB.AX","VGE.AX","VGI.AX","VGL.AX","VGMF.AX","VGS.AX","VHT.AX","VHY.AX","VIA.AX","VIC.AX","VIF.AX","VIG.AX","VII.AX","VIP.AX","VISM.AX","VIV.AX","VKA.AX","VLC.AX","VLS.AX","VLT.AX","VMC.AX","VMG.AX","VMIN.AX","VML.AX","VMS.AX","VMT.AX","VMX.AX","VMY.AX","VN8.AX","VOC.AX","VOL.AX","VOR.AX","VP7.AX","VPC.AX","VPR.AX","VR1.AX","VR8.AX","VRC.AX","VRL.AX","VRS.AX","VRT.AX","VRX.AX","VSO.AX","VTG.AX","VTH.AX","VTI.AX","VTS.AX","VUK.AX","VUL.AX","VVA.AX","VVLU.AX","VVR.AX","VXR.AX","VYS.AX","WAA.AX","WAF.AX","WAM.AX","WAT.AX","WAX.AX","WBC.AX","WBE.AX","WBT.AX","WCMQ.AX","WCN.AX","WDIV.AX","WDMF.AX","WEB.AX","WEC.AX","WEL.AX","WEMG.AX","WES.AX","WFE.AX","WGB.AX","WGN.AX","WGO.AX","WGX.AX","WHA.AX","WHC.AX","WHF.AX","WHFPA.AX","WHK.AX","WIC.AX","WJA.AX","WKT.AX","WLC.AX","WLD.AX","WLE.AX","WLF.AX","WMI.AX","WML.AX","WNB.AX","WND.AX","WNR.AX","WNS.AX","WOA.AX","WOR.AX","WOW.AX","WPL.AX","WPP.AX","WQG.AX","WRLD.AX","WRM.AX","WSA.AX","WSI.AX","WSP.AX","WTC.AX","WTL.AX","WVOL.AX","WWG.AX","WWI.AX","WXHG.AX","WXOZ.AX","WZR.AX","XAM.AX","XARO.AX","XCD.AX","XF1.AX","XPD.AX","XPE.AX","XPL.AX","XRF.AX","XRO.AX","XST.AX","XTC.AX","XTD.AX","XTE.AX",
    "YAL.AX","YANK.AX","YBR.AX","YMAX.AX","YOJ.AX","YOW.AX","YPB.AX","YRL.AX","Z1P.AX","Z3RO.AX","ZEL.AX","ZEN.AX","ZER.AX","ZEU.AX","ZGL.AX","ZIM.AX","ZIP.AX","ZLD.AX","ZMI.AX","ZMICA.AX","ZNC.AX","ZNO.AX","ZUSD.AX","ZYAU.AX","ZYB.AX","ZYUS"
    ]

    const handleChange = event => {
        setSortBy(event.target.value);
        setShares(<ShareSort Symbols={Symbols} />)
    };

    return (
        <div>
        <select name="sort" id="sortables" onChange={handleChange} >
            <option value="none"></option>
            <option value="fair price">Price Ratio (Fair/Current)</option>
            <option value="stock price">Current Stock Price</option>
        </select>
        <div>
            {shares}
        </div>
        </div>
    );
}