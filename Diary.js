var selectedMonthValue = "Selected Month: ";
  
function MonthSelected(selectedMonth) 
  {
    selectedMonthValue = 'Selected Month ' + selectedMonth;
    localStorage.setItem("month",selectedMonth)
    document.getElementById('lblSelectedMonth').innerHTML = selectedMonthValue;
   
  }

  function AddDiaryEntry()
  {
    window.location = "DiaryWriting.html";
  }
