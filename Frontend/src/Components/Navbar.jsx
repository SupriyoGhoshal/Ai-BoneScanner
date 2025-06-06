import "./Navbar.css"

function Navbar() {
    return ( 
        <>
          <nav class="navbar navbar-expand-lg navbar-gradient sticky-top shadow-sm">
  <div class="container">
    <a class="navbar-brand logo-text" href="#">🦴 NutriBone</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarModern">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarModern">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item">
          <a class="nav-link active" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scan">Scan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#summary">Summary</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="btn get-started-btn ms-3" href="#login">Get Started</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


        </> 
    );
}

export default Navbar;