import React from 'react'
function date() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
     return   dateTime;
}
const Footer = () => {
  

  return (
    <div className="footer">
      <h2>This is footer page</h2>
      <div className="row">
        <h3>FIESTA</h3>
        <ul>
            <li>Holiday</li>
            <li>Country</li>
        </ul>    {date()}
        <ul className="socical-links" >
            <li>Instagram</li>
            <li>Telegram</li>
            <li>Facebook</li>
            <li>Hi</li>
        </ul>

      </div>

    </div>
  );
};

export default Footer;
