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
