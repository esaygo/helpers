function IsInArray(array, size, elem)
{
    var found = false;
    for(var i=0; i<size; i++)
	if (array[i] == elem)
	    return true;

    return false;
}

var size=5;
