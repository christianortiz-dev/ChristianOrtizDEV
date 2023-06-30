//* ============ DETECT SCREEN WIDTH ============

// Create a function that detect the screen width
function getScreenWidth() {
  let screenWidth = window.innerWidth;
  // Change image on screen resize
  switch (true) {
    // Screen 1200 or more
    case screenWidth >= 1200:
      ghStats1.src =
        "https://github-readme-stats.vercel.app/api?username=christianortiz-dev&theme=radical&hide_border=true&include_all_commits=false&count_private=false&card_width=1000";
      ghStats2.src =
        "https://github-readme-streak-stats.herokuapp.com/?user=christianortiz-dev&theme=radical&hide_border=true&card_width=1000";
      ghStats3.src =
        "https://github-readme-stats.vercel.app/api/top-langs/?username=christianortiz-dev&theme=radical&hide_border=true&include_all_commits=false&count_private=false&layout=compact&card_width=1000";

      break;
    // Screen between 1200 - 992
    case screenWidth < 1200 && screenWidth >= 992:
      ghStats1.src =
        "https://github-readme-stats.vercel.app/api?username=christianortiz-dev&theme=radical&hide_border=true&include_all_commits=false&count_private=false&card_width=800";
      ghStats2.src =
        "https://github-readme-streak-stats.herokuapp.com/?user=christianortiz-dev&theme=radical&hide_border=true&card_width=800";
      ghStats3.src =
        "https://github-readme-stats.vercel.app/api/top-langs/?username=christianortiz-dev&theme=radical&hide_border=true&include_all_commits=false&count_private=false&layout=compact&card_width=800";
      break;

    // // Screen between 992 - 768
    // case screenWidth
    default:
      break;
  }
}

// Call function for a initial detect
getScreenWidth();

// Detect when the screen resizes and excute the function
window.addEventListener("resize", getScreenWidth);
