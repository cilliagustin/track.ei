const tutorialBtn = document.getElementById("tutorial-button");
const tutorialContent = [
`Hello, thank you for using Track-e.i, in this tutorial you will learn how to use this site.</br>
 You can close this tutorial with the X button and move to the previous or next step of this 
 Walkthrough with the buttons below.</br>Now we will see all the sites tools and how it would
 look if we add lots of information!`,
`You can use the Navbar to change the different sections. Next to this you have the hamburger
 menu which opens the dropdown menu with some extra options.`,
`Here you can select the currency of your preference and the decimal separator symbol that is 
used in your country.`,
`In this section you can add all your transactions (either incomes or expenses) and add all 
the relevant information.</br>Let’s see an example of how to add new transactions.`,
`In these first three boxes, you can add the amount, a small note and date of your transaction.</br>
Remember, the selected date cannot be after the current day.`,
`Before adding the category, select using these buttons if the transaction is either an 
income or an expense.`,
`Here all the category options will be displayed, select the one that suits better your transaction.`,
`After selecting it, the category will be displayed here.`,
`Press the submit button to send the information, you will see a confirmation popup if all 
the information provided is correct.`,
`Now we can go the Balance section. Here you can see your current Balance as well how you 
earned or spend the money.`,
`Here a total of your incomes and expenses will be displayed, bellow that you will see the 
total balance.`,
`By pressing these buttons you can see all transactions categorized below as well as a 
donut chart on the top.`,
`All the transactions are categorized here, and you can see the total amount and what 
percentage it occupies.</br>The percentage for a better experience is rounded, so it 
is possible that the result of summing all numbers won’t be 100%`,
`When one of these elements is clicked or hovered with the mouse, it will be 
highlighted for a better reference.`,
`The donut chart will also be highlighted, showing the selected element and displaying 
the rest in a darker tone.</br>the information (category, amount and percentage) will 
be displayed instead of the balance.`,
`In this section, every transaction will be displayed ordered by date (from most recent to oldest)`,
`Each day will have its own balance with every transaction displayed on that specific day grouped.`,
`In every transaction you will find at the end an X button which when pressed deletes 
the transaction for the database.`,
`In the footer besides the button you just pressed there are links to the creator of this website's GitHub page as well a link to send him an email.`,
`This is all, thanks for going through this tutorial and enjoy the site.</br>Remember that for an optimal experience, if you are using this website with a phone to avoid using the landscape mode.`
]
let tutorialIndex
let tutorialData1 = [
    {amount: 1200,
    category: "salary",
    date: "2022-07-01",
    note: "Salary july",
    timeStamp: 1660325421332,
    type: "income"},
    {amount: 300,
    category: "sell stock crypto",
    date: "2022-07-12",
    note: "sell Bitcoin",
    timeStamp: 1660325458172,
    type: "income"},
    {amount: 250,
    category: "sell stock crypto",
    date: "2022-07-06",
    note: "Sell ETH",
    timeStamp: 1660325514750,
    type: "income"},
    {amount: 1200,
    category: "salary",
    date: "2022-06-01",
    note: "Salary June",
    timeStamp: 1660325535645,
    type: "income"},
    {amount: 200,
    category: "other (income)",
    date: "2022-06-15",
    note: "Sold old phone",
    timeStamp: 1660325578149,
    type: "income"},
    {amount: 350,
    category: "rent",
    date: "2022-06-01",
    note: "Rent apartment",
    timeStamp: 1660325599621,
    type: "expense"},
    {amount: 350,
    category: "rent",
    date: "2022-07-01",
    note: "Rent Apartment",
    timeStamp: 1660325619500,
    type: "expense"},
    {amount: 278,
    category: "groceries",
    date: "2022-06-03",
    note: "supermaket",
    timeStamp: 1660325652419,
    type: "expense"},
    {amount: 243,
    category: "groceries",
    date: "2022-06-14",
    note: "supermarket",
    timeStamp: 1660325668748,
    type: "expense"},
    {amount: 265,
    category: "groceries",
    date: "2022-06-22",
    note: "supermarket",
    timeStamp: 1660325704694,
    type: "expense"},
    {amount: 300,
    category: "groceries",
    date: "2022-07-10",
    note: "supermarket",
    timeStamp: 1660325719982,
    type: "expense"},
    {amount: 50,
    category: "entertaining",
    date: "2022-07-04",
    note: "movie Theater",
    timeStamp: 1660325765349,
    type: "expense"},
    {amount: 87,
    category: "restaurants",
    date: "2022-07-06",
    note: "Date",
    timeStamp: 1660325796989,
    type: "expense"},
    {amount: 1200,
    category: "salary",
    date: "2022-08-01",
    note: "salary August",
    timeStamp: 1660325796189,
    type: "income"}
]
let tutorialData2 = [...tutorialData1];
tutorialData2.push({amount: 40,category: "bills",date: "2022-08-01",note: "Internet bill",timeStamp: 1660326348787,type: "expense"})



