interface planetNameProps { 
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName : React.FC<planetNameProps> = ({planetName, onChangePlanetName}) => {
  return (
    <div>
        <label>Planet Name: 
            <input
              type="text"
              name="planetName"
              value={planetName}
              onChange={onChangePlanetName}
            />
          </label>
    </div>
  )
}

export default PlanetName