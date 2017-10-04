var calc=require('./phoneNumber');
var rs=require('readline-sync');
var x=rs.question('Enter phone number: ');
 var regexp=/[&\/\\#,+()$~%.'":*?<>{}-]/;
 if(x.match(regexp))
      {
         y= x.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g,'');
        
        if(y==/[^a-z A-z]/g)
        {

          console.log("");
        }
        else if(y.length=11)
        {
          if(y.charAt( 0 ) === '1' )
         {
        
        var   mystring=y.slice(1);
            if(mystring.charAt( 1 ) ==='0')
            {
            console.log("");
            }

          else if(mystring.charAt( 1 ) === '1')
             {
             console.log("");
             }
             else if(mystring.charAt( 4 ) === '0')
              {
             console.log("");
             }
              else if(mystring.charAt( 4 ) === '1')
               {
                console.log("");
               }
             else
            {
              console.log("final number is"+mystring);
             }  
           
           }
            else
            {
              console.log("final number is"+y);
             } 
          }
          
        else if(y.length=10)
        {
         
         if(y.charAt( 0 ) ==='0')
            {
            console.log("");
            }

          else if(y.charAt( 0 ) === '1')
             {
             console.log("");
             }
             else if(y.charAt( 3 ) === '0')
              {
             console.log("");
             }
              else if(y.charAt( 3 ) === '1')
               {
                console.log("");
               }
             else
            {
              console.log("final number is "+y);
             }  
        }
}
     
        else
        {
          console.log("");
        }

