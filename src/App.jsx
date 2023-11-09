import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './styles/main.css'

import StepOne from '../src/components/StepOne'
import StepTwo from '../src/components/StepTwo'
import StepThree from '../src/components/StepThree'
import StepFour from '../src/components/StepFour'
import StepFive from '../src/components/StepFive'

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <StepOne />,
  },
  {
    path: '/step-two',
    element: <StepTwo />,
  },
  {
    path: '/step-three',
    element: <StepThree />,
  },
  {
    path: '/step-four',
    element: <StepFour />,
  },
  {
    path: '/step-five',
    element: <StepFive />,
  },
  ])

function App() {
    return (
      <div className="App">
        <RouterProvider router={routerConfig} />
      </div>
    );
  }
  
  export default App