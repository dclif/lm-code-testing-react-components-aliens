import { render, screen, fireEvent } from '@testing-library/react';
import Sum from './Sum'

// 1. Does the component render?
test('renders sum element', () => {
    render(<Sum sum={""} onChangeSum={()=>{}} />);
    expect(screen.getByLabelText('What is 2 + 2 ?:')).toBeInTheDocument()
});

//2. If we give input fields certain values through props, do they display that value?
test('displays value passed through props', () => {
    render(<Sum sum={"4"} onChangeSum={()=>{}} />);
    expect(screen.getByDisplayValue("4")).toBeInTheDocument();
});

// 3. Does each input field call its onChange function and pass it the correct parameters?
test('calls on change function with correct paramaters', () => {
    const mock = jest.fn();
    const component = render(<Sum sum={"4"} onChangeSum={mock} />)
    fireEvent.change(component.getByRole('combobox'), {target: {value: "Not 4"}})
    expect(mock).toHaveBeenCalled()

});

test('checks validation message appears when invalid props given', () => {
    const mock = jest.fn();
    const component = render(<Sum sum={"4"} onChangeSum={mock} />)
    fireEvent.change(component.getByRole('combobox'), {target: {value: "Not 4"}})
    expect(screen.getByText("That is the wrong answer")).toBeInTheDocument()
    
});