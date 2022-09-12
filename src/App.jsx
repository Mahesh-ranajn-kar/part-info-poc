import React from 'react';
import MainCard from './components/UI/MainCard/MainCard';

import ActionComponent from './components/ActionComponent/ActionComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FormComponent from './components/FormComponent/FormComponent';

function App() {

  return (
    <>
      <MainCard>
        <ActionComponent />
        <div>
          <table className="table scroll">
            <HeaderComponent />
            <tbody>
              <FormComponent />
            </tbody>
          </table>
        </div>
      </MainCard>
    </>
  );
}

export default App;
