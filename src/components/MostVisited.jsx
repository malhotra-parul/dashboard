import React from 'react';
import MyLine from './MyLine';
import LaunchIcon from "@material-ui/icons/Launch";

function MostVisited() {
    const borderColor = "#2984c5";
    const backgroundColor = "rgba(151,187,205,0.2)";
    const color = { borderColor, backgroundColor };
    const height = "50px";
    const width = "100px";

    const style = { fontWeight: "700", color: "#5f5b66", fontSize: "14px", display: "flex", justifyContent: "space-between", alignContent: "center" };
    const colorStyle = { color: "#5f5b66", fontWeight: "600", fontSize: "13px", padding: "16px 0" };
    const tableData = { fontWeight: "600", color: "#5f5b66" };

    return (
        <div className="most-visited">
            <header className="most-visited-header">
                <span style={{filter: 'drop-shadow(0 0 0.25rem #eeeae9)', color: "#535457"}}>Most Visited Pages</span>
            </header>
            <div className="most-visited-table">
                <span style={colorStyle}><strong>PAGE NAME</strong></span>
                <span style={colorStyle}><strong>VISITORS</strong></span>
                <span style={colorStyle}><strong>UNIQUE PAGE VISITS</strong></span>
                <span style={colorStyle}><strong>BOUNCE RATE</strong></span>
                <span></span>
                <span style={style}>/store <LaunchIcon fontSize="medium"/></span>
                <span style={style}>4,890</span>
                <span style={style}>3,985</span>
                <span style={style}>81.56%</span>
                <span><MyLine color={color} height={height} width={width} /></span>
                <span style={style}>/store/symbols-styleguides <LaunchIcon fontSize="medium"/></span>
                <span style={style}>3,785</span>
                <span style={style}>3,182</span>
                <span style={style}>62.56%</span>
                <span><MyLine color={color} height={height} width={width} /></span>
                <span style={style}>/store/dashboard-ui-kit <LaunchIcon fontSize="medium"/></span>
                <span style={style}>2,985</span>
                <span style={style}>2,115</span>
                <span style={style}>58.76%</span>
                <span><MyLine color={color} height={height} width={width} /></span>
                <span style={style}>/store/webflow-cards.html <LaunchIcon fontSize="medium"/></span>
                <span style={style}>2,440</span>
                <span style={style}>1,789</span>
                <span style={style}>39.59%</span>
                <span><MyLine color={color} height={height} width={width} /></span>
            </div>
        </div>
    )
}

export default MostVisited
