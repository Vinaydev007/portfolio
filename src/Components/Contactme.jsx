import React from 'react'

function Contactme() {
  return (
    <div style={{
      background: "black",
      width: "100%",
      minHeight: "100vh",
      color: "white",
      padding: "40px"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Contact Me
      </h1>

      <div style={{
        display: "flex",
        gap: "40px",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "900px",
        margin: "0 auto"
      }}>

        {/* Contact Info */}
        <div style={{ minWidth: "250px" }}>
          <h2>Contact Information</h2>
          <p>📞 +91 6300409591</p>
          <p>✉️ vinaybairavarapu@gmail.com</p>
          <p>📍 Hyderabad</p>
        </div>

        {/* Contact Form */}
        <form style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          minWidth: "280px"
        }}>
          <input style={inputStyle} type="text" placeholder="Name" />
          <input style={inputStyle} type="email" placeholder="Email" />
          <input style={inputStyle} type="tel" placeholder="Mobile Number" />
          <textarea style={inputStyle} rows="4" placeholder="Message"></textarea>

          <button>Send Message</button>
        </form>

      </div>
    </div>
  )
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid red",
  background: "transparent",
  color: "white",
  outline: "none"
}

const buttonStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "orange",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer"
}

export default Contactme
