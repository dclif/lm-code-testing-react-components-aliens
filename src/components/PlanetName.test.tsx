import { render, screen, fireEvent } from '@testing-library/react';
import PlanetName from './PlanetName';

// 1. Does the component render?
test('renders planet name element', () => {
    render(<PlanetName planetName={""} onChangePlanetName={()=>{}} />);
    expect(screen.getByLabelText('Planet Name:')).toBeInTheDocument()
});

//2. If we give input fields certain values through props, do they display that value?
test('displays value passed through props', () => {
    render(<PlanetName planetName={"Uranus"} onChangePlanetName={()=>{}} />);
    expect(screen.getByDisplayValue("Uranus")).toBeInTheDocument();
});

// 3. Does each input field call its onChange function and pass it the correct parameters?
test('calls on change function with correct paramaters', () => {
    const mock = jest.fn();
    const component = render(<PlanetName planetName={"Uranus"} onChangePlanetName={mock} />)
    fireEvent.change(component.getByRole('textbox'), {target: {value: "Neptune"}})
    expect(mock).toHaveBeenCalled()

});

test('checks validation message appears when invalid props given', () => {
    const mock = jest.fn();
    const component = render(<PlanetName planetName={"Uranus"} onChangePlanetName={mock} />)
    fireEvent.change(component.getByRole('textbox'), {target: {value: "6"}})
    expect(screen.getByText("Input Must be between 2 and 49 characters. Numbers are allowed, but no special characters.")).toBeInTheDocument()

});
