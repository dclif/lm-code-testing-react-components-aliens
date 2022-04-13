import { useState } from 'react';
import ErrorMessage from "./ErrorMessage"

interface NumberBeingsProps { 
	numberBeings: number;
	onChangeNumberBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberBeings : React.FC<NumberBeingsProps> = ({numberBeings, onChangeNumberBeings}) => {
  
  const [ errorMessage, setErrorMessage ] = useState<string>("");

  const validate : (value : string) => string  = (value) => {
		
    if(parseInt(value) < 1000000000 ) { return "Numbers ONLY. Must be at least 1,000,000,000."}

		return "";
		}
  
  return (
    <div>
        <label>Number of beings: 
            <input
              type="number"
              name="numberBeings"
              value={numberBeings}
              onChange={(e) => { 
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
					      onChangeNumberBeings(e);
               } } />
          </label>
          <ErrorMessage errorMessage={errorMessage}/>
    </div>
  )
}

export default NumberBeings