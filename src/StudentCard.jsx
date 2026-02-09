import React from "react";

/* The StudentCard component will take in props to customize the user interface. 
   The state of the StudentCard component changes what appears on the screen 
   when a button is clicked. */

// props contain all the data passed into the StudentCard component 
function StudentCard(props) {

  // Destructure props for the purpose of using the values directly
  const { name, major, year, bio, imageUrl } = props;

  // Create showBio state with a default value of false
  // The setShowBio function will update the state
  // useState(false) will hide the bio when the component is ran 
  const [showBio, setShowBio] = React.useState(false);

  // The following function flips the value of showBio
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    <div
      style={{
        maxWidth: '350px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}
    >

      {/* The imageUrl is passed in through props */}
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '12px'
        }}
      />

      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>

      {/* Run the toggleBio function when clicked */}
      <button
        onClick={toggleBio}
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          fontSize: '14px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: 'white'
        }}
      >
        {/* Changes the button text */}
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>

      {/* Only render the bio if showBio is true */}
      {showBio && (
        <p style={{ marginTop: '16px', fontSize: '14px' }}>
          {bio}
        </p>
      )}
    </div>
  );
}

export default StudentCard;