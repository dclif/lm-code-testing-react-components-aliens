interface NumberBeingsProps { 
	numberBeings: number;
	onChangeNumberBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberBeings : React.FC<NumberBeingsProps> = ({numberBeings, onChangeNumberBeings}) => {
  return (
    <div>
        <label>Number of beings: 
            <input
              type="number"
              name="numberBeings"
              value={numberBeings}
              onChange={onChangeNumberBeings}
            />
          </label>
    </div>
  )
}

export default NumberBeings