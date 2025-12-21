// Mobile nav toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
menuToggle && menuToggle.addEventListener('click', ()=>{
  nav.classList.toggle('show');
});

// Simple contact form handler (no backend)
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    console.log('Contact submit', {name, email, message});
    alert('Thanks, ' + (name||'there') + '! Your message was captured in the console.');
    form.reset();
  });
}

// Project gallery modal viewer
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLive = document.getElementById('modal-live');
const modalGit = document.getElementById('modal-git');
const modalClose = document.getElementById('modal-close');

function openModal(data){
  if(!modal) return;
  modalImg.src = data.img || '';
  modalImg.alt = data.title || '';
  modalTitle.textContent = data.title || '';
  modalDesc.textContent = data.desc || '';
  modalLive.href = data.live || '#';
  modalGit.href = data.git || '#';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  modalImg.src = '';
}

document.addEventListener('click', e=>{
  const view = e.target.closest && e.target.closest('.view-link');
  if(view){
    e.preventDefault();
    openModal({
      img: view.dataset.img,
      title: view.dataset.title,
      desc: view.dataset.desc,
      live: view.dataset.live,
      git: view.dataset.git,
    });
    return;
  }

  if(e.target.id === 'modal-close' || e.target.classList.contains('modal-backdrop')){
    closeModal();
  }
});

document.addEventListener('keydown', e=>{
  if(e.key === 'Escape') closeModal();
});