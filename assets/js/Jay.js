var _i = document.getElementsByClassName("introduction")[0];
    var _p = document.getElementsByClassName("projects")[0];
    var _c = document.getElementsByClassName("contact")[0];
    var _d = document.getElementsByClassName("donation")[0];
    _p.style.display = "none";
    _c.style.display = "none";
    _d.style.display = "none";
    //Storing current element class in an array
    x = ['introduction'];
    function showIntro(e, l){
      document.getElementsByClassName(x[0])[0].style.display = "none";
      x.pop();
      x.push(e);
      _i.style.display = "block";
       // get all 'li' elements
      var a = document.getElementsByTagName('a');
      // loop through all 'a' elements
      for (i = 0; i < a.length; i++) {
          // Remove the class 'active' if it exists
          a[i].classList.remove('active');
      }
      // add 'active' classs to the element that was clicked
      l.classList.add('active');
    }
    
    function showProjects(e, l){
      document.getElementsByClassName(x[0])[0].style.display = "none";
      x.pop();
      x.push(e);
      _p.style.display = "block";
      // get all 'li' elements
      var a = document.getElementsByTagName('a');
      // loop through all 'a' elements
      for (i = 0; i < a.length; i++) {
          // Remove the class 'active' if it exists
          a[i].classList.remove('active');
      }
      // add 'active' classs to the element that was clicked
      l.classList.add('active');
    }
    
    function showContact(e, l){
      document.getElementsByClassName(x[0])[0].style.display = "none";
      x.pop();
      x.push(e);
      _c.style.display = "block";
      // get all 'li' elements
      var a = document.getElementsByTagName('a');
      // loop through all 'a' elements
      for (i = 0; i < a.length; i++) {
          // Remove the class 'active' if it exists
          a[i].classList.remove('active');
      }
      // add 'active' classs to the element that was clicked
      l.classList.add('active');
    }
    
    function showDonate(e, l){
      document.getElementsByClassName(x[0])[0].style.display = "none";
      x.pop();
      x.push(e);
      _d.style.display = "block";
      // get all 'li' elements
      var a = document.getElementsByTagName('a');
      // loop through all 'a' elements
      for (i = 0; i < a.length; i++) {
          // Remove the class 'active' if it exists
          a[i].classList.remove('active');
      }
      // add 'active' classs to the element that was clicked
      l.classList.add('active');
    }

    //Color toggler
    var toggler = document.getElementById('toggler');
    toggler.addEventListener('click', toggleColor);
    var colors = ['#D2691E', '#556B2F', '#9932CC', '#E9967A', '#FF1493', '#1E90FF', '#191970', '#808000', '#6B8E23', '#4682B4', '#9ACD32'];

    function toggleColor(){
      var leftPanel = document.getElementsByClassName('left-panel')[0];
      var color = colors[Math.floor(Math.random()*colors.length)];
      leftPanel.style.background = color;
    }