tutorialBtn.addEventListener("click", startTutorial);
document.body.addEventListener("click", endTutorial);
document.body.addEventListener("click", changeTutorialStep);

function startTutorial(){
    tutorialIndex = 0;
    let tutorialBackground = document.createElement('div');
    tutorialBackground.classList.add('tutorial-background')
    document.body.insertBefore(tutorialBackground, balanceSection)
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
            <div class="modal-head">
            <i class="fa-solid fa-xmark" id="close-modal"></i>
            <p>${tutorialContent[0]}</p>
        </div>
        <div class="modal-body">
            <button data-modal-btn id="btn-prev"><p>Prev</p><i class="fa-solid fa-circle-chevron-left"></i></button>
            <button data-modal-btn id="btn-next"><p>Next</p><i class="fa-solid fa-circle-chevron-right"></i></button>
        </div>`
    document.body.insertBefore(modal, balanceSection)
    let modalButtons = document.querySelectorAll('.modal .modal-body button')
    modalButtons[0].classList.add('hide')
    centerModal();
    populateTutorial(tutorialData1);
}

function changeTutorialStep(e){
    let modalButtons = document.querySelectorAll('.modal .modal-body button');
    //check that a prev next button was pressed
    if(e.target.hasAttribute('data-modal-btn')){
        //sum or subtract to index depending on which button was pressed
        if(e.target.id === "btn-prev"){
            tutorialIndex--;
        } else if(e.target.id === "btn-next"){
            tutorialIndex++;
        }

        //check if there are highlighted elements and delete highlight
        let prevTutorialElementsArray = document.querySelectorAll('.tutorial-step');
        prevTutorialElementsArray.forEach(el =>{
            el.classList.remove("tutorial-step")
        })

        //Add inner html to modal text
        let modalText = document.querySelector('.modal .modal-head p')
        modalText.innerHTML = tutorialContent[tutorialIndex];

        switch(tutorialIndex){
            case 0:
                modalButtons[0].classList.add('hide');
                centerModal();
                break;
            case 1:
                checkbox.checked = false;
                modalButtons.forEach(btn =>{
                    btn.classList.remove('hide')
                });
                break;
            case 2:
                checkbox.checked = true;
                break;
            case 3:
                checkbox.checked = false;
                deleteValues(inputs)
                break;
            case 4:
                inputAmount.value = 40;
                inputNote.value = "Internet bill";
                inputDate.value = "2022-08-01";
                break;
            case 5:
                resetAddSection();
                break;
            case 6:
                showAddExpense()
                document.getElementById("bills").checked = true
                inputCategory.classList.remove("active");
                break;
            case 7:
                inputCategory.value = "bills";
                inputCategory.classList.add("active");
                break;
            case 8:
                inputAmount.value = 40;
                inputNote.value = "Internet bill";
                inputDate.value = "2022-08-01";
                showAddExpense()
                document.getElementById("bills").checked = true
                inputCategory.value = "bills";
                inputCategory.classList.add("active");
                populateTutorial(tutorialData1)
                break;
            case 9:
                populateTutorial(tutorialData2)
                resetAddSection()
                deleteValues(inputs)
                break;
            case 11:
                resetBalanceSection()
                break;
            case 12:
                showBalanceExpense()
                document.querySelector('[data-tutorial-step="13"]').classList.remove('active');
                break;
            case 13:
                document.querySelector('[data-tutorial-step="13"]').classList.add('active');
                createHighlightPiechart();
                break;
            case 14:
                showBalanceExpense()
                createHighlightPiechart();
                document.querySelector('[data-tutorial-step="10"]').classList.add('tutorial-step');
                document.querySelector('[data-tutorial-step="13"]').classList.add('active');
                break;
            case 15:
                    resetBalanceSection()
                break;
       }
        
        //check current index, highlight element with that data tutorial step
        let tutorialElementsArray = document.querySelectorAll(`[data-tutorial-step="${tutorialIndex}"]`);
        if(tutorialElementsArray[0] !== undefined){
            tutorialElementsArray.forEach(el =>{
            el.classList.add("tutorial-step")
            });
            //locate modal next to highlited element
            locateModal()
        }
        console.log(tutorialIndex) 
    }
}

function endTutorial(e){
    if(e.target.id === "close-modal"){
        let tutorialBackground = document.querySelector('.tutorial-background');
        let modal = document.querySelector('.modal');

        tutorialBackground.remove();
        modal.remove();
    }
}

function centerModal(){
    let modal = document.querySelector(".modal");
    let width = modal.offsetWidth;
    let height = modal.offsetHeight;
    modal.style.left = `calc(50% - ${width / 2}px)`;
    modal.style.top = `calc(50% - ${height / 2}px)`;
}

function locateModal(){
    //set highlited element measures and positions
    let modal = document.querySelector(".modal");
    let lastElement = (document.querySelectorAll('.tutorial-step').length) -1;
    let currentTutotialElement = document.querySelectorAll('.tutorial-step')[lastElement];
    let rect =currentTutotialElement.getBoundingClientRect()
    console.log(rect)
    //delete previous style    
    modal.removeAttribute("style")

    //decide modal position regarding the highlited element
    let topPoint = rect.top;
    let bottomPoint = rect.bottom;
    let leftPoint = rect.left;
    let rightPoint = rect.right;
    let modalHeight = modal.offsetHeight;
    let modalWidth = modal.offsetWidth;

    //if element is on top of the window locate modal bellow
    if(topPoint <= window.innerHeight - bottomPoint){
        modal.style.top = `${rect.top + rect.height + 10}px`;
    } else {
        modal.style.top = `${rect.top - modalHeight - 10}px`;
    }
    
    //if element is on the left part of the window locate modal slightly to the right
    if(leftPoint <= window.innerWidth - rightPoint + 1){
        modal.style.left = `${rect.left + 10}px`;
    } else {
        modal.style.left = `${rect.left + rect.width - modalWidth - 10}px`;
        console.log(leftPoint, innerWidth, rightPoint)
    }

    //When highlighting sections center modal

    if(topPoint === 35 && bottomPoint - rect.height === 35){
        centerModal()
    }
}



//tutorial functions

//populate tutorial with data
function populateTutorial(tutorialArray){
    data = tutorialArray;
    //Adds to the dataBy date transactions grouped by date and orders ir from most recent to oldestone
    dataByDate = sortObj(groupBy('date', data))
    //Populates the calendar section with the dataByDate
    populateCalendar(dataByDate)
    //Create data for expense and income transactions
    createBalanceData(data)
    //Populates the Balance section with the income and expense data
    populateBalance()

    //dinamically add data-tutorial-step to new elements
    //add data-tutorial-step to pie chart result
    document.querySelector('.pie-chart-result').setAttribute('data-tutorial-step', '10');
    //add data-tutorial-step to bills element in pie chart info
    if(document.querySelector('.pie-chart-info [data-add-category="bills"]')){
        document.querySelector('.pie-chart-info [data-add-category="bills"]').setAttribute('data-tutorial-step', '13');
    }
    //add data-tutorial-step to donut chart
    document.querySelectorAll('.pie-chart-container svg[data-add-category]').forEach(svg =>{
        svg.setAttribute('data-tutorial-step', '14');
    })
    //add data-tutorial-step to cross icon in second transaction on calendar section
    document.querySelectorAll('#calendar .container ul li ul li div i')[1].setAttribute('data-tutorial-step', '16');
}

//give expense look to add section
function showAddExpense(){
    //add expense class to add section
    addSection.classList.add("expense");

    //add active class to button
    addExpenseIncomeBtn[1].classList.add('active')

    //filter radio lebel with expense category
    addRadioLabel.forEach(label => {
        if(label.getAttribute('data-radio-category') === "expense"){
            label.classList.remove('hide')
        } 
    })
}

//reset add section style + content
function resetAddSection(){
    //delete expense class to add section
    addSection.classList.remove("expense");

    //delete active class to button
    addExpenseIncomeBtn[1].classList.remove('active')

    //delete input category active class
    inputCategory.classList.remove("active")

    //hide radio lebel with expense category
    addRadioLabel.forEach(label => {
            label.classList.add('hide')
    })
}

function showBalanceExpense(){
    //add expense class to balance section
    balanceSection.classList.add("expense");

    //add active class to button
    balanceExpenseIncomeBtn[1].classList.add('active')

    //Show pie chart elements with data-add-type expense
    let balanceElements = document.querySelectorAll('[data-add-category]');
    balanceElements.forEach(el =>{
        if(el.getAttribute('data-add-type') === "expense"){
            el.classList.remove("hide");
        }
    })
}

function resetBalanceSection(){
    //delete expense class to balance section
    balanceSection.classList.remove("expense");

    //delete active class to button
    balanceExpenseIncomeBtn[1].classList.remove('active')

    //hide all pie chart elements
    let balanceElements = document.querySelectorAll('[data-add-category]');
    balanceElements.forEach(el =>{
        el.classList.add("hide");
    })
    
}

function createHighlightPiechart(){
    let pieChartResult = document.querySelector('.pie-chart-result')
    let div = document.createElement('div');
    div.setAttribute('id', 'selected-element');
    div.classList.add('active')
    div.setAttribute('data-tutorial-step', '14');
    div.innerHTML = `
    <i class="fa-solid fa-file-invoice-dollar"></i>
        <p class="category"> bills</p>
        <p class="amount">US$ 40.00</p>
        <p class="percentage">2.04%</p>
    `
    pieChartResult.appendChild(div)
    let circles = document.querySelectorAll('#balance .pie-chart .pie-chart-container svg[data-add-type]');
    circles.forEach(circle =>{
        if(circle.getAttribute('data-add-category') === 'bills'){
            circle.firstElementChild.classList.add('active');
        }else{
            circle.firstElementChild.classList.add('unactive')
        }
    })
}