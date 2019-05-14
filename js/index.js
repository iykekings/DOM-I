const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// header
const navMenus = document.querySelectorAll('nav a');
navMenus.forEach((navItem, i) => {
  navItem.textContent = siteContent['nav'][`nav-item-${i + 1}`];
  navItem.style.color = 'green';
});

// cta
const ctaLogo = document.getElementById('cta-img');
ctaLogo.setAttribute('src', siteContent['cta']['img-src']);
document.querySelector('.cta .cta-text h1').textContent =
  siteContent['cta']['h1'];
document.querySelector('.cta .cta-text button').textContent =
  siteContent['cta']['button'];

// main-content
const mainContentTexts = document.querySelectorAll(
  '.main-content .text-content'
);
let mCValues = Object.values(siteContent['main-content']);
const mcImgUrl = mCValues.splice(4, 1);
mainContentTexts.forEach((content, i) => {
  const [h4, p] = mCValues.slice(i * 2, i * 2 + 2);
  content.querySelector('h4').textContent = h4;
  content.querySelector('p').textContent = p;
});
document.getElementById('middle-img').setAttribute('src', mcImgUrl);

// contact
const contactItems = document.querySelectorAll('.contact *');
const contactTexts = Object.values(siteContent['contact']);
contactItems.forEach((cItem, i) => {
  cItem.textContent = contactTexts[i];
});

// footer
document.querySelector('footer p').textContent =
  siteContent['footer']['copyright'];

// .appendChild and .prepend
const firstNav = document.createElement('a');
firstNav.textContent = 'First';
document.querySelector('nav').prepend(firstNav);

const lastNav = document.createElement('a');
lastNav.textContent = 'Last';
document.querySelector('nav').appendChild(lastNav);
