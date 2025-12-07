// Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const mobileNav = document.getElementById('mobileNav');
    if(menuBtn){
      menuBtn.addEventListener('click', ()=>{
        const open = mobileNav.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open);
        mobileNav.setAttribute('aria-hidden', !open);
      })
    }

    // Accordion toggle
    document.querySelectorAll('.acc-head').forEach(head=>{
      head.addEventListener('click', ()=>{
        const id = head.getAttribute('data-toggle');
        const body = document.getElementById(id);
        if(!body) return;
        const visible = body.style.display === 'block';
        document.querySelectorAll('.acc-body').forEach(b=>b.style.display='none');
        if(!visible) body.style.display='block';
      })
    })

    // Show reglament full
    document.querySelectorAll('.download-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const id = btn.getAttribute('data-doc') + '-full';
        const el = document.getElementById(id);
        if(el) el.style.display = el.style.display === 'block' ? 'none' : 'block';
      })
    })

    // contact form (simple client-side demo)
    document.getElementById('contactForm').addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name || !email){
        alert('Merci de renseigner votre nom et votre email.');
        return;
      }
      // In production: send to server or use an email service. Here we simulate success.
      alert('Merci ' + name + " — votre message a bien été reçu. Nous vous contacterons bientôt.");
      e.target.reset();
    })

    // Smooth link scrolling
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const href = a.getAttribute('href');
        if(href.length>1){
          e.preventDefault();
          const target = document.querySelector(href);
          if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
        }
      })
    });