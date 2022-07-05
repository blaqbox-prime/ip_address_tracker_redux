import React from 'react';
import { getQueriesForElement, render } from '@testing-library/react';

import IpDetails from '../IpDetails';

// let container = null;


test('Renders correctly', ()=>{

    const {getByText, getByLabelText} = render(<IpDetails/>)

    expect(getByText('Ip address')).not.toBeNull();

});


