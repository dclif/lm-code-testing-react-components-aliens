

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
  
  return (
    <div>
        <label>What is 2 + 2 ?: 
            <select
              name="sum"
              value={sum}
              onChange={onChangeSum}
            >
            {answers.map((option) => (
              <option value={option.value} key={option.key}>{option.label}</option>
            ))}
            
            
            </select>
          </label>
    </div>
  )
}

export default Sum