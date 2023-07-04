//* ============ DETECT SCREEN WIDTH ============ *//

// Create a function that detect the screen width
function getScreenWidth() {
  let screenWidth = window.innerWidth;
  // Change image on screen resize
  switch (true) {
    // Screen equal  or more 1200px (1000)
    case screenWidth >= 1200:
      ghStats1.src =
        "https://github-readme-stats.vercel.app/api?username=christianortiz-dev&hide_border=true&include_all_commits=false&count_private=false&card_width=1000&bg_color=14132170&title_color=fe428e&text_color=a1f2ec&icon_color=fe428e";
      ghStats2.src =
        "https://github-readme-streak-stats.herokuapp.com/?user=christianortiz-dev&hide_border=true&card_width=1000&background=14132170&stroke=fe428e&fire=fe428e&ring=fe428e&currStreakNum=f8d847&currStreakLabel=f8d847&sideLabels=fe428e&dates=90d7d3&sideNums=fe428e&mode=&date_format=M j[, Y]";
      ghStats3.src =
        "https://github-readme-stats.vercel.app/api/top-langs/?username=christianortiz-dev&hide_border=true&include_all_commits=false&count_private=false&layout=compact&card_width=1000&bg_color=14132170&title_color=fe428e&text_color=a1f2ec&icon_color=fe428e&langs_count=10";

      break;
    // Screen between 1200px - 992px (800)
    case screenWidth < 1200 && screenWidth >= 992:
      ghStats1.src =
        "https://github-readme-stats.vercel.app/api?username=christianortiz-dev&hide_border=true&include_all_commits=false&count_private=false&card_width=800&bg_color=14132170&title_color=fe428e&text_color=a1f2ec&icon_color=fe428e";
      ghStats2.src =
        "https://github-readme-streak-stats.herokuapp.com/?user=christianortiz-dev&hide_border=true&card_width=800&background=14132170&stroke=fe428e&fire=fe428e&ring=fe428e&currStreakNum=f8d847&currStreakLabel=f8d847&sideLabels=fe428e&dates=90d7d3&sideNums=fe428e&mode=&date_format=M j[, Y]";
      ghStats3.src =
        "https://github-readme-stats.vercel.app/api/top-langs/?username=christianortiz-dev&hide_border=true&include_all_commits=false&count_private=false&layout=compact&card_width=800&bg_color=14132170&title_color=fe428e&text_color=a1f2ec&icon_color=fe428e&langs_count=10";

      break;

    // Screen between 992px - 768px (700)
    case screenWidth < 992 && screenWidth >= 768:
      ghStats1.src =
        "https://github-readme-stats.vercel.app/api?username=christianortiz-dev&hide_border=true&include_all_commits=false&count_private=false&card_width=700&bg_color=14132170&title_color=fe428e&text_color=a1f2ec&icon_color=fe428e";
      ghStats2.src =
        "https://github-readme-streak-stats.herokuapp.com/?user=christianortiz-dev&hide_border=true&card_width=700&background=14132170&stroke=fe428e&fire=fe428e&ring=fe428e&currStreakNum=f8d847&currStreakLabel=f8d847&sideLabels=fe428e&dates=90d7d3&sideNums=fe428e&mode=&date_format=M j[, Y]";
      ghStats3.src =
        "https://github-readme-stats.vercel.app/api/top-langs/?username=christianortiz-dev&hide_border=true&include_all_commits=false&count_private=false&layout=compact&card_width=700&bg_color=14132170&title_color=fe428e&text_color=a1f2ec&icon_color=fe428e&langs_count=10";

      break;

    // Screen between 768px - 600px (600)
    case screenWidth < 768 && screenWidth >= 600:
      ghStats1.src =
        "https://github-readme-stats.vercel.app/api?username=christianortiz-dev&hide_border=true&include_all_commits=false&count_private=false&card_width=600&bg_color=14132170&title_color=fe428e&text_color=a1f2ec&icon_color=fe428e";
      ghStats2.src =
        "https://github-readme-streak-stats.herokuapp.com/?user=christianortiz-dev&hide_border=true&card_width=600&background=14132170&stroke=fe428e&fire=fe428e&ring=fe428e&currStreakNum=f8d847&currStreakLabel=f8d847&sideLabels=fe428e&dates=90d7d3&sideNums=fe428e&mode=&date_format=M j[, Y]";
      ghStats3.src =
        "https://github-readme-stats.vercel.app/api/top-langs/?username=christianortiz-dev&hide_border=true&include_all_commits=false&count_private=false&layout=compact&card_width=600&bg_color=14132170&title_color=fe428e&text_color=a1f2ec&icon_color=fe428e&langs_count=10";

      break;

    // Screen between 600px - 400px (500)
    case screenWidth < 600 && screenWidth >= 400:
      ghStats1.src =
        "https://github-readme-stats.vercel.app/api?username=christianortiz-dev&hide_border=true&include_all_commits=false&count_private=false&card_width=500&bg_color=14132170&title_color=fe428e&text_color=a1f2ec&icon_color=fe428e";
      ghStats2.src =
        "https://github-readme-streak-stats.herokuapp.com/?user=christianortiz-dev&hide_border=true&card_width=500&background=14132170&stroke=fe428e&fire=fe428e&ring=fe428e&currStreakNum=f8d847&currStreakLabel=f8d847&sideLabels=fe428e&dates=90d7d3&sideNums=fe428e&mode=&date_format=M j[, Y]";
      ghStats3.src =
        "https://github-readme-stats.vercel.app/api/top-langs/?username=christianortiz-dev&hide_border=true&include_all_commits=false&count_private=false&layout=compact&card_width=500&bg_color=14132170&title_color=fe428e&text_color=a1f2ec&icon_color=fe428e&langs_count=10";

      break;

    // Screen equal or less 400px (300)
    case screenWidth < 400:
      ghStats1.src =
        "https://github-readme-stats.vercel.app/api?username=christianortiz-dev&hide_border=true&include_all_commits=false&count_private=false&card_width=400&bg_color=14132170&title_color=fe428e&text_color=a1f2ec&icon_color=fe428e";
      ghStats2.src =
        "https://github-readme-streak-stats.herokuapp.com/?user=christianortiz-dev&hide_border=true&card_width=400&background=14132170&stroke=fe428e&fire=fe428e&ring=fe428e&currStreakNum=f8d847&currStreakLabel=f8d847&sideLabels=fe428e&dates=90d7d3&sideNums=fe428e&mode=&date_format=M j[, Y]";
      ghStats3.src =
        "https://github-readme-stats.vercel.app/api/top-langs/?username=christianortiz-dev&hide_border=true&include_all_commits=false&count_private=false&layout=compact&card_width=400&bg_color=14132170&title_color=fe428e&text_color=a1f2ec&icon_color=fe428e&langs_count=10";

      break;

    //Default
    default:
      break;
  }
}

