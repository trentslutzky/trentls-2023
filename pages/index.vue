<template>
  <div>
    <div id="homepage-intro-section">
      <p>
        Welcome to <a>trentls.me</a>. Here I post a bit about me and list the projects I've done over the years.
      </p>
      <a href="/#projects">Take a look at some of my projects</a>
      <h2>About Me</h2>
      <p>
        Hi! My name is Trent Slutzky. I'm currently working as a Software Engineer for <a href="https://narmi.com">Narmi</a> and headquartered in New York City. 
      </p>
    </div>
    <a name="projects"></a>
    <hr/>
    <h2>Projects</h2> 
    <div id="project-link-list">
      <p className="list-date">2023</p>
      <ListLink name="hue" link="/projects/hue"/>
      <ListLink name="do" link="/projects/do"/>
      <ListLink name="esper keyboard v2" link="/projects/hue"/>
      <p className="list-date">2022</p>
      <ListLink name="flag.quest" link="/projects/hue"/>
      <ListLink name="Surge torrent streamer" link="/projects/hue"/>
      <ListLink name="esper keyboard v1" link="/projects/hue"/>
      <p className="list-date">2021</p>
      <ListLink name="esper-reader" link="/projects/hue"/>
      <ListLink name="NASA Robotic Mining Rover" link="/projects/hue"/>
      <p className="list-date">2017</p>
      <ListLink name="VECTRO" link="/projects/hue"/>
      <ListLink name="Origami robotic endoscope" link="/projects/hue"/>
    </div>
    <div style="height: 3000px"/>
  </div>
</template>

<style>
  #homepage-intro-section {
    max-width: 800px;
  }

  #project-link-list {
    display: flex;
    flex-direction: column;
  }
  .list-date {
    color: var(--fg1);
  }
</style>
