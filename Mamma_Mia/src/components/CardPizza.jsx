import { Card, Button } from 'react-bootstrap';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card>
      <Card.Img variant="top" src={img} alt={`Imagen de pizza ${name}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Precio: {price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
        </Card.Text>
        <Card.Text>
          Ingredientes:
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <Button variant="primary">Ver más</Button>
        <Button variant="success">Añadir</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
