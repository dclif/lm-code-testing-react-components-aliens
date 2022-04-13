import { useState } from 'react';
import ErrorMessage from "./ErrorMessage"

interface planetNameProps { 
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName : React.FC<planetNameProps> = ({planetName, onChangePlanetName}) => {
  
  const [ errorMessage, setErrorMessage ] = useState<string>("");

  const validate : (value : string) => string  = (value) => {
		
    if(/^[a-zA-Z0-9]{2,49}$/.test(value) === false ) { return "Input Must be between 2 and 49 characters. Numbers are allowed, but no special characters."}

		return "";
		}
  
  return (
    <div>
        <label>Planet Name: 
            <input
              type="text"
              name="planetName"
              value={planetName}
              onChange={(e) => { 
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
					      onChangePlanetName(e);
               } } />
          </label>
          <ErrorMessage errorMessage={errorMessage}/>
    </div>
  )
}

export default PlanetName