import React, { useState } from 'react';
import MainCard from './components/UI/MainCard/MainCard';

import ActionComponent from './components/ActionComponent/ActionComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FormComponent from './components/FormComponent/FormComponent';

function App() {
  const [formBody, setFormBody] = useState([]);

  return (
    <>
      <MainCard>
        <ActionComponent setFormBody={setFormBody} />
        <div>
          <table className="table scroll">
            <HeaderComponent />
            <tbody>
              <FormComponent formBody={formBody} />
            </tbody>
          </table>
        </div>
      </MainCard>
    </>
  );
}

export default App;
