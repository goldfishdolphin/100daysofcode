
"""Convert number to reversed array of digits

Given a random non-negative number,
 you have to return the digits of this number 
 within an array in reverse order."""
def digitize(n):
    
    #convert number to a string
    
    my_string =  str(n)
    
    result = [int(y) for y in my_string]
    
    my_array = result[::-1]
    
    return my_array

