function IsInArray(var array, var size, var elem)
{
    var found = false;
    for(var i=0; i<size; i++)
	if (array[i] == elem)
	    return true;
    
    return false;
}