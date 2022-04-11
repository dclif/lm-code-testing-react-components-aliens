import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName'
import PlanetName from './PlanetName'
import NumberBeings from './NumberBeings';
import Sum from './Sum'
import Reason from './Reason'



const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('');
	const [planetName, setPlanetName] = useState<string>('');
	const [numberBeings, setNumberBeings] = useState<string>('');
	const [sum, setSum] = useState<string>('4');
	const [reason, setReason] = useState<string>('');

	return (
		<section className='w12MForm'>
			<W12MHeader  />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e : any) => setSpeciesName(e.target.value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(e : any) => setPlanetName(e.target.value)} />
			<NumberBeings numberBeings={numberBeings} onChangeNumberBeings={(e : any) => setNumberBeings(e.target.value)} />
			<Sum sum={sum} onChangeSum={(e : any) => setSum(e.target.value)}/>
			<Reason reason={reason} onChangeReason={(e : any) => setReason(e.target.value)} />
			<input type="submit" value="Submit form" onClick={() => console.log(speciesName, planetName, numberBeings, sum, reason)} />
		</section>
	);
};

export default W12MForm;
