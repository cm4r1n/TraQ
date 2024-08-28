import React from "react";

function SideBar() {
  return(
    <div className='sidebar'>
      <a className='sb-link'>
        <i className='nf nf-md-lightning_bolt' />
        <p className="sb-option">New note</p>
      </a>
      <a className='sb-link'>
        <i className='nf nf-md-bell' />
        <p className="sb-option">Notifications</p>
      </a>
      <a className='sb-link'>
        <i className='nf nf-md-lead_pencil' />
        <p className="sb-option">Modify</p>
      </a>
      <a className='sb-link'>
        <i className='nf nf-md-delete' />
        <p className="sb-option">Delete</p>
      </a>
      <a className='sb-link'>
        <i className='nf nf-md-archive_check' />
        <p className="sb-option">Archive</p>
      </a>
      <a className='sb-link'>
        <i className='nf nf-md-notebook' />
        <p className="sb-option">Add to book</p>
      </a>
    </div>
  );
}

export default SideBar;
