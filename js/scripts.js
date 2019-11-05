let card = document.querySelectorAll('.card');
let shadow = "shadow";
let shadowFilter = "shadow-filter";
let classSelected = "selected";
let isSelected = false;
let selectedElement;

for(let i = 0; i < card.length; i++)
{
  mouseEvents(card[i], function(){
    addClass(card[i], shadow);
  }, function(){
    removeClass(card[i], shadow);
  });

  card[i].addEventListener('click', function()
  {
    if (isSelected)
    {
      if (selectedElement === card[i])
      {
        removeClass(card[i], classSelected);
        isSelected = false;
        selectedElement = null;
      }
      else
      {
        let temp = selectedElement.style.order;
        selectedElement.style.order = card[i].style.order;
        card[i].style.order = temp;
        removeClass(selectedElement, classSelected);
        isSelected = false;
        selectedElement = null;
      }
    }
    else
    {
      addClass(card[i], classSelected);
      isSelected = true;
      selectedElement = card[i];
    }
  });

  card[i].style.order = `${i}`;
}

function mouseEvents(element, mOver, mLeave)
{
  element.addEventListener("mouseover", mOver);
  element.addEventListener("mouseleave", mLeave);
}

function addClass(myElement, myClass)
{
  myElement.classList.add(myClass);
}

function removeClass(myElement, myClass)
{
  myElement.classList.remove(myClass);
}
