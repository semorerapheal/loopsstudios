
  const menuDiv = document.querySelector('.ic');
  const menuIcon = document.querySelector('.ic i');
  const menuItems = document.querySelector('.open');
  const darkNav = document.querySelector('nav')

  

  menuDiv.onclick = function(){
    menuItems.classList.toggle('open');
    const isOpen = menuItems.classList.contains('open')

    menuIcon.classList = isOpen ? 'fa-solid fa-bars'  : 'fa-solid fa-x'

  darkNav.style.backgroundColor = isOpen ? 'initial' : 'black';
  darkNav.style.width = isOpen ? '90%' : '100%';
  darkNav.style.paddingLeft = isOpen ? 'initial' : '2rem';
  darkNav.style.paddingRight = isOpen ? 'initial' : '2rem'
  };

  
  

  
//   .side-bar{
//     width: 100%;
//     margin: auto;
//     display: flex; 
//     flex-direction: column;
//     background-color: black;
//     padding: 3rem 2rem;
//     font-family: Alata;
//     position: absolute;
//     top: 6rem;
//     left: 0.0rem;
    
    


// }

// .side-bar .hhh{
// display: flex;
// align-items: center;
// justify-content: space-between;
// padding-bottom: 2rem;
// border: 1px solid green;
// }

// .side-bar h4{
// font-size: 1.1rem;
// }

// .side-bar .pos{
// display: flex;
// flex-direction: column;
// gap: 1rem;
// font-size: 0.9rem;
// }