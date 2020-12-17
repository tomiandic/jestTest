/* import { render, screen } from '@testing-library/react'; */
import Enzyme, {shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });


/**
 * 
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without crashing', () => {

}); 

