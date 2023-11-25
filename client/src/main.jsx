import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import store from './redux/store/configStore'
import { ErrorBoundary } from 'react-error-boundary'
import './index.css'
import { ServerError } from './pages/ServerError'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ServerError}>
      <Provider store={store}>
        {/* <Toaster/> */}
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
)
