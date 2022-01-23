import React from 'react';
import './EnergyMgt.css';



function EnergyMgt() {
    return (
        <div 
         className="energymgt" 
         style={{ background: `url('${process.env.PUBLIC_URL}/bckgrnd.jpg')` }}
        >
        <h1>What is <span>Vootu Energy Management</span>?</h1>
        <p>Energy Management is a scientifically proven process of controlling and reducing all energy consumption. Therefore it lowers operating costs and improves long-term energy performance, driving down expenses. Reduced electricity usage lowers your carbon footprint and helps combat climate change. In addition, this showcases a strong commitment towards a cleaner environment for all to enjoy.</p>
            
        <p>Vootus standardized assessment procedure: <span> 6 Steps to Lower Energy Costs</span>  </p> 
        <ul>
            <li>Install E-TRAQ, Vootu&rsquo;s proprietary real-time energy monitoring system, collect and record all energy data including consumption over an initial 30 day period. </li>
            <li>Verify each electrical systems&rsquo; performance, efficiency, and overall health, while collecting initial energy data to establish a comprehensive baseline.</li>
            <li>Audit electrical equipment to identify specific opportunities to improve energy consumption and also develop a holistic energy-saving program.</li>
            <li>Each area of inefficiency is then optimized and upgraded using vootu technology to improve individual energy performance. </li>
            <li>E-TRAQ continues to display all progress and verifies improvements, therefore making savings transparent at all times.</li>
            <li>E-TRAQ records and displays real-time energy data via our cloud-based energy dashboard. Now you have complete insight, awareness, and control of your current and future energy costs.</li>
        </ul> 

        <p><span>Vootu&rsquo;s energy management services are always data-driven, using real-time energy data supplied by E-TRAQ </span>. &nbsp; Anything less involves guesswork and unnecessary risk!</p> 
    </div>

      );
}
 
export default EnergyMgt;