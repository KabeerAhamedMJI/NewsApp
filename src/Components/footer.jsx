import React from 'react';


function Footer(props) {
    
    return (
<footer className="text-center text-lg-start" style={{ backgroundColor: "#3778c2" }}>
  <div className="container d-flex justify-content-center py-3">
  <button
  type="button"
  className="btn btn-primary btn-sm btn-floating mx-2"
  style={{ backgroundColor: "white", border: "none", color: "#3778c2", padding: "5px 10px", fontSize: "12px" }}
>
  <i className="fab fa-facebook-f"></i>
</button>
<button
  type="button"
  className="btn btn-primary btn-sm btn-floating mx-2"
  style={{ backgroundColor: "white", border: "none", color: "#3778c2", padding: "5px 10px", fontSize: "12px" }}
>
  <i className="fab fa-youtube"></i>
</button>
<button
  type="button"
  className="btn btn-primary btn-sm btn-floating mx-2"
  style={{ backgroundColor: "white", border: "none", color: "#3778c2", padding: "5px 10px", fontSize: "12px" }}
>
  <i className="fab fa-instagram"></i>
</button>
<button
  type="button"
  className="btn btn-primary btn-sm btn-floating mx-2"
  style={{ backgroundColor: "white", border: "none", color: "#3778c2", padding: "5px 10px", fontSize: "12px" }}
>
  <i className="fab fa-twitter"></i>
</button>

  </div>
  <div
    className="text-center text-black p-1.5"
    style={{ backgroundColor: "transparent"  }}
  >
    © 2024 Copyright:
    <a className="text-black" href="#" style={{ textDecoration: "none", marginLeft: '5px' }}> 
      NewsToday.com
    </a>
  </div>
</footer>



    );
}

export default Footer;