<template>
  <div id="app">
    <div class="menu_section">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    
      <nav class="navbar navbar-expand-lg navbar-light bg-custom">
          <router-link class="navbar-brand" to="/">Overview</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/vote">Vote<span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/building">Building a PC<span class="sr-only">(current)</span></router-link>
              </li>
            </ul>
          </div>
      </nav>
    </div>

    <router-view/>

    <div class="footer nav-item bg-custom">
          <a href="https://github.com/wbf22/pc_specs">Github Link</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5e5e5e;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 10%;
}

nav {
  padding: 30px;
  margin: 3%;
}

nav a {
  font-weight: bold;
  color: #5e5e5e;
}

.menu_section {
  background-color: #e91b1b;
  width: 100%;
}

.footer {
    width: 100%;
    height: 50px;
    position:fixed;
    bottom: 0px;
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
    background-color: rgba(204, 204, 204, 0.699);
}

.footer a {
    padding: 10px;
    color: #4b4b4b;
}

</style>
