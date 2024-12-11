
import './App.css';
import React from "react";
import Name from "./components/name";
import Price from "./components/price";
import Description from "./components/description";
import Image from "./components/image";
import product from "./product"
import { Card, Button } from "react-bootstrap";
import userImage from './img/imag.jpg'; // Import the image
function App() {
  const userName = "bechir"; // Remplacez par votre prénom ou laissez vide
  const greeting = userName ? `Bonjour  ${userName}` : 'Bonjour !';

  const cardStyles = {
    background: "linear-gradient(135deg, #74ebd5, #9face6)",
    color: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const greetingStyles = {
    textAlign: "center",
    marginTop: "20px",
    color: "#6c63ff",
    fontWeight: "bold",
    fontSize: "22px",
    letterSpacing: "0.5px",
  };

  const imageWrapper = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  };

  const greetingImageStyles = {
    width: "120px",
    borderRadius: "50%",
    border: "3px solid #6c63ff",
    marginTop: "10px",
  };
  return (
    <div className="App">
      <Card style={cardStyles}>
        <Image imageUrl={product.imageUrl} altText={product.name} />
        <Card.Body style={{ marginBottom: "15px" }}>
          <Card.Title>
            <Name name={product.name} />
          </Card.Title>
          <Card.Text>
            <Description description={product.description} />
          </Card.Text>
          <Price price={product.price} />
          <Button variant="primary" className="mt-3">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
      <div style={greetingStyles}>
        {userName ? `Hello, ${userName}!` : "Hello, there!"}
        {userName && (
          <div style={imageWrapper}>
            <img
              src={userImage}
              alt="Greeting"
              style={greetingImageStyles}
            />
          </div>
        )}
      </div>
      </div>   
  );
}

export default App;
