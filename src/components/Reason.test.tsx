import { render, screen, fireEvent } from '@testing-library/react';
import Reason from './Reason'

// 1. Does the component render?
test('renders reason element', () => {
    render(<Reason reason={""} onChangeReason={()=>{}} />);
    expect(screen.getByLabelText('Reason for sparing:')).toBeInTheDocument()
});

//2. If we give input fields certain values through props, do they display that value?
test('displays value passed through props', () => {
    render(<Reason reason={"No reason"} onChangeReason={()=>{}} />);
    expect(screen.getByDisplayValue("No reason")).toBeInTheDocument();
});

// 3. Does each input field call its onChange function and pass it the correct parameters?
test('calls on change function with correct paramaters', () => {
    const mock = jest.fn();
    const component = render(<Reason reason={"No reason"} onChangeReason={mock} />)
    fireEvent.change(component.getByRole('textbox'), {target: {value: "Why not tho"}})
    expect(mock).toHaveBeenCalled()

});