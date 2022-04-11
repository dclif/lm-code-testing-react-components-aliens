interface SpeciesNameProps { 
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ( {speciesName, onChangeSpeciesName}) => {
  return (
    <div>
        <label>Species Name: 
            <input
              type="text"
              name="speciesName"
              value={speciesName}
              onChange={onChangeSpeciesName}
            />
          </label>
    </div>
  )
}

export default SpeciesName