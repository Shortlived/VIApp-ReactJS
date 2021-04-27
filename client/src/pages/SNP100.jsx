import Sharesdisplay from "../components/Sharesdisplay";

import "../styles.css";

export default function SNP100() {

    const Symbols = ["AAPL","ABBV","ABT","ACN","ADBE","AIG","AMGN","AMT","AMZN","AVGO","AXP","BA","BAC","BIIB","BK","BKNG","BLK","BMY","BRK.B","C","CAT","CHTR","CL","CMCSA","COF","COP","COST","CRM","CSCO","CVS","CVX","DD","DHR","DIS","DOW","DUK","EMR","EXC","F","FB","FDX","GD","GE","GILD","GM","GOOG","GOOGL","GS","HD","HON","IBM","INTC","JNJ","JPM","KHC","KO","LIN","LLY","LMT","LOW","MA","MCD","MDLZ","MDT","MET","MMM","MO","MRK","MS","MSFT","NEE","NFLX","NKE","NVDA","ORCL","PEP","PFE","PG","PM","PYPL","QCOM","RTX","SBUX","SO","SPG","T","TGT","TMO","TMUS","TSLA","TXN","UNH","UNP","UPS","USB","V","VZ","WBA","WFC","WMT","XOM"];
    
    return (
      <div>
        {Symbols.map((Symbol) => <Sharesdisplay Symbol={Symbol} />)}
      </div>
    );
}




