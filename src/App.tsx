import React, { PropsWithChildren } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout, GlobalStyle, Sidebar, FullLoader } from 'components'

const Home = React.lazy(() => import('./routes/Home'))
const Sales = React.lazy(() => import('./routes/Sales'))

function App () {
  return <BrowserRouter>
  <Layout>
    <GlobalStyle />
    <React.Suspense fallback={<FullLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/trends" element={<Home />} />
        <Route path="/wallet" element={<Home />} />
        <Route path="/account" element={<Home />} />
        <Route path="/settings" element={<Home />} />
      </Routes>
    </React.Suspense>
    <Sidebar />
  </Layout>
  </BrowserRouter>
}

export default App