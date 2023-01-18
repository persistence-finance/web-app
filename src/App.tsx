import React, { PropsWithChildren } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./routes/Home'))

const Loadable = ({ children }: PropsWithChildren) => <React.Suspense fallback={<>Loading</>}>
  {children}
</React.Suspense>

function App () {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loadable><Home /></Loadable>} />
      <Route path="/sales" element={<Loadable><Home /></Loadable>} />
      <Route path="/trends" element={<Loadable><Home /></Loadable>} />
      <Route path="/wallet" element={<Loadable><Home /></Loadable>} />
      <Route path="/account" element={<Loadable><Home /></Loadable>} />
      <Route path="/settings" element={<Loadable><Home /></Loadable>} />
    </Routes>
  </BrowserRouter>
}

export default App