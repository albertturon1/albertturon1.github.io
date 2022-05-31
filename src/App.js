import './App.css';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import toast, { Toaster } from 'react-hot-toast';
import Projects from './components/Projects';
import { setGlobalDateI18n } from 'fecha';
import About from './components/About';

function App() {
  return (
    <>
      <div><Toaster toastOptions={{
        className: '',
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
      }} /></div>
      <Navbar />
      <div className="container px-10 mx-auto flex flex-wrap items-center justify-between pt-5 ">
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;


setGlobalDateI18n({
  dayNamesShort: ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"],
  dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piatek", "Sobota"],
  monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sier", "Wrz", "Paź", "Lis", "Gru"],
  monthNames: ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"],
  amPm: ["am", "pm"],
  // D is the day of the month, function returns something like...  3rd or 11th
  DoFn: function (D) {
    return D + ["th", "st", "nd", "rd"][D % 10 > 3 ? 0 : ((D - (D % 10) !== 10) * D) % 10];
  },
});
