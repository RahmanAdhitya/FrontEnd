let myStory = `<div class="myStory">
        <h4>I am Who I am</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus aspernatur exercitationem ea sequi amet tempora ratione necessitatibus. Unde doloremque eos molestiae quas mollitia nobis maxime quidem? Minima, ipsa
          odio.
        </p>
        <div class="menu-2">
          <div class="nav-2 time-line" onclick="render(timeLine)">Time-Line</div>
          <div class="nav-2 skill-menu" onclick="render(skill)">Skills</div>
        </div>
      </div>`;

function render(test) {
  document.getElementById('view').innerHTML = test;
}

let timeLine = `
<div class="timeline">
  <div class="container left">
    <div class="content">
      <h2>2011</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, veritatis eius ducimus libero minus quam eveniet laboriosam fugiat repellat laborum.</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2015</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus soluta, dolorum obcaecati necessitatibus dolore repellendus beatae vel animi! Deserunt.</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, veritatis eius ducimus libero minus quam eveniet laboriosam fugiat repellat laborum.</p>
    </div>
  </div>
</div>`;

let work = `<div class="work">
<div class="card">
  <div class="box">
    <img src="https://media.istockphoto.com/photos/multicolored-rgb-gaming-keyboard-picture-id1338071559?b=1&k=20&m=1338071559&s=170667a&w=0&h=mxLLqTLYFrlmxqFk_mtMxTxw2G9bcs4tIuxvyRqEyDg=" alt="" />
  </div>
  <div class="content-card">
    <h5>Project 1</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga accusantium ducimus cum placeat ea repellendus corporis officia excepturi expedita!</p>
  </div>
</div>
<div class="card">
  <div class="box">
    <img src="https://media.istockphoto.com/photos/multicolored-rgb-gaming-keyboard-picture-id1338071559?b=1&k=20&m=1338071559&s=170667a&w=0&h=mxLLqTLYFrlmxqFk_mtMxTxw2G9bcs4tIuxvyRqEyDg=" alt="" />
  </div>
  <div class="content-card">
    <h5>Project 2</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga accusantium ducimus cum placeat ea repellendus corporis officia excepturi expedita!</p>
  </div>
</div>
<div class="card">
  <div class="box">
    <img src="https://media.istockphoto.com/photos/multicolored-rgb-gaming-keyboard-picture-id1338071559?b=1&k=20&m=1338071559&s=170667a&w=0&h=mxLLqTLYFrlmxqFk_mtMxTxw2G9bcs4tIuxvyRqEyDg=" alt="" />
  </div>
  <div class="content-card">
    <h5>Project 3</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga accusantium ducimus cum placeat ea repellendus corporis officia excepturi expedita!</p>
  </div>
</div>
</div>`;

let contact = `<div class="contact">
<div class="contact-list"><img src="https://img.icons8.com/ios-glyphs/90/000000/github.png"/>github</div>
<div class="contact-list"><img class="ig" src="https://img.icons8.com/ios/50/000000/instagram-new--v3.png"/>instagram</div>
<div class="contact-list"><img src="https://img.icons8.com/dotty/80/000000/gmail-login.png"/>email</div>
</div>`;

let galery = `<div class="galery">
<div class="photos">photo1</div>
<div class="photos">photo2</div>
<div class="photos">photo3</div>
<div class="photos">photo4</div>
<div class="photos">photo5</div>
</div>`;

let skill = `<div class="myskill">
<h4>HTML</h4>
<div class="skill-bar">
  <div class="list-skill hetml">50%</div>
</div>
<h4>CSS</h4>
<div class="skill-bar">
  <div class="list-skill css">50%</div>
</div>
<h4>JAVASCRIPT</h4>
<div class="skill-bar">
  <div class="list-skill js">50%</div>
</div>
</div>`;
