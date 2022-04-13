import { useState } from 'react';
import ErrorMessage from "./ErrorMessage"

interface SpeciesNameProps { 
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ( {speciesName, onChangeSpeciesName}) => {

  const [ errorMessage, setErrorMessage ] = useState<string>("");

  const validate : (value : string) => string  = (value) => {
		
    if(/^[a-zA-Z]{3,23}$/.test(value) === false ) { return "Input Must be between 3 and 23 characters. No numbers or special characters allowed!"}

		return "";
		}

  return (
    <div>
        <label>Species Name: 
            <input
              type="text"
              name="speciesName"
              value={speciesName}
              onChange={(e) => { 
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
					      onChangeSpeciesName(e);
               } } />
          </label>
          <ErrorMessage errorMessage={errorMessage}/>
    </div>
  )
}

export default SpeciesName