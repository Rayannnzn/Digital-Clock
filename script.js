  function update(){
    const now = new Date();
    let hours = now.getHours();
    const merd = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const mins = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timestring = `${hours}:${mins}:${seconds} ${merd}`;
    document.getElementById("clock").textContent = timestring;

  }

update();
setInterval(update,1000);











    







        





      





      
    


  




