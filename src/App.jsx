/* eslint-disable no-unused-vars */
import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
        <main>
      <div className="main">
        <div className="gradient">

        </div>
      </div>
      <div className="app">
        <Hero/>
        <Demo/>
      </div>
    </main>
    <Footer/>
    </>

  )  

}

export default App