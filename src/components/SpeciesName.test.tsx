import { render, screen, fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';

// 1. Does the component render?
test('renders species name element', () => {
    render(<SpeciesName speciesName={""} onChangeSpeciesName={()=>{}} />);
    expect(screen.getByLabelText('Species Name:')).toBeInTheDocument()
});

//2. If we give input fields certain values through props, do they display that value?
test('displays value passed through props', () => {
    render(<SpeciesName speciesName={"Human"} onChangeSpeciesName={()=>{}} />);
    expect(screen.getByDisplayValue("Human")).toBeInTheDocument();
});

// 3. Does each input field call its onChange function and pass it the correct parameters?
test('calls on change function with correct paramaters', () => {
    const mock = jest.fn();
    const component = render(<SpeciesName speciesName={"Human"} onChangeSpeciesName={mock} />)
    fireEvent.change(component.getByRole('textbox'), {target: {value: "hello"}})
    expect(mock).toHaveBeenCalled()
    
});








// render(<SpeciesName speciesName={"Human"} onChangeSpeciesName={()=>{"hello"}} />);
	// const { container, getByLabelText, getByRole, screen} = 
    // render(<SpeciesName speciesName={"Human"} onChangeSpeciesName={()=>{"hello"}} />);
	//does document render ?
	// expect(getByLabelText('Species Name:')).toBeInTheDocument()
    // expect(getByLabelText('Species Name:').textContent).toBe("Human")
    //If we give input fields certain values through props, do they display that value?
    // expect(getByRole('textbox', { name: /species name:/i })).toHaveTextContent("")
    // const tBox = screen.getByRole('textbox', {name: /species name:/i})
    //   (tBox).toBeInTheDocument()
    // .toHaveTextContent("Human")
    //Does each input field call its onChange function and pass it the correct parameters?
    // render(<SpeciesName speciesName={"Human"} onChangeSpeciesName={()=>{"hello"}} />)
    // expect(screen.getAllByRole('type="text"')).toBeInTheDocument()
    // expect(screen.getByLabelText('Species Name:')).toBeInTheDocument()
