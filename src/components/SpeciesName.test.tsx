import { render, screen, fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import ErrorMessage from "./ErrorMessage"

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


test('checks validation message appears when invalid props given', () => {
    const mock = jest.fn();
    const component = render(<SpeciesName speciesName={"Human"} onChangeSpeciesName={mock} />)
    fireEvent.change(component.getByRole('textbox'), {target: {value: "hello7"}})
    expect(screen.getByText("Input Must be between 3 and 23 characters. No numbers or special characters allowed!")).toBeInTheDocument()
    
});





  
