
import { Avatar } from "@material-ui/core";
import React, { Fragment , useState} from "react";


import { Link } from "react-router-dom";

const ArchivePost = ({archive}) => {
    return (
       <Fragment>
            <div className = "ArchivePost" >
     
     <div className="post__info">
       <Avatar style={{ height: '2.7vw', width: '2.7vw' }} />
       <h4>name</h4>
       <h4>{archive.companyName}</h4>
       <p>{String(archive.createdAt).substr(0, 10)}</p>
     </div>
     <div className="post__body">
     <Link className = "post" to={`/question/${archive._id}`} >
         <p className="question-text">{archive.description}</p>
         <small>{archive.numOfArchive} archive</small>
         </Link>

       </div>
       </div>
       </Fragment>
    )
}

export default ArchivePost
