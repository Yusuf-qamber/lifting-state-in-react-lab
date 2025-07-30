// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {


  return (
    <ul>
      
      {props.availableIngredients.map((item) => (
        <li style={{backgroundColor:item.color}}>
          {item.name}
          <button >+</button>
        </li>
        
      ))}
    </ul>
  );
};

export default IngredientList;
