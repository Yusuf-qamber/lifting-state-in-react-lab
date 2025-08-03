// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <>
      <ul>
        {props.stack.map((item, index) => (
          <li key={index} style={{ backgroundColor: item.color }}>
            {item.name}
            <button onClick={() => props.removeFromBurger(item)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BurgerStack;
