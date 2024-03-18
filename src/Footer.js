import React from 'react';

const Footer = () => {
  const footerStyles = {
    backgroundColor: '#f8f9fa', // Light gray background
    color: '#000',
    padding: '40px', // Padding on all sides
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    borderTop: '4px solid #000', // Stronger black border on top
  };

  const contactStyles = {
    marginBottom: '30px', // Spacing below contact section
  };

  const contactInfoStyles = {
    marginBottom: '20px', // Spacing between contact info and message box
    padding: '20px',
    borderRadius: '10px', // Rounded corners for contact info box
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    background: '#fff',
    maxWidth: '400px', // Limit width for better readability
    margin: '0 auto', // Center contact info box
  };

  const messageBoxStyles = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px', // Rounded corners for message box
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    marginBottom: '30px', // Adjusted margin for better spacing
    maxWidth: '400px', // Limit width for better readability
    margin: '0 auto', // Center message box
  };

  const inputStyles = {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    width: '100%',
    border: '1px solid #ccc', // Add border for input fields
  };

  const sendButtonStyles = {
    background: 'linear-gradient(to right, #ff69b4, #8a2be2)', // Gradient background for button
    color: '#fff',
    padding: '12px 30px', // Increased padding for better clickability
    border: 'none',
    borderRadius: '5px', // Rounded corners for button
    cursor: 'pointer',
    marginTop: '20px', // Adjusted margin for better spacing
    transition: 'background 0.3s',
    fontWeight: 'bold', // Bold text for emphasis
  };

  const logoStyles = {
    maxWidth: '200px', // Reduced size for better fit
    maxHeight: '100px', // Adjusted height for better proportion
    margin: '20px auto', // Center logo
    display: 'block', // Center logo with margin auto
  };

  return (
    <footer style={footerStyles}>
      <div style={contactStyles}>
        <h3>Contact Us</h3>
        <div style={contactInfoStyles}>
          <p>Company: PSK Traders</p>
          <p>Owner: R. Mohankumar</p>
          <p>Qualification: B.Com</p>
          <p>Phone: 9080168896, 7010271208</p>
          <p>Email: psktradersnkl@gmail.com</p>
        </div>
      </div>

      <div style={messageBoxStyles}>
        <h3>Send us a message</h3>
        <input type="text" placeholder="From" style={inputStyles} />
        <input type="text" placeholder="Subject" style={inputStyles} />
        <textarea placeholder="Your message" style={{ ...inputStyles, height: '100px' }}></textarea>
        <button style={sendButtonStyles}>Send</button>
      </div>

      <img src="./logo.png" alt="Company Logo" style={logoStyles} />
      <p style={{ maxWidth: '600px', margin: '20px auto 0', lineHeight: '1.6' }}>
        PSK Traders is a company that specializes in selling poultry food raw materials. Founded by R. Mohankumar in 2003 in Namakkal, the company is committed to providing high-quality products for the poultry industry.
      </p>
    </footer>
  );
};

export default Footer;
