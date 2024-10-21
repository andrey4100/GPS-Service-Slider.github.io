const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 15,
    slidesPerView: 1.25,
  
    // If we need pagination
    pagination:{
        el: '.my-custom-pagination-div',
        clickable: true,
        renderBullet: (index, className) => {
        return '<span class="' + className + '">'  + "</span>";
        },
      },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      420: {
        slidesPerView: 1.65,
        spaceBetween: 15,
      },
      520: {
        slidesPerView: 2.05,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });

  const showMore = document.querySelector('.brand__btn--show');
  const showLess = document.querySelector('.brand__btn--close');
  const productsLength = document.querySelectorAll('.brand__cards-item').length;
  let items = 6;

  showMore.addEventListener('click', () => {
    items += 5;
    const array = Array.from(document.querySelector('.brand__cards-list').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));
    if (visItems.length === productsLength) {
      showMore.classList.remove("visible");
      showMore.classList.add("hidden");
      showLess.classList.add("visible");
    }
  });

  showLess.addEventListener('click', () => {
    items -= 5;

    const array = Array.from(document.querySelector('.brand__cards-list').children);
    const visItems = array.slice(items, productsLength);

    visItems.forEach(el => el.classList.remove('is-visible'));
    if (items === 6) {
      showLess.classList.remove("visible");
      showMore.classList.add("visible");
      showLess.classList.add("hidden");
    }
  });

  
