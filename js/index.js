document.querySelector('.formBott').addEventListener('click', f1);

function f1() {
    alert('Herzlichen Dank! Wir werden Sie in Kürze kontaktieren!');
    async function postJSON(data) {
        try {
          const response = await fetch("https://testbot.ua/send.php", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          console.log("Success:", result);
        } catch (error) {
          console.error("Error:", error);
        }
      }
      
      const data = { username: "example" };
      postJSON(data);
};

document.querySelector('.mBott1').onclick = function() {
    window.scrollTo({
        top: 2400
    });
}

document.querySelector('.contBott').onclick = function() {
    window.scrollTo({
        top: 2400
    });
}

document.querySelector('.botCont3').onclick = function() {
    window.scrollTo({
        top: 2400
    });
}

document.querySelector('.contBotton4').onclick = function() {
    window.scrollTo({
        top: 2400
    });
}

document.querySelector('.mBott1mobi').onclick = function() {
    window.scrollTo({
        top: 2900
    });
}

document.querySelector('.mBott2mobi').onclick = function() {
    window.scrollTo({
        top: 2900
    });
}

document.querySelector('.botCont3mobi').onclick = function() {
    window.scrollTo({
        top: 2900
    });
}

document.querySelector('.btn4mb').onclick = function() {
    window.scrollTo({
        top: 2900
    });
}


document.querySelector('.menuimg').onclick = function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdownlist");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

document.querySelector('.comback').onclick = function() {
    document.querySelector('.dropdownlist').classList.toggle("show");
}






