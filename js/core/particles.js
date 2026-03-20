/* ════════════════════════════════════════════════════
   PARTICLE SYSTEM
════════════════════════════════════════════════════ */
(function() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  window.addEventListener('resize', resize); resize();

  function mkP(fx) {
    const t = Math.random()<.50?'ember':Math.random()<.55?'dust':'spark';
    const x = fx!==undefined?fx:Math.random()*W;
    const s = t==='spark'?Math.random()*1.1+.4:t==='ember'?Math.random()*2.2+1:Math.random()*1.6+.6;
    return { x, y:Math.random()*H+H, vx:(Math.random()-.5)*.30, vy:-(Math.random()*.62+.20), size:s, type:t, life:1, decay:Math.random()*.0022+.0007, wobble:Math.random()*Math.PI*2, wobbleSpeed:(Math.random()-.5)*.022 };
  }
  for (let i=0;i<80;i++) { const p=mkP(); p.y=Math.random()*H; particles.push(p); }

  window.spawnBurst = function(color) {
    const cx=(W-224)/2;
    for (let i=0;i<28;i++) {
      const p=mkP(cx+(Math.random()-.5)*180);
      p.y=H*.50+(Math.random()-.5)*90;
      p.vy=-(Math.random()*2.4+1.4); p.vx=(Math.random()-.5)*1.8;
      p.decay=Math.random()*.011+.005; p.type=Math.random()<.5?'spark':'ember';
      if(color) p.customColor=color;
      particles.push(p);
    }
  };

  function draw() {
    ctx.clearRect(0,0,W,H);
    while(particles.length<80) particles.push(mkP());
    for (let i=particles.length-1;i>=0;i--) {
      const p=particles[i]; p.wobble+=p.wobbleSpeed; p.x+=p.vx+Math.sin(p.wobble)*.28; p.y+=p.vy; p.life-=p.decay;
      if(p.life<=0||p.y<-20){particles.splice(i,1);continue;}
      const a=Math.min(p.life,1)*(p.type==='dust'?.32:.65);
      ctx.save(); ctx.globalAlpha=a;
      if(p.customColor) { ctx.fillStyle=p.customColor; ctx.beginPath(); ctx.arc(p.x,p.y,p.size*2,0,Math.PI*2); ctx.fill(); }
      else if(p.type==='ember') { const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size*2.4); g.addColorStop(0,'rgba(255,172,55,1)'); g.addColorStop(.4,'rgba(215,85,18,.8)'); g.addColorStop(1,'rgba(170,35,0,0)'); ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,p.size*2.4,0,Math.PI*2); ctx.fill(); }
      else if(p.type==='spark') { ctx.fillStyle='rgba(255,228,135,1)'; ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill(); }
      else { const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size*3); g.addColorStop(0,'rgba(195,148,75,.45)'); g.addColorStop(1,'rgba(195,148,75,0)'); ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,p.size*3,0,Math.PI*2); ctx.fill(); }
      ctx.restore();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

