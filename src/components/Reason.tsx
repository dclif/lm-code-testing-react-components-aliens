interface reasonProps { 
	reason: string;
	onChangeReason: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Reason : React.FC<reasonProps> = ({reason, onChangeReason}) => {
  return (
    <div>
        <label>Reason for sparing: 
            <textarea
              name="speciesName"
              value={reason}
              onChange={onChangeReason}
            >
            </textarea>
          </label>
    </div>
  )
}

export default Reason