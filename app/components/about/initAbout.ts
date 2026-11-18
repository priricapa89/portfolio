// @ts-nocheck
// Motion and interaction for the About page. Plain DOM code, run once the page is on screen.
// initAbout() returns a cleanup function so leaving the page stops every loop and listener.

export function initAbout(root: HTMLElement, opts: { openContact: () => void }): () => void {
  var dead = false, disposers = [];
  function on(t, ev, fn, o) { t.addEventListener(ev, fn, o); disposers.push(function () { t.removeEventListener(ev, fn, o); }); }
  var document = root.ownerDocument;

  // ===== Destinations: change an address here and every link on the page follows. =====
  var LINKS = {
    services:  "/#services",
    start:     "/#pricing",                       // free 15-minute fit call and where to start
    worked:    "/#credentials",
    room:      "/#events",
    community: "/claude-community-boston",
    prifit:    "/prifit",                         // PriFit venture (redirect set in netlify.toml)
    chapters:  "/#thread",                        // Capital, Intelligence, Infrastructure chapters
    research:  "/#topics",
    speaking:  "/engagements/executive-education"
  };
  var NEW_TAB = { prifit: true };                 // leaves pricapa.com
  function wire(a) { var k = a.dataset.link, u = LINKS[k]; if (!u) { a.removeAttribute("href"); a.hidden = true; return; } a.href = u; if (NEW_TAB[k]) { a.target = "_blank"; a.rel = "noopener"; } }
  [].forEach.call(document.querySelectorAll("[data-link]"), wire);

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var IDS = ["home", "origins", "world", "network", "room", "future"];
  var NAMES = ["Home", "Origins", "World", "Ecosystem", "In the room", "The future"];
  var bands = IDS.map(function (id) { return document.getElementById(id); });
  var K = IDS.length;

  var rail = document.getElementById("rail"), links = [];
  var STAR = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 1v5M12 18v5M1 12h5M18 12h5M4.2 4.2l3.5 3.5M16.3 16.3l3.5 3.5M19.8 4.2l-3.5 3.5M7.7 16.3l-3.5 3.5"/></svg>';
  NAMES.forEach(function (n, k) {
    var a = document.createElement("a");
    a.href = "#" + IDS[k];
    a.innerHTML = "<i>0" + k + "</i>" + STAR + "<span>" + n + "</span>";
    a.setAttribute("aria-label", n);
    rail.appendChild(a); links.push(a);
  });

  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) e.target.classList.add("in"); }); }, { threshold: 0.18 });
    disposers.push(function () { io.disconnect(); });
    bands.forEach(function (b) { io.observe(b); });
  } else bands.forEach(function (b) { b.classList.add("in"); });

  // ===== 04 In the room =====
  (function () {
    var EV = [
      { name: "Davos", when: "January 2025", role: "Participant", img: "/about/room-davos.jpg", pos: "center 28%",
        story: "World Economic Forum week: WSJ House, MIT House, AI House and the Imperial College AI Dinner. I met an extraordinary group of people there." },
      { name: "MIT Imagination in Action", when: "AI summit, April 2026", role: "Participant", img: "/about/room-iia.jpg", pos: "center 30%",
        story: "The AI summit at MIT. I first went in 2023, during MIT Generative AI Week, and in 2026 I was in the room for Leading in an Intelligent World." },
      { name: "Claude Community Boston", when: "2026", role: "Organizer", img: "/about/room-ccb.jpg", pos: "center 40%",
        story: "I organize it as an independent volunteer. People bring a real problem and build a working agent for it, together. Two workshops so far, the latest at Harvard Business School." },
      { name: "Panels and talks", when: "September 2026", role: "Speaker · Panelist",
        story: "A live build of an AI Chief of Staff for a financial-services audience at Adopt The Brand Day in Newport. Panelist on Responsible Innovation at Scale at a NuVert executive event." },
      { name: "Harvard", when: "2026", role: "Attendee · Host",
        story: "The Harvard Quantum Symposium, part of the Quantum & AI Impact Series, and the latest Claude Community Boston workshop, which I hosted at Harvard Business School." },
      { name: "MIT", when: "2023 to 2026", role: "Participant",
        story: "MIT Generative AI Week in 2023, TEDxMIT at MIT Sloan in 2024 and MIT Future Fest in October 2026." },
      { name: "Physical AI", when: "", role: "Participant",
        story: "A gathering on AI that acts in the physical world: robots, sensors and the machines around us." }
    ];
    var tabs = document.getElementById("tabs"), media = document.getElementById("featMedia");
    var imgs = media.querySelectorAll("img"), tex = media.querySelector(".tex"), flip = 0, cur = -1;
    EV.forEach(function (e, i) {
      var b = document.createElement("button");
      b.className = "tab"; b.type = "button"; b.setAttribute("role", "tab"); b.id = "tab" + i;
      b.innerHTML = "<i" + (e.img ? " style=\"background-image:url(" + e.img + ")\"" : "") + ">" + (e.img ? "" : e.name.charAt(0)) + "</i><div><b>" + e.name + "</b><span>" + e.role + "</span></div>";
      b.addEventListener("click", function () { show(i); });
      tabs.appendChild(b);
      if (e.img) { var pre = new Image(); pre.src = e.img; }
    });
    tabs.addEventListener("keydown", function (ev) {
      if (ev.key !== "ArrowRight" && ev.key !== "ArrowLeft") return;
      var n = (cur + (ev.key === "ArrowRight" ? 1 : EV.length - 1)) % EV.length; show(n); tabs.children[n].focus();
    });
    function show(i) {
      if (i === cur) return; cur = i; var e = EV[i];
      [].forEach.call(tabs.children, function (t, k) { t.setAttribute("aria-selected", k === i ? "true" : "false"); t.tabIndex = k === i ? 0 : -1; });
      imgs.forEach(function (m) { m.classList.remove("on"); }); tex.classList.remove("on");
      if (e.img) { flip = 1 - flip; var m = imgs[flip]; m.src = e.img; m.style.objectPosition = e.pos; m.classList.add("on"); }
      else { tex.querySelector("em").textContent = e.name; tex.classList.add("on"); }
      document.getElementById("fRole").textContent = e.role;
      document.getElementById("fName").textContent = e.name;
      document.getElementById("fWhen").textContent = e.when;
      document.getElementById("fStory").textContent = e.story;
    }
    show(0);
  })();

  // ===== 05 Ecosystem map =====
  (function () {
    var KIND = {
      pricapa:   { c: "#a9833f", name: "PRICAPA services", solid: true },
      thinking:  { c: "#b09060", name: "Thinking and research" },
      community: { c: "#7f8bc6", name: "Community" },
      venture:   { c: "#b8716a", name: "Separate venture" }
    };
    var HUBS = [
      { id: "ai", n: "01", t: "AI Strategy & Advisory", s: "AI Strategy", kind: "pricapa", tag: "PRICAPA · Advisory",
        d: "For leaders who need AI to change how the business runs, not only to produce a pilot. From the first strategy conversation to agentic workflows a team can run.",
        items: ["AI strategy", "Business transformation", "AI adoption", "Agentic AI", "Workflow architecture", "Executive advisory", "AI education"],
        q: "AI made building easy. Knowing what to build is now the hard part.",
        studied: "Executive program in business strategy and marketing management, CUOA Business School, Italy (2016). STEM MBA, Simon Business School, University of Rochester.",
        cta: [["Explore services", "services"], ["Book a conversation", "start"]] },
      { id: "community", n: "02", t: "Community & Ecosystem", s: "Community", kind: "community", tag: "Independent volunteer role",
        d: "I organize Claude Community Boston: hands-on workshops and build days where founders, builders, operators and researchers bring a real problem and leave with something that works.",
        q: "Start simple. Learn from the system. Earn the complexity.",
        items: ["Claude Community Boston", "Community leadership", "AI workshops", "Build days", "Events", "Founders, builders, operators and researchers"],
        cta: [["Claude Community Boston", "community"], ["See where I've been", "room"]] },
      { id: "longevity", n: "03", t: "Longevity & Human Potential", s: "Longevity", kind: "venture", tag: "Separate venture · PriFit",
        d: "How people live, perform and age, and what AI, biology and neuroscience can add to it. It started at home: my grandmother, a curandera, used to say beauty comes from what you eat. PriFit is where I build on that.",
        q: "Intelligence without wisdom is acceleration without direction.",
        d2: "The same idea runs under my AI work. I call it humanist superintelligence: intelligence should widen what people can do, and who gets to do it.",
        items: ["Longevity", "Human performance", "Healthspan", "AI", "Biology", "Neuroscience", "Technology", "Human potential", "Wisdom", "Humanist superintelligence"],
        cta: [["Visit PriFit", "prifit"]] },
      { id: "capital", n: "04", t: "Capital & Markets", s: "Capital", kind: "thinking", tag: "Where I started",
        d: "Banking, credit ratings, investor relations and treasury came first. I still read every technology through its business model: who pays, what it costs and where the value lands.",
        studied: "BSc in Economics, Universidad de Lima. Postgraduate in finance and accounting, University of La Verne, California (2015).",
        items: ["Finance", "Capital markets", "Investing", "Economics", "AI economics", "Technology valuations", "Business models", "Capital allocation", "Market dynamics"],
        cta: [["Read the Capital chapter", "chapters"], ["Research and writing", "research"]] },
      { id: "deeptech", n: "05", t: "Deep Tech & Infrastructure", s: "Deep Tech", kind: "thinking", tag: "Research interest",
        d: "The physical layer under AI: compute, data centers, photonics, chips and energy, and the economics of building it, from the data center to orbit.",
        items: ["AI infrastructure", "Compute", "Data centers", "Photonics", "Semiconductors", "Quantum computing", "Robotics", "Energy", "Space"],
        cta: [["Read the Infrastructure chapter", "chapters"]] },
      { id: "ideas", n: "06", t: "Ideas, Speaking & Leadership", s: "Ideas", kind: "pricapa", tag: "PRICAPA · Speaking and education",
        d: "Talks, panels, workshops and executive sessions on AI, the economy and what comes next, built for the people who have to make the decisions.",
        items: ["Speaking", "Panels", "Workshops", "Executive education", "Thought leadership", "Writing", "Content"],
        cta: [["Speaking and workshops", "speaking"], ["Read my ideas", "research"]] }
    ];
    var X = [["ai", "capital", "AI economics"], ["ai", "deeptech", "AI infrastructure"], ["ai", "ideas", "AI education"], ["ai", "community", "Workshops and build days"],
             ["community", "ideas", "Events and talks"], ["longevity", "ai", "AI, biology and neuroscience"], ["deeptech", "capital", "The economics of infrastructure"]];
    var LAY = {
      d: { vb: [-20, -16, 1040, 732], c: [500, 352], rc: 62, fs: 28, lh: 30, spread: 78, dmin: 48, dmax: 104,
           pos: { ai: [305, 168], deeptech: [690, 162], longevity: [790, 372], community: [662, 556], ideas: [336, 556], capital: [172, 362] }, ex: [480, 330] },
      m: { vb: [0, -6, 600, 672], c: [300, 330], rc: 54, fs: 31, lh: 32, spread: 70, dmin: 34, dmax: 76, short: true,
           pos: { ai: [165, 152], deeptech: [435, 152], longevity: [522, 340], community: [432, 524], ideas: [168, 524], capital: [78, 340] }, ex: [292, 322] }
    };
    var byId = {}; HUBS.forEach(function (h) { byId[h.id] = h; });
    var svg = document.getElementById("eco"), list = document.getElementById("ecoList"), NS = "http://www.w3.org/2000/svg";
    var mq = window.matchMedia("(max-width: 880px)"), sel = null, paths = [], pulses = [], tip, running = false;
    function f(v) { return Math.round(v * 10) / 10; }
    function el(tag, a, p) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); (p || svg).appendChild(e); return e; }
    function curve(a, b, bend) { var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1];
      return "M" + f(a[0]) + " " + f(a[1]) + "Q" + f(mx - dy * bend) + " " + f(my + dx * bend) + " " + f(b[0]) + " " + f(b[1]); }
    function crosses(id) { return X.filter(function (x) { return x[0] === id || x[1] === id; }); }

    // legend
    document.getElementById("legend").innerHTML = Object.keys(KIND).map(function (k) { return "<span style='--k:" + KIND[k].c + (KIND[k].solid ? ";--bg:" + KIND[k].c : "") + "'>" + KIND[k].name + "</span>"; }).join("");

    // list (accordion)
    HUBS.forEach(function (h) {
      var k = KIND[h.kind].c, row = document.createElement("div");
      row.className = "row"; row.id = "row-" + h.id; row.style.setProperty("--k", k);
      var cx = crosses(h.id).map(function (x) { var o = x[0] === h.id ? x[1] : x[0]; return "<b>" + x[2] + "</b> with " + byId[o].t; }).join("; ");
      row.innerHTML = "<button type='button' aria-expanded='false' aria-controls='body-" + h.id + "'><span class='no'>" + h.n + "</span><span><span class='ti'>" + h.t + "</span><span class='tg'>" + h.tag + "</span></span><span class='chev' aria-hidden='true'>+</span></button>" +
        "<div class='body' id='body-" + h.id + "' role='region' aria-label='" + h.t + "'><div><div class='pad'><p>" + h.d + "</p>" + (h.q ? "<blockquote>" + h.q + "</blockquote>" : "") + (h.d2 ? "<p style='margin-top:12px'>" + h.d2 + "</p>" : "") +
        "<div class='chips'>" + h.items.map(function (i) { return "<span>" + i + "</span>"; }).join("") + "</div>" +
        (cx ? "<p class='cross'>Crosses with: " + cx + ".</p>" : "") + (h.studied ? "<p class='cross'><b>Studied:</b> " + h.studied + "</p>" : "") +
        "<div class='ctas'>" + h.cta.map(function (c) { return "<a data-link='" + c[1] + "'>" + c[0] + " ↗</a>"; }).join("") + "</div></div></div></div>";
      row.querySelector("button").addEventListener("click", function () { select(sel === h.id ? null : h.id, "list"); });
      [].forEach.call(row.querySelectorAll("[data-link]"), wire);
      list.appendChild(row);
    });

    function rng(s) { return function () { s = (s * 16807) % 2147483647; return s / 2147483647; }; }

    function build() {
      var L = mq.matches ? LAY.m : LAY.d, C = L.c, r = rng(11), boxes = [];
      svg.setAttribute("viewBox", L.vb.join(" ")); svg.innerHTML = ""; paths = [];
      var defs = el("defs", {});
      var fl = el("filter", { id: "glow", x: "-200%", y: "-200%", width: "500%", height: "500%" }, defs);
      el("feGaussianBlur", { stdDeviation: "2.2", result: "b" }, fl);
      var mg = el("feMerge", {}, fl); el("feMergeNode", { "in": "b" }, mg); el("feMergeNode", { "in": "SourceGraphic" }, mg);
      var cp = el("clipPath", { id: "meclip" }, defs); el("circle", { cx: C[0], cy: C[1], r: L.rc }, cp);
      var gBg = el("g", {}), gX = el("g", {}), gSp = el("g", {}), gLn = el("g", {}), gNeu = el("g", {}), gMe = el("g", {}), gHub = el("g", {}), gP = el("g", {});

      // neurons per hub and label boxes
      var N = {};
      HUBS.forEach(function (h) {
        var p = L.pos[h.id], a0 = Math.atan2(C[1] - p[1], C[0] - p[0]), n = h.items.length, pts = [];
        for (var i = 0; i < n; i++) {
          var a = a0 + (L.spread * Math.PI / 180) * ((n === 1 ? 0.5 : i / (n - 1)) - 0.5) * 2 + (r() - 0.5) * 0.18;
          var d = L.dmin + r() * (L.dmax - L.dmin), x = p[0] + Math.cos(a) * d, y = p[1] + Math.sin(a) * d;
          var dc = Math.hypot(x - C[0], y - C[1]), need = L.rc + 26;
          if (dc < need) { x = C[0] + (x - C[0]) * need / dc; y = C[1] + (y - C[1]) * need / dc; }
          pts.push([x, y, a]);
        }
        pts.sort(function (u, v) { return u[2] - v[2]; });
        N[h.id] = pts;
      });

      // hubs: label geometry first, so the background stays clear of it
      var LBL = {};
      HUBS.forEach(function (h) {
        var p = L.pos[h.id], dx = p[0] - C[0], dy = p[1] - C[1], m = Math.hypot(dx, dy), ux = dx / m, uy = dy / m, lines, anchor, x, y;
        if (L.short) { lines = [h.s]; anchor = "middle"; x = p[0]; y = uy < -0.3 ? p[1] - 28 : p[1] + 26 + L.fs * 0.75; }
        else {
          lines = h.t.indexOf(" & ") > -1 ? [h.t.split(" & ")[0] + " &", h.t.split(" & ")[1]] : [h.t];
          anchor = ux < -0.3 ? "end" : ux > 0.3 ? "start" : "middle";
          x = p[0] + ux * 30; var hgt = 18 + lines.length * L.lh;
          y = uy < -0.3 ? p[1] + uy * 24 - hgt + 18 : uy > 0.3 ? p[1] + uy * 24 + 18 : p[1] - hgt / 2 + 18;
        }
        var w = Math.max.apply(null, lines.map(function (s) { return s.length; })) * L.fs * 0.47;
        var x0 = anchor === "end" ? x - w : anchor === "middle" ? x - w / 2 : x;
        LBL[h.id] = { lines: lines, anchor: anchor, x: x, y: y };
        boxes.push([x0 - 10, y - (L.short ? L.fs : 18 + 4) - 6, x0 + w + 10, y + (L.short ? 8 : lines.length * L.lh + 4)]);
      });

      // background neurons, kept out of the labels, hubs and centre
      var dots = [], tries = 0;
      while (dots.length < (L.short ? 46 : 70) && tries++ < 3000) {
        var t = r() * Math.PI * 2, rr = Math.sqrt(r()), x = C[0] + Math.cos(t) * L.ex[0] * rr, y = C[1] + Math.sin(t) * L.ex[1] * rr, ok = true;
        if (Math.hypot(x - C[0], y - C[1]) < L.rc + 34) ok = false;
        HUBS.forEach(function (h) { var p = L.pos[h.id]; if (Math.hypot(x - p[0], y - p[1]) < 34) ok = false; N[h.id].forEach(function (q) { if (Math.hypot(x - q[0], y - q[1]) < 16) ok = false; }); });
        boxes.forEach(function (b) { if (x > b[0] && x < b[2] && y > b[1] && y < b[3]) ok = false; });
        if (ok) dots.push([x, y]);
      }
      dots.forEach(function (d, i) {
        var near = dots.map(function (e, j) { return [Math.hypot(e[0] - d[0], e[1] - d[1]), j]; }).filter(function (z) { return z[1] > i && z[0] < 120; }).sort(function (a, b) { return a[0] - b[0]; }).slice(0, 2);
        near.forEach(function (z) { var e = dots[z[1]], pa = el("path", { "class": "bgl", d: curve(d, e, 0.12) }, gBg); paths.push({ el: pa, h: [], bg: true }); });
      });
      dots.forEach(function (d) { el("circle", { "class": "bgd", cx: f(d[0]), cy: f(d[1]), r: f(1 + r() * 1.2) }, gBg); });

      // crossings between hubs, bent toward the centre
      X.forEach(function (x) {
        var a = L.pos[x[0]], b = L.pos[x[1]], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, qx = mx + (C[0] - mx) * 0.5, qy = my + (C[1] - my) * 0.5;
        var pa = el("path", { "class": "xl", d: "M" + f(a[0]) + " " + f(a[1]) + "Q" + f(qx) + " " + f(qy) + " " + f(b[0]) + " " + f(b[1]), "data-h": x[0] + " " + x[1] }, gX);
        el("title", {}, pa).textContent = x[2];
        paths.push({ el: pa, h: [x[0], x[1]] });
      });

      HUBS.forEach(function (h, hi) {
        var k = KIND[h.kind].c, p = L.pos[h.id], ang = Math.atan2(p[1] - C[1], p[0] - C[0]);
        var s = [C[0] + Math.cos(ang) * (L.rc + 8), C[1] + Math.sin(ang) * (L.rc + 8)];
        var sp = el("path", { "class": "sp", d: curve(s, p, hi % 2 ? 0.1 : -0.1), "data-h": h.id, style: "--k:" + k }, gSp); paths.push({ el: sp, h: [h.id] });
        N[h.id].forEach(function (q, i) {
          var ln = el("path", { "class": "ln", d: curve(p, q, (i % 2 ? 0.16 : -0.16)), "data-h": h.id, style: "--k:" + k }, gLn); paths.push({ el: ln, h: [h.id] });
          if (i) { var o = N[h.id][i - 1], l2 = el("path", { "class": "ln", d: curve(o, q, 0.2), "data-h": h.id, style: "--k:" + k }, gLn); paths.push({ el: l2, h: [h.id] }); }
          var c = el("circle", { "class": "neu", cx: f(q[0]), cy: f(q[1]), r: 4, "data-h": h.id, style: "--k:" + k }, gNeu);
          c.addEventListener("click", function () { select(h.id, "map"); });
          if (fine) { c.addEventListener("mouseenter", function () { showTip(h.items[i], q); }); c.addEventListener("mouseleave", hideTip); }
        });
        var g = el("g", { "class": "hub " + h.kind + (KIND[h.kind].solid ? " solid" : ""), "data-h": h.id, id: "hub-" + h.id, tabindex: 0, role: "button",
          "aria-label": h.t + ". " + h.tag + ". Show details.", "aria-controls": "body-" + h.id, style: "--k:" + k + ";--dl:" + (hi * 1) + "s" }, gHub);
        el("circle", { "class": "halo", cx: p[0], cy: p[1], r: L.short ? 22 : 20 }, g);
        el("circle", { cx: p[0], cy: p[1], r: 30, fill: "transparent" }, g);
        el("circle", { "class": "core", cx: p[0], cy: p[1], r: L.short ? 11 : 10 }, g);
        var lb = LBL[h.id];
        if (!L.short) { var tn = el("text", { "class": "hn", x: lb.x, y: lb.y, "text-anchor": lb.anchor }, g); tn.textContent = h.n; }
        var tt = el("text", { "class": "ht", x: lb.x, y: L.short ? lb.y : lb.y + L.lh, "text-anchor": lb.anchor, "font-size": L.fs }, g);
        lb.lines.forEach(function (s, i) { var ts = document.createElementNS(NS, "tspan"); ts.setAttribute("x", lb.x); if (i) ts.setAttribute("dy", L.lh); ts.textContent = s; tt.appendChild(ts); });
        g.addEventListener("click", function () { select(sel === h.id ? null : h.id, "map"); });
        g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(sel === h.id ? null : h.id, "map"); } });
        if (fine) { g.addEventListener("mouseenter", function () { light(h.id); }); g.addEventListener("mouseleave", function () { light(sel); }); }
      });

      // centre: the person behind the map
      el("circle", { "class": "me-halo", cx: C[0], cy: C[1], r: L.rc + 16 }, gMe);
      el("image", { href: "/about/me.jpg", x: C[0] - L.rc, y: C[1] - L.rc, width: L.rc * 2, height: L.rc * 2, "clip-path": "url(#meclip)", preserveAspectRatio: "xMidYMid slice" }, gMe);
      el("circle", { "class": "me-ring", cx: C[0], cy: C[1], r: L.rc + 4 }, gMe);
      el("circle", { "class": "me-ring", cx: C[0], cy: C[1], r: L.rc + 12, "stroke-dasharray": "2 6", opacity: 0.6 }, gMe);

      // tooltip and pulses
      tip = el("g", { id: "tip", opacity: 0, "pointer-events": "none" });
      el("rect", { rx: 6, height: 26 }, tip); el("text", { y: 0 }, tip);
      pulses = [];
      if (!reduce) for (var i = 0; i < (L.short ? 10 : 16); i++) pulses.push({ c: el("circle", { "class": "pulse", r: L.short ? 2.6 : 2.2, opacity: 0 }, gP), p: null, t: 1, v: 0 });
      paths.forEach(function (o) { o.len = o.el.getTotalLength(); });
      light(sel);
    }

    function showTip(text, q) {
      var tx = tip.querySelector("text"), rc = tip.querySelector("rect");
      tx.textContent = text; var w = tx.getComputedTextLength() + 20;
      tx.setAttribute("x", f(q[0] - w / 2 + 10)); tx.setAttribute("y", f(q[1] - 18));
      rc.setAttribute("x", f(q[0] - w / 2)); rc.setAttribute("y", f(q[1] - 35)); rc.setAttribute("width", f(w));
      tip.setAttribute("opacity", 1);
    }
    function hideTip() { tip.setAttribute("opacity", 0); }

    function light(id) {
      svg.classList.toggle("sel", !!id);
      var near = id ? crosses(id).map(function (x) { return x[0] === id ? x[1] : x[0]; }) : [];
      [].forEach.call(svg.querySelectorAll("[data-h]"), function (e) {
        var hs = e.getAttribute("data-h").split(" ");
        e.classList.toggle("on", !!id && hs.indexOf(id) > -1);
        if (e.classList.contains("hub")) e.classList.toggle("near", near.indexOf(hs[0]) > -1);
      });
    }

    function select(id, from) {
      sel = id; light(id);
      HUBS.forEach(function (h) {
        var row = document.getElementById("row-" + h.id), open = h.id === id;
        row.classList.toggle("open", open); row.querySelector("button").setAttribute("aria-expanded", open ? "true" : "false");
        var hub = document.getElementById("hub-" + h.id); if (hub) hub.setAttribute("aria-expanded", open ? "true" : "false");
      });
      if (id && from === "map" && mq.matches) setTimeout(function () { var y = document.getElementById("row-" + id).getBoundingClientRect().top + scrollY - 70; window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" }); }, 120);
      pulses.forEach(function (p) { p.t = 1; });
    }
    on(document, "keydown", function (e) { if (e.key === "Escape" && sel) { var h = sel; select(null); var g = document.getElementById("hub-" + h); if (g) g.focus(); } });

    function pick() {
      var pool = sel ? paths.filter(function (o) { return o.h.indexOf(sel) > -1; }) : paths.filter(function (o) { return !o.bg || Math.random() < 0.35; });
      return pool[Math.floor(Math.random() * pool.length)];
    }
    function tick(now) {
      if (!running || dead) return;
      pulses.forEach(function (p, i) {
        if (p.t >= 1) { if (Math.random() < (sel ? 0.25 : 0.04)) { p.p = pick(); p.t = 0; p.v = (sel ? 0.012 : 0.006) * (0.7 + Math.random() * 0.6); p.dir = Math.random() < 0.5; } else { p.c.setAttribute("opacity", 0); return; } }
        p.t += p.v; var tt = Math.min(1, p.t), pt = p.p.el.getPointAtLength((p.dir ? tt : 1 - tt) * p.p.len);
        p.c.setAttribute("cx", f(pt.x)); p.c.setAttribute("cy", f(pt.y)); p.c.setAttribute("opacity", f(Math.sin(tt * Math.PI) * 0.95));
      });
      requestAnimationFrame(tick);
    }
    build();
    if (mq.addEventListener) on(mq, "change", build);
    if (!reduce && "IntersectionObserver" in window) {
      var eio = new IntersectionObserver(function (es) { var vis = es[0].isIntersecting; if (vis && !running) { running = true; requestAnimationFrame(tick); } else if (!vis) running = false; }, { threshold: 0.05 });
      eio.observe(svg); disposers.push(function () { running = false; eio.disconnect(); });
    }
  })();

  // one thread of light, nine shapes
  var N = 360, F = [], L = [], seed = 7;
  function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
  function closed(a, n) { var l = []; for (var i = 0; i < n; i++) l.push([a + i, a + (i + 1) % n]); return l; }
  function open(a, n) { var l = []; for (var i = 0; i < n - 1; i++) l.push([a + i, a + i + 1]); return l; }
  function astrolabe(s) { var p = [], l = [], a = 0;
    [[0.3, 80], [0.4, 120], [0.5, 160]].forEach(function (r) { for (var i = 0; i < r[1]; i++) { var t = (i / r[1]) * Math.PI * 2; p.push([0.5 + Math.cos(t) * r[0] * s, 0.5 + Math.sin(t) * r[0] * s]); } l = l.concat(closed(a, r[1])); a += r[1]; });
    F.push(p); L.push(l); }
  astrolabe(1);                                                    // 00 home
  (function () { var p = [], l = [];                               // 01 ridgelines of the Andes
    [[0.72, 0.34, 5], [0.6, 0.3, 7], [0.48, 0.22, 9]].forEach(function (r, s) {
      for (var i = 0; i < 120; i++) { var x = i / 119, tri = Math.abs(((x * r[2] + s * 0.37) % 1) - 0.5) * 2; p.push([0.02 + 0.96 * x, r[0] - tri * r[1] * (0.5 + 0.5 * Math.sin(x * 3.1 + s)) + (rnd() - 0.5) * 0.012]); }
      l = l.concat(open(s * 120, 120)); });
    F.push(p); L.push(l); })();
  (function () { var p = [], l = [], o = [0.3, 0.74];              // 02 paths across the world
    [[0.27, 0.6], [0.3, 0.3], [0.2, 0.34], [0.33, 0.26], [0.62, 0.22], [0.86, 0.5]].forEach(function (d, s) {
      for (var i = 0; i < 60; i++) { var t = i / 59, x = o[0] + (d[0] - o[0]) * t, y = o[1] + (d[1] - o[1]) * t - Math.sin(t * Math.PI) * (0.1 + 0.05 * s); p.push([x, y]); }
      l = l.concat(open(s * 60, 60)); });
    F.push(p); L.push(l); })();
  (function () { var c = [20, 40, 60, 60, 60, 60, 40, 20], p = [], l = [], st = [], a = 0;   // 03 neural network
    c.forEach(function (n, li) { st.push(a); for (var j = 0; j < n; j++) p.push([0.06 + 0.88 * li / 7 + Math.sin(j * 1.7) * 0.012, 0.5 + (j - (n - 1) / 2) * (0.8 / 60)]); a += n; });
    c.forEach(function (n, li) { if (li === c.length - 1) return; for (var j = 0; j < n; j += 2) l.push([st[li] + j, st[li + 1] + (j * 7 + 3) % c[li + 1]]); });
    F.push(p); L.push(l); })();
  (function () { var p = [], l = [];                               // 04 circles of people
    for (var c = 0; c < 12; c++) { var t = (c / 12) * Math.PI * 2, cx = 0.5 + Math.cos(t) * 0.4, cy = 0.5 + Math.sin(t) * 0.38;
      for (var i = 0; i < 30; i++) { var u = (i / 30) * Math.PI * 2; p.push([cx + Math.cos(u) * 0.06, cy + Math.sin(u) * 0.06]); }
      l = l.concat(closed(c * 30, 30)); l.push([c * 30, ((c + 1) % 12) * 30 + 15]); l.push([c * 30 + 8, ((c + 5) % 12) * 30 + 22]); }
    F.push(p); L.push(l); })();
  (function () { var p = [], l = [], i;                            // 05 knowledge ring with six nodes
    for (i = 0; i < 120; i++) { var t = (i / 120) * Math.PI * 2; p.push([0.5 + Math.cos(t) * 0.36, 0.5 + Math.sin(t) * 0.36]); }
    l = l.concat(closed(0, 120));
    for (var k = 0; k < 6; k++) { var a = (-90 + 60 * k) * Math.PI / 180, cx = 0.5 + Math.cos(a) * 0.36, cy = 0.5 + Math.sin(a) * 0.36;
      for (i = 0; i < 40; i++) { var u = (i / 40) * Math.PI * 2; p.push([cx + Math.cos(u) * 0.06, cy + Math.sin(u) * 0.06]); } l = l.concat(closed(120 + k * 40, 40)); l.push([120 + k * 40, 120 + ((k + 2) % 6) * 40 + 20]); }
    F.push(p); L.push(l); })();
  (function () { var p = [], l = [], i;                            // 06 orbits, like an atom
    [[0.46, 0.14, -30], [0.46, 0.14, 30], [0.46, 0.14, 90], [0.2, 0.2, 0]].forEach(function (o, k) { var rot = o[2] * Math.PI / 180;
      for (i = 0; i < 90; i++) { var u = (i / 90) * Math.PI * 2, x = Math.cos(u) * o[0], y = Math.sin(u) * o[1]; p.push([0.5 + x * Math.cos(rot) - y * Math.sin(rot), 0.5 + x * Math.sin(rot) + y * Math.cos(rot)]); }
      l = l.concat(closed(k * 90, 90)); });
    F.push(p); L.push(l); })();
  (function () { var p = [], l = [];                               // 07 two sets of rays meeting at one point
    for (var c = 0; c < 18; c++) { var left = c < 9, k = left ? c : c - 9, y0 = 0.14 + 0.72 * k / 8;
      for (var r = 0; r < 20; r++) { var d = r / 19; p.push([left ? 0.02 + 0.48 * d : 0.98 - 0.48 * d, y0 + (0.5 - y0) * d * d]); }
      l = l.concat(open(c * 20, 20)); }
    F.push(p); L.push(l); })();
  astrolabe(0.9);                                                  // 08 the circle returns

  var BOX = [[0.5, 0.5, 0.56], [0.62, 0.5, 0.7], [0.66, 0.4, 0.7], [0.62, 0.5, 0.46], [0.62, 0.46, 0.52], [0.55, 0.5, 0.92], [0.62, 0.5, 0.52], [0.6, 0.5, 0.6], [0.52, 0.5, 0.5]];
  var BOXM = [[0.5, 0.26, 0.9], [0.5, 0.72, 0.9], [0.5, 0.74, 0.9], [0.5, 0.74, 0.8], [0.5, 0.76, 0.8], [0.5, 0.74, 0.7], [0.5, 0.76, 0.8], [0.5, 0.76, 0.9], [0.5, 0.74, 0.8]];

  var ORDER = [0, 1, 2, 5, 4, 8];   // home, origins, world, ecosystem, room, future
  F = ORDER.map(function (i) { return F[i]; }); L = ORDER.map(function (i) { return L[i]; });
  BOX = ORDER.map(function (i) { return BOX[i]; }); BOXM = ORDER.map(function (i) { return BOXM[i]; });

  var cv = document.getElementById("net"), ctx = cv.getContext("2d"), W = 0, H = 0;
  function size() { var d = Math.min(2, window.devicePixelRatio || 1); W = innerWidth; H = innerHeight; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0); }
  on(window, "resize", size); size();
  function clamp(v) { return Math.max(0, Math.min(1, v)); }
  function ease(t) { return t * t * (3 - 2 * t); }
  var pts = new Float32Array(N * 2), car = document.getElementById("carousel");
  var plates = bands.map(function (b) { return b.querySelector(".plate"); });
  var figs = bands.map(function (b) { return b.querySelector(".fig"); });

  function frame(time) {
    if (dead) return;
    var mid = scrollY + H / 2, centres = bands.map(function (b) { return b.offsetTop + b.offsetHeight / 2; });
    var seg = 0;
    for (var k = 0; k < K - 1; k++) if (mid >= centres[k]) seg = k;
    var f = clamp((mid - centres[seg]) / (centres[seg + 1] - centres[seg]));
    var t = clamp((f - 0.3) / 0.5); t = reduce ? (t > 0.5 ? 1 : 0) : ease(t);
    var active = Math.round(seg + t), mob = W < 880;
    links.forEach(function (a, i) { a.classList.toggle("on", i === active); });
    cv.style.opacity = active === 3 ? "0.12" : "1";

    if (!reduce) {
      bands.forEach(function (b, i) {
        var d = (mid - centres[i]) / H;
        if (Math.abs(d) > 1.3) return;
        var tr;
        if (i === 1) tr = "translate3d(" + (-d * 5) + "%," + (d * 60) + "px,0) scale(" + (1.16 - Math.min(0.12, Math.abs(d) * 0.1)) + ")";      // camera drifts through the valley
        else if (i === 5) tr = "translate3d(0," + (d * 40) + "px,0)";                                                 // pan from data hall to orbit
        else if (i === 0) tr = "translate3d(0," + (d * 90) + "px,0) scale(" + (1.04 + clamp(d) * 0.1) + ")";
        else tr = "translate3d(0," + (d * 60) + "px,0) scale(" + (1.05 + Math.abs(d) * 0.05) + ")";
        plates[i].style.transform = tr;
        if (figs[i]) figs[i].style.transform = mob ? "none" : "translate3d(" + (d * (i === 0 ? 0 : -14)) + "px," + (d * 26) + "px,0) scale(" + (1 + clamp(d) * (i === 0 ? 0.05 : 0)) + ")";
      });
      var dc = (mid - centres[2]) / H;
      if (car) car.style.transform = "translate3d(" + (60 - (dc + 0.6) * (car.scrollWidth * 0.6)) + "px,0,0)";
    }

    var B = mob ? BOXM : BOX, railW = mob ? 0 : 96, A = F[seg], Z = F[seg + 1];
    var cx = (B[seg][0] + (B[seg + 1][0] - B[seg][0]) * t) * (W - railW);
    var cy = (B[seg][1] + (B[seg + 1][1] - B[seg][1]) * t) * H;
    var sz = (B[seg][2] + (B[seg + 1][2] - B[seg][2]) * t) * Math.min(W - railW, H * 1.5);
    var squash = mob ? 0.8 : 0.62;
    for (var i = 0; i < N; i++) {
      pts[i * 2] = cx + ((A[i][0] + (Z[i][0] - A[i][0]) * t) - 0.5) * sz;
      pts[i * 2 + 1] = cy + ((A[i][1] + (Z[i][1] - A[i][1]) * t) - 0.5) * sz * squash;
    }
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 0.8;
    [[L[seg], 1 - t], [L[seg + 1], t]].forEach(function (g) {
      if (g[1] < 0.02) return;
      ctx.strokeStyle = "rgba(214,170,96," + (0.5 * g[1]) + ")";
      ctx.beginPath();
      for (var j = 0; j < g[0].length; j++) { var a = g[0][j][0] * 2, b = g[0][j][1] * 2; ctx.moveTo(pts[a], pts[a + 1]); ctx.lineTo(pts[b], pts[b + 1]); }
      ctx.stroke();
    });
    ctx.fillStyle = "rgba(255,246,220,0.95)";
    for (i = 0; i < N; i++) { ctx.beginPath(); ctx.arc(pts[i * 2], pts[i * 2 + 1], 1.3, 0, 6.283); ctx.fill(); }
    if (!reduce) {
      var G = t > 0.5 ? L[seg + 1] : L[seg], tt = time * 0.00035;
      ctx.fillStyle = "#fff"; ctx.shadowColor = "rgba(236,190,110,1)"; ctx.shadowBlur = 10;
      for (var q = 0; q < G.length; q += 9) { var a2 = G[q][0] * 2, b2 = G[q][1] * 2, m = (tt + q * 0.37) % 1;
        ctx.beginPath(); ctx.arc(pts[a2] + (pts[b2] - pts[a2]) * m, pts[a2 + 1] + (pts[b2 + 1] - pts[a2 + 1]) * m, 2, 0, 6.283); ctx.fill(); }
      ctx.shadowBlur = 0;
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  [].forEach.call(root.querySelectorAll("[data-contact]"), function (b) { on(b, "click", function () { opts.openContact(); }); });

  return function cleanup() {
    dead = true;
    disposers.forEach(function (d) { d(); });
    ["rail", "tabs", "ecoList", "legend", "eco"].forEach(function (id) { var e = document.getElementById(id); if (e) e.innerHTML = ""; });
  };
}
