import { useState } from 'react';
import ErrorMessage from "./ErrorMessage"

interface reasonProps { 
	reason: string;
	onChangeReason: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Reason : React.FC<reasonProps> = ({reason, onChangeReason}) => {
  
  const [ errorMessage, setErrorMessage ] = useState<string>("");

  const validate : (value : string) => string  = (value) => {
		
    if(/^.{17,153}$/.test(value) === false ) { return "Input Must be between 17 and 153 characters."}

		return "";
		}
  
  return (
    <div>
        <label>Reason for sparing: 
            <textarea
              name="speciesName"
              value={reason}
              onChange={(e) => { 
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
					      onChangeReason(e);
               } }
            >
            </textarea>
            <ErrorMessage errorMessage={errorMessage}/>
          </label>
    </div>
  )
}

export default Reason