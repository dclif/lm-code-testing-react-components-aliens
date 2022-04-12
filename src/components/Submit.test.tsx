import { render, fireEvent  } from '@testing-library/react';
import Submit from './Submit';

// Does the submit button call its handler function and pass it the correct parameters?
test('calls handler function and passes correct paramaters', () => {
	const mock = jest.fn();
	const component = render(<Submit onClick={mock("hello")} />);
	fireEvent(component.getByRole('button'),new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
	  }),
	)
	expect(mock.mock.calls[0][0]).toBe("hello");
});

