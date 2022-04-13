import { useState } from 'react';
import ErrorMessage from "./ErrorMessage"

interface sumProps { 
	sum: string;
	onChangeSum: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const answers = [
  {
    value: '4',
    label: '4',
    key: '4'
  },
  {
    value: 'not 4',
    label: 'not 4',
    key:'not4'
  },
];

const Sum : React.FC<sumProps> = ({sum, onChangeSum}) => {

  const [ errorMessage, setErrorMessage ] = useState<string>("");

  const validate : (value : string) => string  = (value) => {
		
    if(value !== "4" ) { return "That is the wrong answer"}

		return "";
		}
  
  return (
    <div>
        <label>What is 2 + 2 ?: 
            <select
              name="sum"
              value={sum}
              onChange={(e) => { 
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
					      onChangeSum(e);
               } }
            >
            {answers.map((option) => (
              <option value={option.value} key={option.key}>{option.label}</option>
            ))}
            
            
            </select>
          </label>
          <ErrorMessage errorMessage={errorMessage}/>
    </div>
  )
}

export default Sum