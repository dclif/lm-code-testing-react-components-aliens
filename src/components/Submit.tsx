interface submitProps {
    speciesName: string;
    planetName: string;
    numberBeings: number;
    sum: string;
    reason: string;
  }

const Submit : React.FC<submitProps> = ({speciesName, planetName, numberBeings, sum, reason}) => {
  return (
    <div>
        <input type="submit" value="Submit form" onClick={() => console.log(speciesName, planetName, numberBeings, sum, reason)} />
    </div>
  )
}

export default Submit