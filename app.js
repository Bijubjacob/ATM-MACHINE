    


    let screen = document.querySelector(".scrn2");
    let keyPad = document.querySelector(".keys");
    const dePosit = document.querySelector("#dePt");
    let checkingAcc = document.querySelector(".acctn");
    let savingsAcc = document.querySelector(".acctn1");
    let clear = document.querySelector("#cLr");
    const ckBal = document.querySelector("#chBal");
    


    const addToScreen = (info) => {
        screen.append(info)
    }
    
    const findMyVal = (evt) =>{
        addToScreen(evt.target.textContent)
    }

    const clearScreen = () => {
        screen.innerHTML = " "
    }
    
   clear.addEventListener("click", event => {
            screen.innerHTML = ""
            screen.append;
        });


    //Intialise username value with varible userID
    const userId = document.querySelector(".cardSlot");

    userId.addEventListener("click", username);

function username() {
    var realUn = "bijubjacob";
    var uName = prompt("Please enter username:");
    if (realUn == uName) {
       let WelCome = alert("Welcome to ATM");
       

       // Function to update the displayed balance
       function updateBalance(balance) {
         checkingAcc.textContent = `Checking Account: $${balance.toFixed(2)}`;
       }
       // Initial balance
        let accountBalance = 2000;
        updateBalance(accountBalance);

        // Function to update the displayed Savings balance
       function updateBalance1(balance) {
        savingsAcc.textContent = `Savings Account: $${balance.toFixed(2)}`;
      }
      // Example initial balance
       let accountBalance1 = 1000;
       updateBalance1(accountBalance1);

       // Deposit EventListner to display balance
        dePosit.addEventListener("click", event => {

            updateBalance1(accountBalance);
            updateBalance1(accountBalance1);


        screen.innerHTML = 'Checking Account: $' + accountBalance + '<br>    Savings Account: $' + accountBalance1;
        screen.style.fontSize = "xx-large";
            
        });
      

        clear.addEventListener("click", event => {
            screen.innerHTML = ""
            screen.append;
        });

        ckBal.addEventListener("click", event => {

            updateBalance1(accountBalance);
            updateBalance1(accountBalance1);


        screen.innerHTML = 'Checking Account: $' + accountBalance + '<br>    Savings Account: $' + accountBalance1 ;
        screen.style.fontSize = "xx-large";
        
        });



    }
      
    else {
        if (realUn != uName)
            return alert("Wrong Password");
    }
}
    
    
    // var a = 1234;
    // //To check Pin entered is correct or not
    // if(p==a)
    // {
    // document.getElementById ("demo").innerHTML ="Please Choose transcation";
    // document.getElementById ('options12'). style.display = 'block'; //if pin number is correct options will Display.
    // }
    // else
    // {
    // document.getElementById ("demo").innerHTML = "Invalid pin";
    // }

    // function myfunction(val)
    // {
    // //function to display balance amount
    // m = 10000;
    // if(val==1)//Option 1 is select to shows balance amount
    // {
    // document.getElementById ('demo1' ).innerHTML ="Your amount is: "+m;
    // document.getElementById ('display' ). style.display = 'none';
    // document.getElementById ('display1' ). style.display = 'none';
    // }
    // if(val==2)//Option 2 select to display text field to enter withdraw amount
    // {
    // document.getElementById ('display').style.display = 'block';
    // document.getElementById ('display1').style.display = 'none';
    // }
    // if(val==3)//Option 3 is select to display fastcash option
    // {
    // document.getElementById ('display1').style.display = 'block';
    // document.getElementById ('display').style.display = 'none';
    // }
    // }
    // function getamount()
    // {
    // //function To Withdraw Amount
    // m = 10000;
    // //Intialise the textbox value in a varible
    // var a = document.getElementById ('amount1' ).value;
    // //Check if entered amount is greater than the original amount or not and it also should be mulitple of 100
    // if(a<=m&&a%100==0)
    // //alert("" +a);
    // document.getElementById ('display').innerHTML ="Your withdraw amount : "+a;
    // else
    // //alert("invalid cash");
    // document.getElementById ('display').innerHTML ="Invalid cash";
    // }
    // function getamount1()
    // {
    // //Intialise the Dropdown value in a varible
    // var x = document.getElementById ("myselect1").value
    // m = 10000;
    // //check if selected amount is greater than the original amount or not and it should be mulitple of 100
    // if(x<=m&&x%100==0)
    // //alert("take your amount" +x);
    // document.getElementById ('display1').innerHTML ="Please take your amount : "+x;
    // else
    // document.getElementById ('display1').innerHTML ="Invalid cash";
    // }