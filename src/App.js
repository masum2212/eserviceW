import React, {useState} from 'react';
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Routes from "./Routing/Routes";
import Footer from './components/Footer/Footer';
import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import CommonCard from "./components/Card/CommonCard";


function App() {
  const [fix, setFix] = useState(false)
  const setFixSidebar = ()=>{
    if(window.scrollY > 0){
      setFix(true)
    }
    else{
      setFix(false)
    }
  }
  window.addEventListener("scroll",setFixSidebar);
  return (
    <>
      
      <NavBar></NavBar>
      
      <Container  fluid>
      <Grid container spacing={5}>

        <Grid item xs={8}>
        <Routes></Routes>
        </Grid>
        <div class="vr"></div>
        <Grid item xs={3.9} >
          <aside className={fix ? 'sidebar fixed ' : 'sidebar'}>
          <CommonCard></CommonCard>
          </aside>
        </Grid>
        
      </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
