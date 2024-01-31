import { Routes, Route } from 'react-router-dom';
import { Layout } from "./components";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element />
          <Route path="/" element />
          <Route path="/" element />
          <Route path='/' element />
          <Route path="/" element />
        </Route>
      </Routes>
    </div>
  );
}


<div className={`relative z-0`}>
        {/* <header className={`flex items-center justify-center bg-sky-700 w-full fixed top-0 z-20`}>
          <Navbar />
        </header> */}
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="officials" element={<AbtOfficials />} />
            <Route path="units" element={<OurUnits />} />
            <Route path="contact" element={<Contact />} />
            <Route path="admin" element={<Admin />} />
            {user && user.admin === true ? (
            <Route path='admin/dashboard/*' element={<AdminDashboard />} />
           ) : ( 
             <Route path='admin/dashboard/*' element={<Navigate to="/" />} /> 
           )} 
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      
    </div>