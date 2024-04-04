const tabTexts = document.querySelectorAll('.query-tab-txt');

  tabTexts.forEach(tabText => {
    tabText.addEventListener('click', () => {
      tabTexts.forEach(tab => tab.classList.remove('active'));
      tabText.classList.add('active');
    });
  });

  const addButton = document.querySelector('.query-box-button');

addButton.addEventListener('click', () => {
  // Create the HTML content for the new div
  const newItemHTML = `
    <div class="query-hist-box">
      <p>
        <span class="item-number">1</span>
        <span class="item-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam itaque distinctio magni aliquam reiciendis, in quam dolore earum recusandae. Deleniti.</span>
      </p>
      <div class="sticks-spinner">
        <div class="loader"></div>
      </div>
    </div>
  `;

  // Insert the new div at the beginning of the .query-hist-items container
  document.querySelector('.query-hist-items').insertAdjacentHTML('afterbegin', newItemHTML);

  // Change the content of .sticks-spinner after 10 seconds
  setTimeout(() => {
    const spinnerDiv = document.querySelector('.sticks-spinner');
    const tickMarkHTML = `
      <div class="tick-mark">
        <div class="tick-inner">&check;</div>
      </div>
    `;
    spinnerDiv.outerHTML = tickMarkHTML;
  }, 10000);
});

document.getElementById('tab2').addEventListener('click', () => {
    // Remove content from other tabs if any
    const queryHistItems = document.querySelector('.query-hist-items');
    queryHistItems.innerHTML = '';

    // Add content for tab2
    const newItemHTML = `
    <div class="query-hist-box">
    <p>
      <span class="item-number">1</span
      ><span class="item-txt"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Veniam itaque distinctio magni aliquam reiciendis, in quam
        dolore earum recusandae. Deleniti.</span
      >
      <div class="spinner">
          <div class="arrow">&#8635;
              </div>
        </div>
        
    </p>
  </div>

  <div class="query-hist-box">
    <p>
      <span class="item-number">1</span
      ><span class="item-txt"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Veniam itaque distinctio magni aliquam reiciendis, in quam
        dolore earum recusandae. Deleniti.</span
      >
    </p>
    <div class="sticks-spinner">
      <div class="loader"></div>
      
    </div>
  </div>
  <div class="query-hist-box">
    <p>
      <span class="item-number">1</span
      ><span class="item-txt"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Veniam itaque distinctio magni aliquam reiciendis, in quam
        dolore earum recusandae. Deleniti.</span
      >
    </p>
    <div class="tick-mark">
        <div class="tick-inner">&check;</div>
    </div>
    
  </div>
    `;
    queryHistItems.insertAdjacentHTML('beforeend', newItemHTML);
});

document.getElementById('tab1').addEventListener('click', () => {
    // Remove content from other tabs if any
    const queryHistItems = document.querySelector('.query-hist-items');
    queryHistItems.innerHTML = '';

    // Add content for tab2
    const newItemHTML = `
    <div class="query-hist-box">
    <p>
      <span class="item-number">1</span
      ><span class="item-txt"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Veniam itaque distinctio magni aliquam reiciendis, in quam
        dolore earum recusandae. Deleniti.</span
      >
      <div class="spinner">
          <div class="arrow">&#8635;
              </div>
        </div>
        
    </p>
  </div>

  <div class="query-hist-box">
    <p>
      <span class="item-number">1</span
      ><span class="item-txt"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Veniam itaque distinctio magni aliquam reiciendis, in quam
        dolore earum recusandae. Deleniti.</span
      >
    </p>
    <div class="sticks-spinner">
      <div class="loader"></div>
      
    </div>
  </div>
  <div class="query-hist-box">
    <p>
      <span class="item-number">1</span
      ><span class="item-txt"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Veniam itaque distinctio magni aliquam reiciendis, in quam
        dolore earum recusandae. Deleniti.</span
      >
    </p>
    <div class="tick-mark">
        <div class="tick-inner">&check;</div>
    </div>
    
  </div>
    `;
    queryHistItems.insertAdjacentHTML('beforeend', newItemHTML);
});
// ---------------------------------------------------------------------



