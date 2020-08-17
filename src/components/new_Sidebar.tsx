// @ts-nocheck
import React, { useEffect , useState} from "react";

const Sidebar: React.FC = (props) => {

return (
  <div className="sidebar-container">
    <div>
      <div className="sidebar-title">
        INDEX
      </div>
      <div>
        {props.eligibleNationalPrograms.concat(props.eligibleStatePrograms).map(program => 
          <div className="sidebar-item"><a href={`#${program.id}`}>{program.name}</a></div>
        )}
      </div>
    </div>
  </div>
)}

export default Sidebar;