// Call function for a initial detect
getScreenWidth();

// Detect when the screen resizes and excute the function
window.addEventListener("resize", getScreenWidth);

//* ============ PROJECTS ICONS ============ *//

// Function detects classes
function autoProjectsIcons() {
  // Looking for elements with "project-icon" class
  let iconWrapper = document.getElementsByClassName("project-icon");
  // Run through array to all elements
  for (let i = 0; i < iconWrapper.length; i++) {
    // Assign array into a var
    let content = iconWrapper[i].innerText;
    // Switch cases for each icon
    switch (true) {
      //*==========*//
      case iconWrapper[i].innerHTML == "html5":
        iconWrapper[i].innerHTML =
          "<img src= 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'>";
        break;

      //*==========*//
      case iconWrapper[i].innerHTML == "css3":
        iconWrapper[i].innerHTML =
          "<img src= 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'>";
        break;

      //*==========*//
      case iconWrapper[i].innerHTML == "javascript":
        iconWrapper[i].innerHTML =
          "<img src= 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'>";
        break;

      //*==========*//
      case iconWrapper[i].innerHTML == "php":
        iconWrapper[i].innerHTML =
          "<img src= 'https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white'>";
        break;

      //*==========*//
      case iconWrapper[i].innerHTML == "mysql":
        iconWrapper[i].innerHTML =
          "<img src= 'https://img.shields.io/badge/mysql-00618b.svg?style=for-the-badge&logo=mysql&logoColor=white'>";
        break;

      //*==========*//
      case iconWrapper[i].innerHTML == "bootstrap":
        iconWrapper[i].innerHTML =
          "<img src= 'https://img.shields.io/badge/bootstrap-7310f5.svg?style=for-the-badge&logo=bootstrap&logoColor=white'>";
        break;

      default:
        break;
    }
  }
}

autoProjectsIcons();
