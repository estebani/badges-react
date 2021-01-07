import React from 'react';
import confLogo from '../images/badge-header.svg'
import '../components/styles/Badge.css'


class Badge extends React.Component {
  render() {
    return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt='' />
      </div>
    

      <div className="Badge__section-name">
        <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt='logo conferencia' />
        <h1>Esteban <br/></h1>
      </div>

      <div className="Badge__section-info"> 
        <p>Frontend Engineer</p>
        <p>@esteban</p>
      </div>
    </div>
    );
  }
};

export default Badge;