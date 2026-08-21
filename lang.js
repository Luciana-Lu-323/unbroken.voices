(function(){
  let lang=localStorage.getItem('uv-lang')||'zh';
  function apply(l){
    lang=l; localStorage.setItem('uv-lang',l);
    const btn=document.getElementById('langToggle');
    if(btn) btn.textContent=l==='zh'?'EN':'中';
    document.querySelectorAll('[data-zh][data-en]').forEach(el=>{
      el.textContent=l==='zh'?el.dataset.zh:el.dataset.en;
    });
    document.documentElement.lang=l==='zh'?'zh-TW':'en';
  }
  document.addEventListener('DOMContentLoaded',()=>{
    apply(lang);
    const btn=document.getElementById('langToggle');
    if(btn) btn.addEventListener('click',()=>apply(lang==='zh'?'en':'zh'));
  });
})();