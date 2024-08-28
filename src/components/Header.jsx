import React from "react";

function Header() {
  return (
    <header>
      <div className="header_namespace">
        <i className='nf nf-seti-plan' />
        <h1>TraQ</h1>
      </div>

      <div className="searchBox">
        <form>
          <input type="text" placeholder="Search"/>
          <button type="submit" name="submit">
            <i className='nf nf-fa-search'/>
          </button>
        </form>
      </div>

      <div className="userBox">
        <a>
          <i className='nf nf-fa-refresh'/>
        </a>
        <a>
          <i className='nf nf-md-view_list'/>
        </a>
        <a>
          <i className='nf nf-fa-user_astronaut'/>
        </a>
      </div>
    </header>
  );
}

export default Header;

