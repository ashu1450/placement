import React, { Fragment,useEffect,useState } from 'react'
import { getArchive, clearErrors } from "../../../actions/archiveActions";
import { useSelector, useDispatch } from "react-redux";
 import Loader from "../../Layout/Loader/Loader";
 import ArchivePost from './ArchivePost';
 import { useAlert } from "react-alert";

export default function Archives() {
  const alert = useAlert();
  const dispatch = useDispatch();


  const { loading, error, archives } = useSelector((state) => state.archives);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getArchive());
  }, [dispatch,error,alert]);
    return (

       <Fragment>
            {loading ? ( <Loader/> ) : (
        <Fragment>
           <div className="feed">
           
            {archives && archives.map(archive => (
                    <ArchivePost archive={archive} />
                ))}
          </div>
        </Fragment>
        )}
       </Fragment>
    )
}
