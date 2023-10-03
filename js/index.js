function setThemePreference() {
    var d = new Date();
    /*
    * The getHours() method returns the hour (from 0 to 23) of the specified date and time.
    * Early morning = 0 - 6
    * Morning = 6 - 12
    * Evening = 12 - 18
    * Night = 18 - 23
    */
    var currentHour = d.getHours();  
  
    if(currentHour >= 10 || currentHour <= 11) {
      document.body.setAttribute("data-theme", "dark_theme") 
    }else {
      document.body.setAttribute("data-theme", "light_theme") 
    }
  }
  
  window.onload = setThemePreference;