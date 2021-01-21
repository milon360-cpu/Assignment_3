
// Convert Kilometer to Meter 
function kilometerToMeter(kiloMeter)
{
    if(kiloMeter<0)
    {
        return "Error!! Kilometer don't accept negative value";
    }
    return kiloMeter*1000;
}



// Budget Calculator 
function budgetCalculator(watch,phone,laptop)
{
    if(watch<0 || phone<0 || laptop<0 )
    {
        return "Error!! Negative Value don't accepted";
        
    }
    var watchPrice = watch*50;
    var phonePrice = phone*100;
    var laptopPrice = laptop*500;
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
}


// Hotel Cost 
function hotelCost(day)
{
    numberOfDay = day;
    if(numberOfDay<0)
    {
        return "Error!! Negative Value don't accepted";
    }
    else if(numberOfDay<=10)
    {
        return numberOfDay*100;
    }
    else if(numberOfDay<=20)
    {
        var firstTenDays = 10*100;
        var Remaining = numberOfDay-10;
        var afterTenDays = Remaining*80;

        var totalCost = firstTenDays + afterTenDays;
        return totalCost;
    }
    else
    {
        var firstTenDays = 10*100;
        var afterTenDays = 10*80;
        var Remaining = numberOfDay-20;
        var afterTwentyDays = Remaining*50;

        var totalCost = afterTwentyDays + afterTenDays + firstTenDays;
        return totalCost;
    }
}


// Mega Friend 
function megaFrind(Name)
{   
  var i;
  var Max = Name[0];
 
  for(i=1; i<Name.length; i++)
  {
      if(Max.length<Name[i].length)
      {
          Max = Name[i];
      }
  }
  return Max;
}

