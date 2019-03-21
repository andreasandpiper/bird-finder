import React from 'react';
import Main from './Main'
import {StripeProvider} from 'react-stripe-elements';
import Checkout from './Checkout'

const App = () => (
    <div className='container'>
			<Main />
      <StripeProvider apiKey="pk_test_8QQflf5SapICX3AfEp4yGFFF">
          <Checkout />
      </StripeProvider>
    </div>
);

export default App;
