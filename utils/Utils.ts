export class Utils {
    currentDate = new Date();

    construcor () {
        this.currentDate = this.currentDate
    }

    buildDate = ()  => {
         const year = String(this.currentDate.getFullYear());
         const month = String(this.currentDate.getMonth() + 1).padStart(2, '0'); 
         const day = String(this.currentDate.getDate()).padStart(2, '0');    
         const formattedDate = `${year}-${month}-${day}`;
         return formattedDate;
    }
    
  }