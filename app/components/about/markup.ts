// Markup for the About page (The Renaissance of Intelligence). Rendered on the server; initAbout() adds the motion.
export const ABOUT_HTML = `
<canvas id="net" aria-hidden="true"></canvas>
<div id="rail" role="navigation" aria-label="Sections of this page"></div>

<section class="band" id="home">
  <div class="plate"></div>
  <img class="fig" src="/about/fig-hero.webp" alt="Pricilla Ricapa">
  <div class="hero in">
    <div>
      <h1 class="rv">The Renaissance of <em>Intelligence</em></h1>
      <p class="sub rv d1">Economist and AI strategist from La Oroya, Peru, working where capital, AI and human potential meet.</p>
      <div class="btns rv d2"><a class="btn" href="#origins">Begin the journey <span>→</span></a><a class="btn solid" data-link="services">Work with me <span>→</span></a></div>
      <div class="scrollcue rv d3">Scroll to begin</div>
    </div>
    <div class="quote rv d3">
      <div class="mark">“</div>
      <p>I learned capital before I learned technology.</p>
      <span>Pricilla Ricapa</span>
    </div>
  </div>
</section>

<section class="band" id="origins">
  <div class="plate"></div>
  <span class="pin rv d2">La Oroya · Junín · Peru</span>
  <div class="inner">
    <div class="side">
      <div><div class="num rv">01</div><div class="lab rv">Origins</div></div>
      <div>
        <h2 class="rv d1">Where Curiosity Began</h2>
        <h3 class="rv d1">La Oroya, Junín, Peru</h3>
        <p class="rv d2">A mining and smelting town in the central Andes, about 3,700 metres above sea level, where the Mantaro and Yauli rivers meet.</p>
        <p class="voice rv d3">The railway, the metal and the jobs all depended on prices set far away. Long before I studied economics, I wanted to know how that worked.</p>
        <a class="more rv d4" href="#world">Where it led <b>→</b></a>
      </div>
    </div>
    <div></div>
  </div>
</section>

<section class="band" id="world">
  <div class="plate"></div>
  <img class="fig" src="/about/fig-world.webp" alt="Pricilla Ricapa in Davos">
  <div class="inner">
    <div class="side">
      <div><div class="num rv">02</div><div class="lab rv">World exploration</div></div>
      <div>
        <h2 class="rv d1">Following Curiosity Around the World</h2>
        <p class="rv d2">Each move added a discipline. Economics and finance in Lima, finance and accounting in California, business strategy and marketing in Italy, an MBA in Rochester, AI strategy at Lumentum and Volvo, and now my own practice and a community in Boston.</p>
        <a class="more rv d3" data-link="worked">Where I've worked <b>→</b></a>
      </div>
    </div>
    <div class="wrapx lower rv d2">
      <div class="carousel" id="carousel">
        <div class="loc"><div class="pic" style="background-image:url(/about/origins.jpg)"></div><div class="txt"><b>La Oroya</b><span>Where it began</span></div></div>
        <div class="loc"><div class="route"></div><div class="txt"><b>Lima</b><span>Economics at Universidad de Lima, then banking, credit ratings and investor relations</span></div></div>
        <div class="loc"><div class="route"></div><div class="txt"><b>California</b><span>2015: postgraduate in finance and accounting, University of La Verne. Later, enterprise AI strategy at Lumentum</span></div></div>
        <div class="loc"><div class="route"></div><div class="txt"><b>Italy</b><span>2016: executive program in business strategy and marketing management, CUOA Business School</span></div></div>
        <div class="loc"><div class="route"></div><div class="txt"><b>Rochester</b><span>STEM MBA at Simon Business School</span></div></div>
        <div class="loc"><div class="pic" style="background-image:url(/about/place-boston.jpg);background-position:center 30%"></div><div class="txt"><b>Boston</b><span>Home base: my advisory practice and Claude Community Boston</span></div></div>
        <div class="loc"><div class="pic" style="background-image:url(/about/davos.jpg);background-position:center 22%"></div><div class="txt"><b>Davos</b><span>World Economic Forum week, January 2025</span></div></div>
      </div>
    </div>
  </div>
</section>

<section class="band" id="network">
  <div class="plate"></div>
  <div class="inner">
    <div class="eco-head">
      <div>
        <div class="tag"><div class="num rv">03</div><div class="lab rv">Ecosystem</div></div>
        <h2 class="rv d1">A Living Knowledge Network</h2>
      </div>
      <p class="lede rv d2">My work doesn't fit one industry. It sits where several cross: the finance behind AI, the infrastructure under it, the people who make it useful, and what all of it means for how we live and age. Here is how those pieces connect, and where each one leads.</p>
    </div>
    <div class="eco">
      <div class="eco-map rv d2">
        <svg id="eco" role="group" aria-label="Map of six connected areas of work. Use the list beside it for the same content."></svg>
        <div class="legend" id="legend"></div>
      </div>
      <div class="rv d3">
        <div class="hint">Select a point on the map or a line below</div>
        <div class="eco-list" id="ecoList"></div>
      </div>
    </div>
  </div>
</section>

<section class="band" id="room">
  <div class="plate"></div>
  <div class="inner">
    <div class="side">
      <div><div class="num rv">04</div><div class="lab rv">In the room</div></div>
      <div>
        <h2 class="rv d1">In the Room Where Ideas Shape the Future</h2>
        <p class="rv d2">Rooms where I spoke, organized, took part or listened. Each one is labelled with the role I actually had.</p>
        <a class="more rv d3" data-link="room">See all events <b>→</b></a>
      </div>
    </div>
    <div class="stage rv d2">
      <div class="feat-media" id="featMedia" aria-hidden="true"><img alt=""><img alt=""><div class="tex"><em></em></div></div>
      <div class="feat-text" aria-live="polite"><small id="fRole"></small><h3 id="fName"></h3><div class="when" id="fWhen"></div><p id="fStory"></p></div>
      <div class="tabs" id="tabs" role="tablist" aria-label="Events"></div>
    </div>
  </div>
</section>

<section class="band" id="future">
  <div class="plate"></div>
  <div class="inner">
    <div class="side">
      <div><div class="num rv">05</div><div class="lab rv">The future</div></div>
      <div>
        <h2 class="rv d1">The Future Is What We Build Together</h2>
        <div class="two">
          <div class="rv d2"><b>First, infrastructure.</b> Data centers, compute, photonics and optical links.</div>
          <div class="rv d3"><b>Then, space.</b> Satellite connectivity and orbital networks, as a research interest.</div>
        </div>
        <div class="paths rv d4">
          <a data-link="services">Explore services</a>
          <a data-link="start">Book a conversation</a>
          <a data-link="speaking">Speaking and workshops</a>
          <a data-link="research">Read my ideas</a>
          <a data-link="community">Claude Community Boston</a>
          <a data-link="prifit">Explore PriFit</a>
        </div>
      </div>
    </div>
    <div class="contact rv d3">
      <h3>Let's Connect</h3>
      <p>Advisory, a workshop for your team, a talk or a partnership. Tell me what you're working on.</p>
      <button type="button" class="go" data-contact>Send a message →</button>
      <a class="alt" data-link="start">Or book a free 15-minute call →</a>
    </div>
  </div>
</section>
`;
