import { Button } from './component/button/button';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { Blog } from './component/blog/blog';
import { Work } from './component/work/work';

import './App.css';

import { useState } from "react";



function App() {
  const [component, setComponent] = useState("home");

  const activeHome = () => setComponent("home");
  const activeWork = () => setComponent("work");
  const activeBlog = () => setComponent("blog");
  const activeAboutUs = () => setComponent("aboutus");
  
  return (
    <div className="box-nave">
     
      <div className="box-img">
        {component === "home" && <Home />}
        {component === "work" && <Work />}
        {component === "blog" && <Blog />}
        {component === "aboutus" && <About />}
      </div>

      <nav className="menu">
        <Button onClick={activeHome} operation="Home" />
        <Button onClick={activeWork} operation="Work" />
        <Button onClick={activeBlog} operation="Blog" />
        <Button onClick={activeAboutUs} operation="About Us" />
      </nav>
    </div>
  );
}

export default App;
