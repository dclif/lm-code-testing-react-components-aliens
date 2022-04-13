import { render, screen, fireEvent } from '@testing-library/react';
import NumberBeings from './NumberBeings';

// 1. Does the component render?
test('renders NumberBeings element', () => {
    render(<NumberBeings numberBeings={4} onChangeNumberBeings={()=>{}} />);
    expect(screen.getByLabelText('Number of beings:')).toBeInTheDocument()
});

//2. If we give input fields certain values through props, do they display that value?
test('displays value passed through props', () => {
    render(<NumberBeings numberBeings={42} onChangeNumberBeings={()=>{}} />);
    expect(screen.getByDisplayValue(42)).toBeInTheDocument();
});

// 3. Does each input field call its onChange function and pass it the correct parameters?
test('calls on change function with correct paramaters', () => {
    const mock = jest.fn();
    const component = render(<NumberBeings numberBeings={42} onChangeNumberBeings={mock} />)
    fireEvent.change(component.getByRole('spinbutton'), {target: {value: 1}})
    expect(mock).toHaveBeenCalled()

});

test('checks validation message appears when invalid props given', () => {
    const mock = jest.fn();
    const component = render(<NumberBeings numberBeings={42} onChangeNumberBeings={mock} />)
    fireEvent.change(component.getByRole('spinbutton'), {target: {value: 1}})
    expect(screen.getByText("Numbers ONLY. Must be at least 1,000,000,000.")).toBeInTheDocument()

});
